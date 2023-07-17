import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudUpload = ({
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
    <path d="M34.6 27.1c-.6-.6-1.4-.9-2.2-.9-.8 0-1.6.3-2.2.9L25.5 32c-.9.9-.8 2.3.1 3.2.9.9 2.3.8 3.2-.1l1.5-1.5v7.7c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-7.7l1.5 1.5c.4.5 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3.1-3.2l-5.1-4.9z" />
    <path d="M57.3 23.6c-2.7-2.9-6.4-4.8-10.3-5.5-2.2-3.4-5.4-5.9-9.1-7.2-1.7-.6-3.7-1-5.8-1-9.4 0-17.2 7.2-17.8 16.3-7.1.9-12.5 6.8-12.5 13.9C1.8 47.8 8.1 54 15.9 54h27.8c10.2 0 18.6-8.1 18.6-18.1 0-4.5-1.8-8.9-5-12.3zm-13.6 26H16c-5.5 0-9.7-4.2-9.7-9.4 0-5.3 4.3-9.4 9.7-9.4h.5c1.2 0 2.3-1 2.3-2.3v-1c0-7.2 6-13 13.3-13 1.6 0 3 .2 4.3.7 3.1 1 5.7 3.2 7.3 6.1.4.6 1 1.1 1.7 1.1 3.3.3 6.5 1.9 8.7 4.3 2.4 2.6 3.7 5.9 3.7 9.3 0 7.5-6.4 13.6-14.1 13.6z" />
  </svg>
);
export default SvgCloudUpload;
