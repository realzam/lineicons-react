import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaintBucketAlt = ({
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
    <path d="M52.4 22.2c0-11.3-9.2-20.4-20.4-20.4-11.3 0-20.4 9.2-20.4 20.4v2.6l1.6 31.5c.2 3.3 2.9 5.9 6.2 5.9h25.2c3.3 0 6.1-2.6 6.2-5.9l1.6-31.5v-2.6zM16.2 27h2.9v3.4c0 2.7 2.2 4.9 4.9 4.9h1.7v4.2c0 3.5 2.8 6.3 6.3 6.3 2.8 0 5.1-1.9 5.9-4.4H40c2.7 0 4.9-2.2 4.9-4.9V27h2.9l-1.1 21.9H17.3L16.2 27zm19.6 5.3c-1.2 0-2.2 1-2.2 2.2v5.2c0 .9-.7 1.6-1.6 1.6-1 0-1.8-.8-1.8-1.8v-4.7c0-2.2-1.8-4-4-4H24c-.2 0-.4-.2-.4-.4V27h16.8v9.5c0 .2-.2.4-.4.4h-1.9v-2.4c0-1.2-1-2.2-2.3-2.2zM32 6.2c8.8 0 15.9 7.1 15.9 15.9v.3H16.1v-.3c0-8.7 7.1-15.9 15.9-15.9zm12.6 51.6H19.4c-.9 0-1.7-.7-1.7-1.7l-.1-2.7h29l-.1 2.7c-.2.9-.9 1.7-1.9 1.7z" />
  </svg>
);
export default SvgPaintBucketAlt;
