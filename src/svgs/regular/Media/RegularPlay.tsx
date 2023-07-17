import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlay = ({
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
    <path d="M9.7 62.3c-.7 0-1.5-.2-2.1-.6-1.4-.8-2.2-2.1-2.2-3.7V6c0-1.5.8-2.9 2.2-3.7 1.4-.8 3-.7 4.4.1l44.8 26.1c1.3.8 2 2.1 2 3.6 0 1.4-.7 2.8-2 3.5l-44.9 26c-.7.4-1.5.7-2.2.7zm-.1-4.5zm.2-51.4v51.2l44-25.6-44-25.6z" />
  </svg>
);
export default SvgPlay;
