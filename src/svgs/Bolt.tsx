import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBolt = ({
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
    <path d="M28.4 62.3c-.7 0-1.3-.1-2-.4-1.9-.9-2.9-2.9-2.5-5l3-15.9H8.6c-1.7 0-3.3-1-4.1-2.5-.8-1.5-.6-3.4.4-4.8L27.4 3.6C28.6 2 30.6 1.4 32.5 2c1.9.6 3.1 2.3 3.1 4.3v14.1h19.8c1.8 0 3.4 1 4.1 2.6.8 1.6.5 3.5-.6 4.8l-27 32.8c-.9 1.1-2.2 1.7-3.5 1.7zm2.6-56L8.5 36.4l21.1.1c.7 0 1.3.3 1.7.8.4.5.6 1.2.5 1.9l-3.5 18.6.1.1L55.5 25l-22.1-.1c-1.2 0-2.3-1-2.3-2.3L31 6.3z" />
  </svg>
);
export default SvgBolt;
