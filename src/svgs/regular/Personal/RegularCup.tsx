import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCup = ({
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
    <path d="M56.6 9.4H47V4.8c0-1.7-1.4-3.1-3.1-3.1H20.1c-1.7 0-3.1 1.4-3.1 3.1v4.6H7.4c-1.8 0-3.1 1.3-3.1 3.1v.8c0 7.4 5.5 13.5 12.7 14.6v.3c0 7.4 5.5 13.6 12.7 14.7v14.9h-7.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.9v-15c3.2-.5 6.2-1.9 8.5-4.3 2.8-2.8 4.3-6.5 4.2-10.4v-.3c7.2-1.1 12.7-7.2 12.7-14.6v-.8c0-1.7-1.3-3-3.1-3zM8.8 13.9H17v9.4c-4.5-.9-7.9-4.8-8.2-9.4zm33.7 14.3c0 2.7-1 5.3-2.9 7.2-2 2-4.7 3.1-7.6 3.1-5.8 0-10.5-4.6-10.5-10.3V6.3h21V28.2zm4.5-4.9v-9.4h8.2c-.3 4.6-3.7 8.5-8.2 9.4z" />
  </svg>
);
export default SvgCup;
