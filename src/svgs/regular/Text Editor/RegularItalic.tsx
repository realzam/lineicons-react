import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgItalic = ({
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
    <path d="M51.2 1.8H22.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.5l-9.2 51.5H12.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h30.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H29.7l9.2-51.5h12.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgItalic;
