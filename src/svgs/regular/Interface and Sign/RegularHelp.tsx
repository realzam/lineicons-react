import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHelp = ({
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
    <path d="M45.9 16.7c-.7-6.6-6.1-12-12.9-12.9-6.2-.7-12 2.4-14.8 7.8-.6 1.1-.1 2.5 1 3 1.1.6 2.5.1 3-1 2-3.8 6-5.9 10.3-5.5 4.7.6 8.4 4.4 8.9 8.9.5 4.3-1.8 8.4-5.7 10.2-4.1 2-6.7 6.2-6.7 10.9V48c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-9.9c0-2.9 1.7-5.6 4.2-6.8 5.5-2.4 8.8-8.4 8.1-14.6zM31.3 55.2c-1.2 0-2.3 1-2.3 2.3v.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.5c-.1-1.3-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgHelp;
