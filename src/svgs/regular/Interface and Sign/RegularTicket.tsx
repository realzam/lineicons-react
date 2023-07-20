import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTicket = ({
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
    <path d="M59.6 26.4c1.5-.1 2.7-1.3 2.7-2.9V18c0-3.4-2.7-6.1-6.1-6.1H7.9c-3.4 0-6.1 2.7-6.1 6.1v5.6c0 1.5 1.2 2.8 2.7 2.9 2.8.3 4.9 2.7 4.9 5.6 0 2.9-2.1 5.3-4.9 5.5-1.5.1-2.7 1.4-2.7 2.9V46c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1v-5.5c0-1.5-1.2-2.8-2.7-2.9-2.8-.3-4.9-2.7-4.9-5.6 0-3 2.1-5.4 4.9-5.6zm-1.8 15.4V46c0 .9-.7 1.6-1.6 1.6H31.7v-5.4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v5.4H7.9c-.9 0-1.6-.7-1.6-1.6v-4c4.4-1 7.6-5 7.6-9.8 0-4.7-3.2-8.8-7.6-9.9V18c0-.9.7-1.6 1.6-1.6h19.3v5.4c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-5.4h24.4c.9 0 1.6.7 1.6 1.6v4.1c-4.4 1.1-7.6 5.1-7.6 9.9 0 4.7 3.2 8.7 7.6 9.8z" />
    <path d="M29.5 27.2c-1.2 0-2.3 1-2.3 2.3v5.1c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-5.1c-.1-1.3-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgTicket;
