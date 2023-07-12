import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowLeftCircle = ({
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
    <path d="M43.3 29.8H26l6-6.1c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-9.7 9.9c-.9.9-.9 2.3 0 3.2l9.7 9.9c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2l-6-6.1h17.3c1.2 0 2.2-1 2.2-2.2.1-1.3-.9-2.3-2.2-2.3z" />
    <path d="M32 1.8C15.3 1.8 1.7 15.3 1.7 32S15.3 62.2 32 62.2 62.3 48.7 62.3 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.2 46.2 6.2 32 6.2 17.8 17.8 6.2 32 6.2S57.8 17.8 57.8 32c0 14.2-11.6 25.8-25.8 25.8z" />
  </svg>
);
export default SvgArrowLeftCircle;
