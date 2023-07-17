import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBullhorn = ({
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
    <path d="M55.9 1.8h-8.1c-3.2 0-5.9 2.4-6.2 5.5L17.2 9.7H8.1c-3.4 0-6.2 2.7-6.2 6v16.5c0 2.3 1.4 4.4 3.4 5.4l3.5 19.3c.7 3.1 3.6 5.4 6.9 5.4 2.2 0 4.3-1 5.7-2.7 1.2-1.5 1.7-3.4 1.3-5.2L20 38.8 41.5 43c.2 3.3 2.9 5.9 6.2 5.9h8.1c3.4 0 6.3-2.8 6.3-6.3V8c0-3.4-2.8-6.2-6.2-6.2zM19.6 14l21.9-2.2v26.6l-21.9-4.3V14zM6.4 15.7c0-.7.7-1.5 1.7-1.5h7v19.5h-7c-.9 0-1.7-.7-1.7-1.5V15.7zm11.5 41.1c-.5.6-1.3 1-2.2 1-1.2 0-2.3-.8-2.5-1.7L10 38.2h5.3l2.9 17v.1c.2.7-.1 1.2-.3 1.5zm39.7-14.2c0 1-.8 1.8-1.8 1.8h-8.1c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h8.1c1 0 1.8.8 1.8 1.8v34.6z" />
  </svg>
);
export default SvgBullhorn;
