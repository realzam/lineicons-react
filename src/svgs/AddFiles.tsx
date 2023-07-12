import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAddFiles = ({
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
    <path d="M38.6 22.1h-4.3v-4.3c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v4.3h-4.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h4.3V31c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-4.3h4.3c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" />
    <path d="M50 1.8H14c-3.4 0-6.1 2.7-6.1 6.1V40c0 1.5.6 2.9 1.7 3.9l18 17c1 1 2.3 1.5 3.7 1.5H50c3.4 0 6.1-2.7 6.1-6.1V7.9c0-3.4-2.7-6.1-6.1-6.1zM15.7 43.4h11.7c.5 0 .9.4.9.8v11L15.7 43.4zm35.9 12.7c0 .9-.7 1.6-1.6 1.6H32.8V44.2c0-2.9-2.4-5.3-5.4-5.3h-15v-31c0-.9.7-1.6 1.6-1.6h36c.9 0 1.6.7 1.6 1.6v48.2z" />
  </svg>
);
export default SvgAddFiles;
