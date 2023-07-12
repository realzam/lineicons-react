import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAngleDoubleDown = ({
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
    <path d="M30.4 38.4c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6l23-22.6c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L32 33.6l-21.4-21c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l23 22.6z" />
    <path d="M53.4 25.6 32 46.6l-21.4-21c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l23 22.6c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6l23-22.6c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0z" />
  </svg>
);
export default SvgAngleDoubleDown;
