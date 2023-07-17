import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPyramids = ({
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
    <path d="M56.8 52.7H7.2c-1.9 0-3.6-1-4.6-2.6-.9-1.7-.9-3.6 0-5.3L16 22.1c.7-1.1 1.8-1.8 3.2-1.8 1.3 0 2.5.7 3.2 1.8l4.2 7 9.4-16c.7-1.1 1.8-1.8 3.2-1.8 1.3 0 2.5.7 3.2 1.8l19 31.7c1 1.6 1 3.6.1 5.3-1.1 1.6-2.8 2.6-4.7 2.6zM19.2 25.6 6.5 47.1c-.2.3-.1.6 0 .8.1.1.3.4.7.4h49.6c.4 0 .6-.2.7-.4.1-.1.2-.4 0-.8L39.1 16.6l-9.4 16c-.7 1.1-1.8 1.8-3.2 1.8-1.3 0-2.5-.7-3.1-1.8l-4.2-7z" />
  </svg>
);
export default SvgPyramids;
