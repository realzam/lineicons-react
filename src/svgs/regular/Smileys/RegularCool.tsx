import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCool = ({
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
    <path d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3 31.3-14 31.3-31.3S49.2.8 32 .8zm0 4.5c10.3 0 19.2 5.8 23.7 14.3H8.3C12.8 11.1 21.7 5.3 32 5.3zm0 53.5c-14.8 0-26.8-12-26.8-26.8 0-2.8.4-5.4 1.2-8h12.9v5c0 1.1.9 2 2 2h6.2c1.1 0 2-.9 2-2v-5h4.8v5c0 1.1.9 2 2 2h6.2c1.1 0 2-.9 2-2v-5h12.9c.8 2.5 1.2 5.2 1.2 8 .2 14.8-11.8 26.8-26.6 26.8z" />
    <path d="M43.6 40.6c-3.2 2.9-7.3 4.6-11.6 4.6s-8.5-1.6-11.6-4.6c-.9-.8-2.3-.8-3.2.1-.8.9-.8 2.3.1 3.2 4 3.7 9.2 5.8 14.7 5.8s10.7-2 14.7-5.8c.9-.8 1-2.3.1-3.2s-2.3-.9-3.2-.1z" />
  </svg>
);
export default SvgCool;
