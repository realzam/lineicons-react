import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEnvato = ({
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
    <path d="M51.2 1.4c-1-.4-2.7-.6-5.1-.3-5.6.7-10.7 3.2-14.9 7-7.9 7.2-13.6 17-14.2 31-.1.4-1.1-.1-1.4-.1-3-5.8-4.2-11.5-1.7-20.3.4-.7-1.1-1.7-1.4-1.4-.6.6-2.8 3-4.2 5.5-7.4 13-2.6 29.4 10.5 36.7 12.9 7.3 29.4 2.7 36.7-10.4 8.3-15.2.6-45-4.3-47.7z" />
  </svg>
);
export default SvgEnvato;
