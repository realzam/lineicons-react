import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMicrosoft = ({
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
    <path d="M1 30.6h29.6V1H1v29.6zM63 30.6V1H33.4v29.6H63zM1 63h29.6V33.4H1V63zM33.4 63H63V33.4H33.4V63z" />
  </svg>
);
export default SvgMicrosoft;
