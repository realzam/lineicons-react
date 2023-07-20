import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImage = ({
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
    <path d="M39.6 31.7c4.7 0 8.6-3.8 8.6-8.6s-3.8-8.6-8.6-8.6-8.6 4-8.6 8.7 3.9 8.5 8.6 8.5zm0-12.6c2.2 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1-4.1-1.8-4.1-4.1 1.8-4.1 4.1-4.1z" />
    <path d="M52.7 1.8H11.3C7.9 1.8 5.1 4.6 5.1 8v48c0 3.4 2.8 6.3 6.3 6.3h41.3c3.4 0 6.3-2.8 6.3-6.3V8c-.1-3.4-2.9-6.2-6.3-6.2zM11.3 6.3h41.3c1 0 1.8.8 1.8 1.8V43l-7.3-6c-2.1-1.7-5.1-1.6-7 .3l-8.2 8.1L21.4 36c-2-1.8-5-1.8-7 0l-4.8 4.3V8c0-1 .8-1.7 1.7-1.7zm41.4 51.5H11.3c-1 0-1.8-.8-1.8-1.8v-9.7l7.8-7.1c.3-.3.7-.3 1 0L30.4 50c.4.4 1 .6 1.5.6.6 0 1.1-.2 1.6-.7l9.7-9.6c.3-.3.7-.3 1 0l10.1 8.4V56c.1 1-.7 1.8-1.6 1.8z" />
  </svg>
);
export default SvgImage;
