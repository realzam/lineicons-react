import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPound = ({
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
    <path d="M58.7 57.8H22.5c3.3-3.1 5.4-7.5 5.4-12.4v-8.8h25.8c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H27.9V20.9c0-8.1 6.5-14.6 14.5-14.6 3.7 0 7.3 1.4 10 4 .9.9 2.3.8 3.2-.1.9-.9.8-2.3-.1-3.2-3.5-3.4-8.2-5.2-13.1-5.2-10.5 0-19 8.6-19 19.1v11.2H7.8c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h15.6v8.8c0 6.8-5.5 12.4-12.3 12.4H5.3C4 57.8 3 58.8 3 60s1 2.2 2.2 2.2h53.5c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2z" />
  </svg>
);
export default SvgPound;
