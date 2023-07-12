import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComments = ({
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
    <path d="M56 7.9H8c-3.4 0-6.3 2.8-6.3 6.3v37.7c0 1.6.9 3.1 2.4 3.8.6.3 1.2.4 1.8.4 1 0 1.9-.3 2.7-1l8.5-7H56c3.4 0 6.3-2.8 6.3-6.3V14.2c0-3.5-2.9-6.3-6.3-6.3zm1.8 33.9c0 1-.8 1.8-1.8 1.8H16.3c-.5 0-1 .2-1.4.5l-8.6 7.1v-37c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z" />
    <path d="M15.8 20.7c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.8-6.1-6.1-6.1zm0 7.8c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .8-.7 1.6-1.6 1.6zM32 20.7c-3.4 0-6.1 2.7-6.1 6.1S28.6 33 32 33s6.1-2.7 6.1-6.1-2.7-6.2-6.1-6.2zm0 7.8c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .8-.7 1.6-1.6 1.6zM48.2 20.7c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.7-6.1-6.1-6.1zm0 7.8c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6c.1.8-.7 1.6-1.6 1.6z" />
  </svg>
);
export default SvgComments;
