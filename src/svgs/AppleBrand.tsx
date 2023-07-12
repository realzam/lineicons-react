import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAppleBrand = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 65"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="M55.627 22.638c-.36.279-6.709 3.857-6.709 11.812 0 9.202 8.08 12.457 8.322 12.538-.038.198-1.284 4.458-4.26 8.798-2.654 3.82-5.426 7.633-9.642 7.633-4.217 0-5.302-2.449-10.17-2.449-4.743 0-6.43 2.53-10.286 2.53-3.857 0-6.548-3.534-9.642-7.875-3.584-5.097-6.48-13.015-6.48-20.53 0-12.054 7.838-18.447 15.551-18.447 4.1 0 7.516 2.691 10.089 2.691 2.45 0 6.269-2.852 10.932-2.852 1.767 0 8.116.161 12.295 6.15ZM41.118 11.384c1.928-2.288 3.292-5.463 3.292-8.638 0-.44-.037-.886-.117-1.246-3.138.118-6.87 2.09-9.121 4.7-1.768 2.01-3.417 5.184-3.417 8.402 0 .484.08.967.118 1.122.198.037.52.08.843.08 2.815 0 6.356-1.884 8.402-4.42Z"
    />
  </svg>
);
export default SvgAppleBrand;
