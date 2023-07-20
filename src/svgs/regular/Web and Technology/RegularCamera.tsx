import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCamera = ({
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
    <path d="M60.4 19.7c-1.2-1.2-2.8-1.9-4.5-1.9h-7.3v-3.9c0-1.1-.4-3.7-4.2-3.7h-25c-3.6 0-4 2.6-4 3.7v3.9H8.1c-3.5 0-6.4 2.9-6.4 6.4v23.2c0 3.5 2.9 6.4 6.4 6.4h47.7c3.5 0 6.4-2.9 6.4-6.4V24.2c.1-1.7-.6-3.3-1.8-4.5zm-2.7 27.7c0 1-.8 1.9-1.9 1.9H8.1c-1 0-1.9-.8-1.9-1.9V24.2c0-1 .8-1.9 1.9-1.9h8.5c1.8 0 3.3-1.5 3.3-3.3v-4.3H44V19c0 1.8 1.5 3.3 3.3 3.3h8.6c.5 0 1 .2 1.3.6.4.4.5.8.5 1.3v23.2z" />
    <path d="M31.6 23.5c-5.2 0-9.4 4.2-9.4 9.5 0 5.2 4.1 9.3 9.4 9.3 5.2 0 9.4-4.2 9.4-9.3 0-5.1-4.3-9.5-9.4-9.5zm0 14.3c-2.8 0-4.9-2.1-4.9-4.8 0-2.7 2.2-5 4.9-5s4.9 2.3 4.9 5-2.2 4.8-4.9 4.8zM13.8 25.3h-2.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgCamera;
