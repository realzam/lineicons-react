import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowTopLeft = ({
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
    <path d="M48.9 51.3c-.6 0-1.2-.2-1.6-.7L17.2 20.5l-.2 24c0 1.2-1 2.3-2.3 2.2-1.2 0-2.2-1-2.2-2.3l.3-29.4c0-1.2 1-2.2 2.2-2.2l29.5-.3c1.2 0 2.2 1 2.2 2.2 0 1.2-1 2.3-2.2 2.3l-24.2.2 30.2 30.2c.9.9.9 2.3 0 3.2-.4.4-1 .7-1.6.7z" />
  </svg>
);
export default SvgArrowTopLeft;
