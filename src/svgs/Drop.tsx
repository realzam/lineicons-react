import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDrop = ({
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
    <path d="M32 62.3c-13.7 0-24.8-11.1-24.8-24.8 0-18.2 22.5-34.6 23.4-35.3.8-.6 1.9-.6 2.7 0 1 .7 23.4 18 23.4 35.3.1 13.6-11 24.8-24.7 24.8zm0-55.4C27.3 10.6 11.8 24 11.8 37.5c0 11.2 9.1 20.3 20.3 20.3s20.3-9.1 20.3-20.3C52.3 24.6 36.7 10.8 32 6.9z" />
  </svg>
);
export default SvgDrop;
