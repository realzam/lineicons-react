import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgList = ({
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
    <path d="M16.1 14.5h44.5c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H16.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM60.5 29.8H16.1c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h44.5c1.2 0 2.3-1 2.3-2.3-.1-1.3-1.1-2.3-2.4-2.3zM60.5 49.5H16.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h44.5c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3z" />
    <circle cx={6.2} cy={12.2} r={2.7} />
    <circle cx={6.2} cy={32} r={2.7} />
    <circle cx={6.2} cy={51.8} r={2.7} />
  </svg>
);
export default SvgList;
