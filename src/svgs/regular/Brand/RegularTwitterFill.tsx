import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitterFill = ({
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
    <path d="m56.1 15.3 3.8-4.8c1.1-1.3 1.4-2.3 1.5-2.8-3 1.8-5.8 2.4-7.6 2.4h-.7l-.4-.4c-2.4-2.1-5.4-3.2-8.6-3.2-7 0-12.5 5.8-12.5 12.5 0 .4 0 1 .1 1.4l.3 2-2.1-.1C17.1 21.9 6.6 10.9 4.9 9c-2.8 5-1.2 9.8.5 12.8l3.4 5.6-5.4-3c.1 4.2 1.7 7.5 4.8 9.9l2.7 2-2.7 1.1c1.7 5.1 5.5 7.2 8.3 8l3.7 1-3.5 2.4c-5.6 4-12.6 3.7-15.7 3.4 6.3 4.4 13.8 5.4 19 5.4 3.9 0 6.8-.4 7.5-.7 28-6.6 29.3-31.6 29.3-36.6v-.7l.6-.4c3.4-3.2 4.8-4.9 5.6-5.9-.3.1-.7.3-1.1.4l-5.8 1.6z" />
  </svg>
);
export default SvgTwitterFill;
