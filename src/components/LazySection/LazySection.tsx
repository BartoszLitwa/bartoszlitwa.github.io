import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react';

interface LazySectionProps {
  sectionId: string;
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: number;
}

const LazySection = ({
  sectionId,
  children,
  fallback = null,
  rootMargin = '400px 0px',
  minHeight = 320
}: LazySectionProps) => {
  const [isActivated, setIsActivated] = useState(() => typeof IntersectionObserver === 'undefined');
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActivated) return;

    const anchor = anchorRef.current;
    if (!anchor || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsActivated(true);
        observer.disconnect();
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(anchor);
    return () => observer.disconnect();
  }, [isActivated, rootMargin]);

  const style: CSSProperties = isActivated ? {} : { minHeight };

  return (
    <div ref={anchorRef} data-lazy-section={sectionId} style={style}>
      {isActivated ? children : fallback}
    </div>
  );
};

export default LazySection;
