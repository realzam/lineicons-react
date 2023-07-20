import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrowel = ({
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
    <path d="M60.3 48.7 48.4 36.9c-1.2-1.2-2.9-1.9-4.6-1.9-1.6 0-3 .6-4.2 1.6l-7.4-7.4 7.7-7.6c.9-.9 1.2-2.1 1-3.3-.2-1.2-1-2.2-2.2-2.7L6.9 2c-1.4-.5-2.9-.2-4 .8-1.1 1.1-1.4 2.6-.8 4l13.5 31.6c.5 1.1 1.5 1.9 2.7 2.1.2 0 .5.1.7.1 1 0 1.9-.4 2.6-1.1l7.4-7.3 7.4 7.4c-2.1 2.5-2 6.4.4 8.8l11.9 11.9c1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9l2.4-2.4c2.5-2.5 2.5-6.6 0-9.2zm-41-13.2L7.1 7l28.6 12.2-16.4 16.3zm37.8 19.3-2.4 2.4c-.8.8-2.1.8-2.8 0L40 45.3c-.8-.8-.8-2 0-2.8l2.4-2.4c.4-.4.9-.6 1.4-.6.5 0 1 .2 1.4.6L57.1 52c.8.7.8 2 0 2.8z" />
  </svg>
);
export default SvgTrowel;
