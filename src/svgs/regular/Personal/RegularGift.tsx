import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGift = ({
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
    <path d="M54.1 14.5h-4.6c1.1-.8 2-1.7 2.4-2.8.6-1.5.6-4-2.5-6.9-3.3-3.2-6.3-3.2-8.2-2.7-4.3 1.1-7.2 6.1-8.8 9.7-1.6-3.6-4.5-8.5-8.8-9.7-1.9-.5-4.9-.4-8.2 2.7-3.1 3-3 5.4-2.5 6.9.4 1.1 1.3 2 2.4 2.8H9.9c-2.9 0-5.3 2.4-5.3 5.3v6.6c0 2.8 2.3 5.1 5.1 5.2V56c0 3.4 2.8 6.3 6.3 6.3h32.7c3.4 0 6.3-2.8 6.3-6.3V31.5c2.5-.4 4.4-2.6 4.4-5.2v-6.6c0-2.9-2.4-5.2-5.3-5.2zM42.3 6.3c.1 0 .4-.1.7-.1.7 0 1.8.3 3.3 1.7 1.2 1.1 1.5 1.9 1.4 2.1-.5 1.4-5.5 2.9-11.2 3.5 1.4-3.1 3.5-6.6 5.8-7.2zM18.4 8c1.5-1.4 2.6-1.7 3.3-1.7.3 0 .5.1.7.1 2.3.6 4.5 4 5.9 7.2-5.7-.6-10.7-2.1-11.2-3.5-.1-.3.2-1 1.3-2.1zM9.1 26.3v-6.6c0-.4.3-.8.8-.8h44.2c.4 0 .8.3.8.8v6.6c0 .4-.3.8-.8.8H9.9c-.4 0-.8-.3-.8-.8zm39.6 31.5H16c-1 0-1.8-.8-1.8-1.8V31.6h36.2V56c.1 1-.7 1.8-1.7 1.8z" />
  </svg>
);
export default SvgGift;
