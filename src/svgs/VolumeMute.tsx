import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeMute = ({
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
    <path d="M45.6 12.9c-.9-.9-2.3-.9-3.2 0l-5 5v-1c0-1.8-1-3.4-2.5-4.3-1.6-.9-3.5-.8-5 .1l-10.8 6.7c-.1 0-.1.1-.2.1H6.1c-2.7 0-4.9 2.2-4.9 4.9v15.8c0 2.7 2.2 4.9 4.9 4.9h4l-2.7 2.7c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l34.9-35c1-.8 1-2.2.1-3.1zM6.1 40.7c-.2 0-.4-.2-.4-.4V24.5c0-.2.2-.4.4-.4h12.8c.9 0 1.8-.3 2.6-.7l10.8-6.7c.1-.1.3-.1.4 0 .1.1.2.2.2.3v5.5L14.7 40.7H6.1zM35.1 31.1c-1.2 0-2.3 1-2.3 2.3v14.5c0 .2-.1.3-.2.3-.1.1-.3.1-.4 0l-8.7-5.4c-1.1-.7-2.4-.3-3.1.7-.7 1.1-.3 2.4.7 3.1l8.7 5.4c.8.5 1.7.7 2.6.7.8 0 1.6-.2 2.4-.6 1.6-.9 2.5-2.5 2.5-4.3V33.4c.1-1.3-.9-2.3-2.2-2.3z" />
  </svg>
);
export default SvgVolumeMute;
