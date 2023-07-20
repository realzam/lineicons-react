import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCompass = ({
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
    <path d="M56.2 59 45.5 37c3.1-2.4 5.6-5.6 7.1-9.3.5-1.2-.1-2.5-1.3-2.9-1.2-.5-2.5.1-2.9 1.3-1 2.7-2.8 5-4.9 6.8l-4.2-8.7C41 22.4 42 20 42 17.3c0-4.7-3.3-8.7-7.8-9.7V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v3.6c-4.4 1-7.8 5-7.8 9.7 0 2.7 1.1 5.1 2.8 6.9l-4.2 8.7c-2.1-1.8-3.9-4.1-4.9-6.8-.5-1.2-1.8-1.7-2.9-1.3-1.2.5-1.7 1.8-1.3 2.9 1.5 3.8 4 7 7.1 9.3L7.8 59c-.5 1.1-.1 2.5 1 3 .3.2.7.2 1 .2.8 0 1.6-.5 2-1.3l10.5-21.6c3 1.4 6.2 2.2 9.6 2.2s6.7-.8 9.6-2.2L52.1 61c.4.8 1.2 1.3 2 1.3.3 0 .7-.1 1-.2 1.2-.6 1.6-2 1.1-3.1zM32 11.8c3 0 5.5 2.4 5.5 5.4S35 22.7 32 22.7s-5.5-2.4-5.5-5.4 2.5-5.5 5.5-5.5zm0 25.3c-2.7 0-5.3-.6-7.7-1.8l4.2-8.7c1.1.4 2.2.6 3.4.6 1.2 0 2.4-.2 3.4-.6l4.2 8.7c-2.2 1.2-4.8 1.8-7.5 1.8z" />
  </svg>
);
export default SvgCompass;
