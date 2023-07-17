import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLayout = ({
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
    <path d="M55.8 1.9H8.1c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V8.1c.1-3.4-2.7-6.2-6.1-6.2zM8.1 6.4h47.6c1 0 1.8.8 1.8 1.8V17H6.4V8.1c0-1 .8-1.7 1.7-1.7zm13.4 15h36v15.9h-36V21.4zM6.4 55.8V21.4H17v36.1H8.1c-.9 0-1.7-.8-1.7-1.7zm49.4 1.7H21.5V41.8h36v14c0 .9-.7 1.7-1.7 1.7z" />
  </svg>
);
export default SvgLayout;
