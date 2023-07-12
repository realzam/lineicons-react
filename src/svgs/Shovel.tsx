import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShovel = ({
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
    <path d="m61.6 15.1-6.4-6.4-6.4-6.4c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l4.8 4.9-2.8 2.6-.6-.6c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l.6.6L28 32.8l-4.6-4.6c-1-1-2.6-1-3.6 0L5.1 43.1C.7 47.5.7 54.8 5.1 59.2c2.1 2.2 5 3.3 8 3.3s5.9-1.2 8-3.3l14.7-14.9c1-1 1-2.6 0-3.6L31.2 36l16.5-16.6.5.5c.9.9 2.3.9 3.2 0 .9-.9.9-2.3 0-3.2l-.5-.6 2.8-2.8 4.8 4.8c.9.9 2.3.9 3.2 0 .8-.7.8-2.1-.1-3zM31.2 42.5 17.9 56c-1.3 1.3-3 2-4.8 2-1.8 0-3.5-.7-4.8-2-2.7-2.7-2.7-7.1 0-9.8l13.3-13.5 3.2 3.3-.6.6c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l.5-.5 3.3 3.2z" />
  </svg>
);
export default SvgShovel;
