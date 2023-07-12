import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWheelbarrow = ({
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
    <path d="M55 42.8c-1 0-1.9.2-2.8.5l-1.8-2.1c3.7-2.2 6.6-5.7 8-10l1.8-5.5c.3-.9 1-3-.2-4.8-.9-1.2-2.3-1.8-4.4-1.8H18.2l-3-9.1c-.6-2-2.4-3.3-4.5-3.3H4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h6.7c.1 0 .2.1.2.2l3.3 10.4v31.5c0 1.2.7 2.3 1.9 2.7.3.1.7.2 1 .2.7 0 1.4-.3 2-.8l15.6-11.7h6.7c1.6 0 3.2-.2 4.7-.6l2.7 3.2c-.7 1.1-1.1 2.4-1.1 3.8 0 4 3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3c-.1-4-3.3-7.2-7.3-7.2zm-36.2 7.3v-6.4h8.5l-8.5 6.4zm0-10.9V23.7h37.5c0 .1-.1.3-.2.6l-1.8 5.5c-1.9 5.6-7 9.4-12.8 9.4H18.8zM55 52.8c-1.5 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8z" />
  </svg>
);
export default SvgWheelbarrow;
