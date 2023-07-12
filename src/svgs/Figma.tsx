import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFigma = ({
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
    <path d="M42.4 21.5c5.8 0 10.4-4.6 10.4-10.4S48 1 42.4 1H21.6c-5.8 0-10.4 4.6-10.4 10.4s4.6 10.4 10.4 10.4c-5.8 0-10.4 4.6-10.4 10.4s4.6 10.4 10.4 10.4c-5.8 0-10.4 4.6-10.4 10.4s4.7 10 10.4 10S32 58.4 32 52.6V21.8h10.4v-.3zm0 0c-5.8 0-10.4 4.6-10.4 10.4s4.6 10.4 10.4 10.4 10.4-4.6 10.4-10.4c-.3-5.8-4.8-10.4-10.4-10.4z" />
  </svg>
);
export default SvgFigma;
