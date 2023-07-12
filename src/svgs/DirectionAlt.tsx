import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDirectionAlt = ({
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
    <path d="M45.8 29.9h-9.1v-5.8H41c1 0 2-.4 2.7-1.2l3.4-3.7c1.2-1.4 1.2-3.5 0-4.8l-3.4-3.7C43 9.9 42 9.5 41 9.5h-4.3V4c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v5.4H18.2c-2 0-3.6 1.6-3.6 3.6v7.5c0 2 1.6 3.6 3.6 3.6h14.1v5.8H23c-1 0-2 .4-2.7 1.2l-3.4 3.7c-1.2 1.4-1.2 3.5 0 4.8l3.4 3.7c.7.8 1.7 1.2 2.7 1.2h9.3V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V44.6h9.1c2 0 3.6-1.6 3.6-3.6v-7.5c0-2-1.6-3.6-3.6-3.6zm-26.7-16h21.6l2.6 2.8-2.6 2.8H19.1v-5.6zm25.8 26.2H23.3l-2.6-2.8 2.6-2.8h21.6v5.6z" />
  </svg>
);
export default SvgDirectionAlt;
