import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPatreon = ({
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
    <path d="M63 24.7C63 37 53 47 40.7 47S18.4 37 18.4 24.7s10-22.3 22.3-22.3C53 2.3 63 12.3 63 24.7zm-62 37h11V2.3H1v59.4z" />
  </svg>
);
export default SvgPatreon;
