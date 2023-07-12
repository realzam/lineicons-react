import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMagento = ({
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
    <path d="M32 1 5.2 16.5v31l7.6 4.5V21L32 9.9 51.2 21v31l7.6-4.5v-31z" />
    <path d="M35.9 52 32 54.1 28.2 52V21l-7.8 4.4v31L32 63l11.6-6.6v-31L35.9 21z" />
  </svg>
);
export default SvgMagento;
