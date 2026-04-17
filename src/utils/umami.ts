declare global {
  interface Window {
    umami?: {
      track: ((event: string, data?: Record<string, unknown>) => void) &
        ((callback: (props: Record<string, unknown>) => Record<string, unknown>) => void);
    };
  }
}

export function trackEvent(name: string, data?: Record<string, unknown>): void {
  window.umami?.track(name, data);
}

export function trackSectionView(sectionName: string): void {
  window.umami?.track('section-view', { section: sectionName });
}

export function createSectionObserver(
  sections: { id: string; name: string }[]
): IntersectionObserver | null {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return null;
  }

  const tracked = new Set<string>();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const section = sections.find((s) => s.id === entry.target.id);
        if (section && !tracked.has(section.id)) {
          tracked.add(section.id);
          trackSectionView(section.name);
        }
      });
    },
    { threshold: 0.3 }
  );

  return observer;
}
