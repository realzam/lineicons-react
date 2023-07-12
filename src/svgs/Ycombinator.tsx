import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYcombinator = ({
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
    <path d="M1 1v62h62V1H1zm33.1 35.2V49H30V36.2L19.2 16.1h4.9s7.9 16.1 8 16.3c.1-.7 8.2-16.2 8.2-16.2h4.5l-10.7 20z" />
  </svg>
);
export default SvgYcombinator;
