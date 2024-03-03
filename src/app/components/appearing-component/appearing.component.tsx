import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

type Direction = "up" | "down" | "left" | "right";

type AppearingComponentType = {
  direction: Direction;
  rootMargin?: string;
};

const fromProps = (direction: Direction, ammount: number = 80) => {
  switch (direction) {
    case "up":
      return { from: { y: ammount * -1 } };
    case "down":
      return { from: { y: ammount } };
    case "left":
      return { from: { x: ammount } };
    case "right":
      return { from: { x: ammount * -1 } };
  }
};

const toProps = (direction: Direction) => {
  switch (direction) {
    case "up":
    case "down":
      return { to: { y: 0 } };
    case "left":
    case "right":
      return { to: { x: 0 } };
  }
};

const AppearingComponent: FC<PropsWithChildren<AppearingComponentType>> = ({
  direction,
  rootMargin = "-300px",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

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
      ...toProps(direction),
    });
  }

  return (
    <animated.div style={{ ...spring, ...opacity }} ref={ref}>
      {children}
    </animated.div>
  );
};

export default AppearingComponent;
