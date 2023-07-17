import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDocker = ({
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
    <path d="M35 29.9h-6.3v-5.8H35v5.8zm0-19.7h-6.3v5.9H35v-5.9zm7.6 14.1h-6.3V30h6.3v-5.7zm-15.1-7.1h-6.3V23h6.3v-5.8zm7.5 0h-6.3V23H35v-5.8zm26.9 9.7c-1.4-1-4.6-1.3-7-.8-.3-2.4-1.7-4.4-3.9-6.2l-1.4-.8-.8 1.4c-1.7 2.7-2.3 7.2-.4 10.1-.8.4-2.5 1.1-4.6 1.1H1.2c-.8 4.9.6 11.4 4.2 15.8 3.5 4.2 9 6.3 16 6.3 15.2 0 26.6-7 31.8-19.8 2 0 6.6 0 8.9-4.4.1-.1.7-1.3.8-1.7l-1-1zm-49.5-2.6H6V30h6.3v-5.7h.1zm7.5 0h-6.3V30h6.3v-5.7zm7.6 0h-6.3V30h6.3v-5.7zm-7.6-7.1h-6.3V23h6.3v-5.8z" />
  </svg>
);
export default SvgDocker;
