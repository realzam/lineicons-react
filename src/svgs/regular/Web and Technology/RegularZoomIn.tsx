import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgZoomIn = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M61 51.1 46.7 36.7c-.8-.8-1.8-1.2-3-1.2-1.1 0-2.2.4-3 1.2l-.4.4-2.8-2.8c6.3-7.9 5.8-19.5-1.5-26.8-3.8-3.8-8.8-5.9-14.2-5.9-5.4 0-10.4 2.1-14.2 5.9-7.8 7.8-7.8 20.6 0 28.4 3.8 3.8 8.8 5.9 14.2 5.9 4.6 0 9-1.6 12.5-4.4l2.8 2.8-.4.4c-1.6 1.6-1.6 4.3 0 5.9l14.4 14.4c.8.8 1.8 1.2 3 1.2 1.1 0 2.2-.4 3-1.2l4-4c1.6-1.5 1.6-4.2-.1-5.8zM21.8 37.4c-4.2 0-8.1-1.6-11-4.6-6.1-6.1-6.1-16 0-22.1 2.9-2.9 6.9-4.6 11-4.6 4.2 0 8.1 1.6 11 4.6 6.1 6.1 6.1 16 0 22.1-2.9 3-6.8 4.6-11 4.6zM54 57.7l-13.9-14 3.6-3.6L57.6 54 54 57.7z" />
    <path d="M26.9 19.6h-2.8v-2.8c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v2.8h-2.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8V27c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-2.8h2.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgZoomIn;
