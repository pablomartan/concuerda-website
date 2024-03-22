import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { SpringValue, animated, useTrail } from "@react-spring/web";
import "./animated-title.style.scss";

type AnimatedLetterType = {
  style: {
    opacity: SpringValue<number>;
    x: SpringValue<number>;
  };
};

const AnimatedLetter: FC<PropsWithChildren<AnimatedLetterType>> = ({
  style,
  children,
}) => {
  return children === " " ? (
    children
  ) : (
    <animated.span style={style}>{children}</animated.span>
  );
};

const AnimatedTitle: FC<
  PropsWithChildren<{ text: string; className: string }>
> = ({ text, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement | null>(null);
  const letters = text.split("");

  const [trails, api] = useTrail(
    letters.length,
    () => ({
      from: { opacity: 0, x: 80 },
    }),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log({
        entry,
      });

      if (entry.isIntersecting) {
        setIsVisible(true);
        api.start({ to: { opacity: 1 }, config: { clamp: true } });
        api.start({
          to: { x: 0 },
          config: {
            tension: 200,
            friction: 20,
          },
        });
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <h2
      className={className.concat(isVisible ? " animated-title" : "")}
      ref={ref}
    >
      {letters.map((letter, i) => {
        return (
          <AnimatedLetter key={letter + i.toString()} style={trails[i]}>
            {letter}
          </AnimatedLetter>
        );
      })}
    </h2>
  );
};

export default AnimatedTitle;
