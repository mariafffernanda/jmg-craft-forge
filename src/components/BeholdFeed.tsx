import { useEffect, useRef } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "feed-id"?: string },
        HTMLElement
      >;
    }
  }
}

interface BeholdFeedProps {
  feedId?: string;
  className?: string;
}

const BeholdFeed = ({ feedId = "rvLB0SdxOqUkC143agoz", className }: BeholdFeedProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the widget script is loaded (in case index.html tag was stripped)
    if (!document.querySelector('script[src="https://w.behold.so/widget.js"]')) {
      const s = document.createElement("script");
      s.type = "module";
      s.src = "https://w.behold.so/widget.js";
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div ref={ref} className={className}>
      <behold-widget feed-id={feedId}></behold-widget>
    </div>
  );
};

export default BeholdFeed;