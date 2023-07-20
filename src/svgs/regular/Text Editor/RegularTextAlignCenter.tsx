import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextAlignCenter = ({
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
    <path d="M11.6 8.9h40.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H11.6c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM7.8 25.8h48.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H7.8c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM15.5 38.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h33.1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H15.5zM60 55.1H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgTextAlignCenter;
