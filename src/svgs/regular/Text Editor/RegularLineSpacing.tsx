import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLineSpacing = ({
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
    <path d="M37.2 7.6h22.7c1.2 0 2.3-1 2.3-2.3S61.2 3 59.9 3H37.2c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM59.9 20.8H37.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h22.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM59.9 38.6H37.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h22.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM59.9 56.4H37.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h22.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM22.8 15.3c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-9.4-9.4c-1.3-1.3-3.3-1.3-4.6 0l-9.5 9.4c-.9.9-.9 2.3 0 3.2.9.9 2.3.9 3.2 0L12 9v46l-6.3-6.4c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.4 9.5c.6.6 1.4 1 2.3 1 .9 0 1.7-.3 2.3-.9l9.5-9.5c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L16.5 55V9l6.3 6.3z" />
  </svg>
);
export default SvgLineSpacing;
