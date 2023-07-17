import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCommentsAlt2 = ({
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
    <path d="M44.4 19.5H18.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h25.9c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3zM39.2 31.7H18.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" />
    <path d="M56 7.9H8c-3.4 0-6.3 2.8-6.3 6.3v37.7c0 1.6.9 3.1 2.4 3.8.6.3 1.2.4 1.8.4 1 0 1.9-.3 2.7-1l8.5-7H56c3.4 0 6.3-2.8 6.3-6.3V14.2c0-3.5-2.9-6.3-6.3-6.3zm1.8 33.9c0 1-.8 1.8-1.8 1.8H16.3c-.5 0-1 .2-1.4.5l-8.6 7.1v-37c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z" />
  </svg>
);
export default SvgCommentsAlt2;
