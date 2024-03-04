import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

type Direction = "up" | "down" | "left" | "right";

type AppearingComponentType = {
  direction: Direction;
  rootMargin?: string;
  className?: string;
};

const fromProps = (direction: Direction, ammount: number = 80) => {
  switch (direction) {
    case "up":
      return { from: { y: ammount, x: 0 } };
    case "down":
      return { from: { y: ammount * -1, x: 0 } };
    case "left":
      return { from: { x: ammount, y: 0 } };
    case "right":
      return { from: { x: ammount * -1, y: 0 } };
  }
};

const AppearingComponent: FC<PropsWithChildren<AppearingComponentType>> = ({
  direction,
  rootMargin = "-300px",
  className = "",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const [spring, api] = useSpring(() => ({
    ...fromProps(direction),
  }));

  const opacity = useSpring({
    opacity: isVisible ? 1 : 0,
    config: {
      duration: 300,
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: rootMargin },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  if (isVisible) {
    api.start({
      to: { x: 0, y: 0 },
    });
  }

  return (
    <animated.div
      style={{ ...spring, ...opacity }}
      ref={ref}
      className={className}
    >
      {children}
    </animated.div>
  );
};

export default AppearingComponent;
