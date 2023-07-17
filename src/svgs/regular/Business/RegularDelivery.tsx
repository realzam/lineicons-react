import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDelivery = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M58.17 11H26.92a4.83 4.83 0 0 0-4.83 4.83v.44H8.59a2.65 2.65 0 0 0-2.36 1.47l-4.95 10.1A2.65 2.65 0 0 0 1 29v15.65a2 2 0 0 0 2 2h2.71a7.64 7.64 0 0 0 15.06 0h21a7.64 7.64 0 0 0 15.06 0h3.47A2.7 2.7 0 0 0 63 44V15.85A4.83 4.83 0 0 0 58.17 11ZM9.45 20.29h12.64v6.55H6.23ZM13.24 49a3.66 3.66 0 1 1 3.65-3.65A3.66 3.66 0 0 1 13.24 49Zm0-11.31a7.65 7.65 0 0 0-7.16 5H5V30.84h17.09v11.81H20.4a7.65 7.65 0 0 0-7.16-4.98ZM49.29 49a3.66 3.66 0 1 1 3.65-3.65A3.66 3.66 0 0 1 49.29 49ZM59 42.65h-2.55a7.64 7.64 0 0 0-14.33 0h-16v-26.8a.84.84 0 0 1 .83-.83h31.22a.84.84 0 0 1 .83.83Z" />
  </svg>
);
export default SvgDelivery;
