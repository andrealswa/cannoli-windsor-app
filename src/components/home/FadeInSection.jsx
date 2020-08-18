import React from 'react';
import './FadeInSection.css';

export const FadeInSection = ({ children, direction }) => {
  const domRef = React.useRef();

  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // In your case there's only one element to observe:
      if (entries[0].isIntersecting) {
        // Not possible to set it back to false like this:
        setVisible(true);

        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  let directionStyle = 'section-class';
  if (direction === 'from-left') {
    directionStyle = 'section-class-from-left';
  } else if (direction === 'from-right') {
    directionStyle = 'section-class-from-right';
  }
  return (
    <section
      ref={domRef}
      className={
        isVisible ? ` is-visible ${directionStyle}` : `${directionStyle}`
      }
    >
      {children}
    </section>
  );
};
