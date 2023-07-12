import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgZoom = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 65 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M61.6 18.4c-.7-.4-1.6-.4-2.3.1l-10.7 6.9c-.9.6-1.4 1.5-1.4 2.6v8c0 1 .5 2 1.4 2.6l10.7 6.9c.4.2.8.4 1.2.4.4 0 .7-.1 1.1-.3.7-.4 1.2-1.2 1.2-2V20.4c0-.9-.5-1.6-1.2-2zm-3.3 21.1-6.6-4.3v-6.5l6.6-4.3v15.1zM31.1 15.9H4.5c-1.2 0-2.3 1-2.3 2.3V37c0 6.1 5.1 11.1 11.4 11.1h26.6c1.2 0 2.3-1 2.3-2.3V27c0-6.1-5.1-11.1-11.4-11.1zM38 43.6H13.6c-3.8 0-6.9-3-6.9-6.6V20.4h24.4c3.8 0 6.9 3 6.9 6.6v16.6z" />
  </svg>
);
export default SvgZoom;
