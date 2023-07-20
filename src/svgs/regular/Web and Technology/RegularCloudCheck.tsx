import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudCheck = ({
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
    <path d="m39.1 26.9-8.8 8.3-2.5-2.5c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l3.6 3.6c.5.5 1.2.8 2 .8.6 0 1.3-.2 1.8-.6.1 0 .1-.1.2-.1l10-9.4c.9-.9.9-2.3.1-3.2-.9-1-2.3-1-3.2-.1z" />
    <path d="M57.3 23.6c-2.7-2.9-6.4-4.8-10.3-5.5-2.2-3.4-5.4-5.9-9.1-7.2-1.7-.7-3.7-1-5.8-1-9.4 0-17.2 7.2-17.8 16.4-7.1.8-12.5 6.7-12.5 13.8 0 7.7 6.3 13.9 14.1 14h27.8c10.2 0 18.6-8.1 18.6-18.1 0-4.6-1.8-9-5-12.4zm-13.6 26H16c-5.5 0-9.7-4.2-9.7-9.5s4.3-9.5 9.7-9.5h.5c1.2 0 2.3-1 2.3-2.3v-1c0-7.2 6-13 13.3-13 1.6 0 3 .2 4.3.7 3.1 1 5.7 3.2 7.3 6.1.4.6 1 1.1 1.7 1.1 3.3.3 6.5 1.9 8.7 4.3 2.4 2.6 3.7 5.9 3.7 9.3 0 7.7-6.4 13.8-14.1 13.8z" />
  </svg>
);
export default SvgCloudCheck;
