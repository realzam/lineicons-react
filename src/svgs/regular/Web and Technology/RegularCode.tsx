import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCode = ({
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
    <path d="M19.6 14.1c-.9-.8-2.4-.7-3.2.2L2.6 29.9c-1.1 1.2-1.1 3.1 0 4.3l13.9 15.6c.4.5 1.1.8 1.7.8.5 0 1.1-.2 1.5-.6.9-.8 1-2.3.2-3.2L6.7 32l13.1-14.7c.9-1 .8-2.4-.2-3.2zM61.4 29.9 47.5 14.3c-.8-.9-2.2-1-3.2-.2s-1 2.2-.2 3.2L57.3 32 44.2 46.7c-.8.9-.7 2.3.2 3.2.4.4 1 .6 1.5.6.6 0 1.2-.3 1.7-.8l13.9-15.6c1-1.2 1-3-.1-4.2zM37.9 14.4c-1.2-.4-2.5.2-2.8 1.4L24.7 46.7c-.4 1.2.2 2.5 1.4 2.8.2.1.5.1.7.1.9 0 1.8-.6 2.1-1.5l10.3-30.9c.5-1.1-.1-2.4-1.3-2.8z" />
  </svg>
);
export default SvgCode;
