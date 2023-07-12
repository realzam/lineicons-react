import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSkippingRope = ({
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
    <path d="M54.6 42.5h-7c-3.3 0-6.2 2.1-7.2 5.1h-21a6.7 6.7 0 0 1 0-13.4h25.3c6.2 0 11.2-5 11.2-11.2s-5-11.2-11.2-11.2H24.1c0-4.2-3.5-7.6-7.7-7.6h-7c-4.2 0-7.7 3.4-7.7 7.7v1.9c0 4.2 3.4 7.7 7.7 7.7h7c3.3 0 6.2-2.1 7.2-5.1h21a6.7 6.7 0 0 1 0 13.4H19.3c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2h20.6c0 4.2 3.5 7.6 7.7 7.6h7c4.2 0 7.7-3.4 7.7-7.7v-1.9c-.1-4.3-3.5-7.7-7.7-7.7zm-35-28.7c0 1.8-1.4 3.2-3.2 3.2h-7c-1.8 0-3.2-1.4-3.2-3.2V12c0-1.8 1.4-3.2 3.2-3.2h7c1.8 0 3.2 1.4 3.2 3.2v1.8zM57.8 52c0 1.8-1.4 3.2-3.2 3.2h-7c-1.8 0-3.2-1.4-3.2-3.2v-1.9c0-1.8 1.4-3.2 3.2-3.2h7c1.8 0 3.2 1.4 3.2 3.2V52z" />
  </svg>
);
export default SvgSkippingRope;
