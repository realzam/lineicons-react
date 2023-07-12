import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideo = ({
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
    <path d="M60.7 27.7c-1-.8-2.3-1.1-3.6-.8L47.6 29c-.3-3.1-3-5.6-6.2-5.6h-2.7c.7-1.3 1.1-2.7 1.1-4.3 0-4.8-3.9-8.8-8.7-8.8-4.6 0-8.3 3.5-8.7 8-1.1-2.3-3.4-4-6.1-4-3.7 0-6.8 3-6.8 6.8 0 .8.1 1.5.4 2.3H8c-3.4 0-6.3 2.8-6.3 6.3v17.7c0 3.4 2.8 6.3 6.3 6.3h33.4c3.4 0 6.3-2.8 6.3-6.3v-.5l9.4 2.1c.3.1.6.1.9.1 1 0 1.9-.3 2.6-.9 1-.8 1.6-2 1.6-3.3V31c.1-1.3-.5-2.5-1.5-3.3zM31.1 14.9c2.3 0 4.2 1.9 4.2 4.3s-1.9 4.3-4.2 4.3-4.3-1.9-4.3-4.3 2-4.3 4.3-4.3zm-7.6 8.5h-.8l.3-1.2c.1.4.2.8.5 1.2zM14 21.2c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1.1-2.3-2.3zm29.2 26.1c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V29.7c0-1 .8-1.8 1.8-1.8h33.4c1 0 1.8.8 1.8 1.8v17.6zm14.6-2.8-10.1-2.2v-8.7l10.1-2.2v13.1z" />
  </svg>
);
export default SvgVideo;
