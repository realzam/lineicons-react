import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEmptyFile = ({
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
    <path d="M49.5 1.8h-35c-3.4 0-6.1 2.7-6.1 6.1V40c0 1.5.6 2.9 1.7 3.9l18 17c1 1 2.3 1.5 3.7 1.5h17.6c3.4 0 6.1-2.7 6.1-6.1V7.9c.1-3.4-2.7-6.1-6-6.1zM16.2 43.4h11.7c.5 0 .9.4.9.8v11L16.2 43.4zm34.9 12.7c0 .9-.7 1.6-1.6 1.6H33.3V44.2c0-2.9-2.4-5.3-5.4-5.3h-15v-31c0-.9.7-1.6 1.6-1.6h34.9c.9 0 1.6.7 1.6 1.6v48.2z" />
  </svg>
);
export default SvgEmptyFile;
