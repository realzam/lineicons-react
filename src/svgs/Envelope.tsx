import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvelope = ({
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
    <path d="M56 9.6H8c-3.4 0-6.3 2.8-6.3 6.3v32.4c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V15.8c0-3.4-2.9-6.2-6.3-6.2zm0 4.5h.3L32 29.7 7.7 14.1H56zm0 35.8H8c-1 0-1.8-.8-1.8-1.8V18.5l23.4 15c.7.5 1.5.7 2.3.7.8 0 1.6-.2 2.3-.7l23.4-15v29.7c.2 1-.6 1.7-1.6 1.7z" />
  </svg>
);
export default SvgEnvelope;
