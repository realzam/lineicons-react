import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCoin = ({
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
    <path d="M35.8 29.8h-7.1c-2.1 0-3.8-1.6-3.8-3.6s1.7-3.6 3.8-3.6H39c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-4.8v-2.4c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v2.4h-1.1c-4.6 0-8.3 3.6-8.3 8.1s3.7 8.1 8.3 8.1h7.1c2.1 0 3.8 1.6 3.8 3.6s-1.7 3.6-3.8 3.6H25c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h4.8v2.4c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2V46h1.6c4.6 0 8.3-3.6 8.3-8.1.1-4.5-3.7-8.1-8.3-8.1z" />
    <path d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.2 32 62.2 62.2 48.7 62.2 32 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.2 46.2 6.2 32 6.2 17.8 17.8 6.2 32 6.2c14.2 0 25.8 11.6 25.8 25.8 0 14.2-11.6 25.8-25.8 25.8z" />
  </svg>
);
export default SvgCoin;
