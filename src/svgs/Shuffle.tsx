import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShuffle = ({
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
    <path d="m61.4 45.1-7.9-8.2c-.9-.9-2.3-.9-3.2-.1-.9.9-.9 2.3-.1 3.2l4.9 5H44.7L34.3 32l10.4-13.1H55l-4.9 5c-.9.9-.8 2.3.1 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l7.9-8.2c1.2-1.2 1.2-3.2 0-4.5l-7.9-8.2c-.9-.9-2.3-.9-3.2-.1-.9.9-.9 2.3-.1 3.2l4.9 5H44.1c-1 0-1.9.4-2.5 1.2l-10.2 13-10.2-12.8c-.6-.8-1.5-1.2-2.5-1.2H4c-1.2 0-2.3 1-2.3 2.3S2.7 19 4 19h14.1l10.5 13-10.5 13.1H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h14.7c1 0 1.9-.4 2.5-1.2l10.2-12.7 10.2 12.7c.6.8 1.5 1.2 2.5 1.2H55l-4.9 5c-.9.9-.8 2.3.1 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l7.9-8.2c1.2-1.3 1.2-3.3.1-4.5z" />
  </svg>
);
export default SvgShuffle;
