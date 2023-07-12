import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYen = ({
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
    <path d="M49.2 5.2c.6-1.1.3-2.4-.8-3.1-1.1-.6-2.4-.3-3.1.8L32 25.1 18.7 2.8c-.6-1.1-2-1.4-3.1-.8-1.1.6-1.4 2-.8 3.1l15 24.9v2.2H19.3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h10.5v5.7H19.3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h10.5v13c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2V47h10.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H34.2v-5.7h10.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H34.2v-2.2l15-25.1z" />
  </svg>
);
export default SvgYen;
