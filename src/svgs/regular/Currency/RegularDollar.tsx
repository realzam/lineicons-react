import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDollar = ({
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
    <path d="M39.5 29.8h-15c-4.9 0-9-3.8-9-8.5s4-8.5 9-8.5h22.1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H36.2V4c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v4.2h-7.2c-7.4 0-13.5 5.8-13.5 13s6 13 13.5 13h15c4.9 0 9 3.8 9 8.5s-4 8.5-9 8.5H14.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h17.5V60c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-4.2h3.2c7.4 0 13.5-5.8 13.5-13s-5.9-13-13.3-13z" />
  </svg>
);
export default SvgDollar;
