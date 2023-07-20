import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgZoomOut = ({
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
    <path d="M61 51 46.7 36.7c-1.6-1.6-4.3-1.6-5.9 0l-.4.4-2.8-2.8c2.8-3.5 4.4-7.9 4.4-12.5 0-5.4-2.1-10.4-5.9-14.2-7.8-7.8-20.6-7.8-28.4 0-3.8 3.8-5.9 8.8-5.9 14.2 0 5.4 2.1 10.4 5.9 14.2 3.9 3.9 9.1 5.9 14.2 5.9 4.4 0 8.9-1.5 12.5-4.4l2.8 2.8-.4.4c-.8.8-1.2 1.8-1.2 3 0 1.1.4 2.2 1.2 3L51.1 61c.8.8 1.9 1.2 3 1.2s2.1-.4 3-1.2l4-4c.8-.8 1.2-1.8 1.2-3 0-1.1-.5-2.2-1.3-3zM10.8 32.9c-2.9-2.9-4.6-6.8-4.6-11s1.6-8.1 4.6-11c3-3 7-4.6 11-4.6s8 1.5 11 4.6c2.9 2.9 4.6 6.8 4.6 11s-1.6 8.1-4.6 11c-6 6-15.9 6-22 0zM54 57.6 40.1 43.7l3.6-3.6L57.6 54 54 57.6z" />
    <path d="M26.9 19.6H16.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h10.2c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgZoomOut;
