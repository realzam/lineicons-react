import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFlag = ({
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
    <path d="M50.7 11.5c-1.2-1.3-2.8-2.1-4.6-2.1H16.3V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v56c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V36.8H44c3.1 0 5.7-2.3 6.1-5.3l2-15.2c.2-1.8-.3-3.5-1.4-4.8zm-5 19.4c-.1.8-.8 1.4-1.6 1.4H16.3V13.9H46c.6 0 1 .3 1.2.5.2.2.5.6.4 1.3l-1.9 15.2z" />
  </svg>
);
export default SvgFlag;
