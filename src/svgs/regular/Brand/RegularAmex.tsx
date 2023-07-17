import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAmex = ({
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
    <path d="M56 14.7H8c-3.4 0-6.2 2.8-6.2 6.2V43c0 3.4 2.8 6.2 6.2 6.2h48c3.4 0 6.2-2.8 6.2-6.2V20.9c.1-3.4-2.7-6.2-6.2-6.2zm1.8 28.4c0 1-.8 1.7-1.7 1.7H8c-1 0-1.7-.8-1.7-1.7V20.9c0-1 .8-1.7 1.7-1.7h48c1 0 1.7.8 1.7 1.7v22.2z" />
    <path d="m26.9 35.6-3-10.3h-3.7v12.4l-3.1-12.4h-4.2L9.7 38.5h2.1l.8-2.8h5l.7 2.8h4.2V27.8h.3l3.1 10.1h2.2l3-10.1h.3v10.7h2.1V25.3h-3.6l-3 10.3zm-14-1.7 1.6-6.7h1l1.6 6.7h-4.2zM52 25.3l-2.9 5.1-2.8-5.1H35.4v13.2h11l2.7-5 2.8 5h2.4L50.5 32l3.8-6.7H52zm-7 11.3h-7.5v-3.8h5V31h-4.9v-3.6H45l2.8 4.9-2.8 4.3z" />
  </svg>
);
export default SvgAmex;
