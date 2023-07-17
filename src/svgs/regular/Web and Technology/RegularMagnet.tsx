import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMagnet = ({
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
    <path d="M54.5 9.5c-4.9-5-11.4-7.8-18.3-7.8-6.5 0-12.6 2.4-17.2 7L3.6 24.3c-2.5 2.5-2.5 6.6 0 9.1l5.9 5.9c2.5 2.5 6.6 2.5 9.1 0l14.5-14.4c1.8-1.8 4.6-2.1 6.3-.7.9.7 1.4 1.8 1.5 3 .1 1.4-.5 2.7-1.5 3.7L24.9 45.4c-2.5 2.5-2.5 6.6 0 9.1l5.9 5.9c1.2 1.2 2.9 1.9 4.5 1.9s3.3-.6 4.5-1.9l15.5-15.5c9.5-9.5 9.2-25.3-.8-35.4zM15.4 36c-.7.7-2 .7-2.7 0l-5.9-5.9c-.7-.7-.7-2 0-2.7l5.1-5.1 8.6 8.6-5.1 5.1zm21.2 21.2c-.7.7-2 .7-2.7 0L28 51.3c-.7-.7-.7-2 0-2.7l5.1-5.1 8.6 8.6-5.1 5.1zm15.6-15.5L45 48.9l-8.6-8.6 6.3-6.3c1.9-1.9 2.9-4.5 2.8-7.1-.1-2.5-1.3-4.7-3.2-6.3-1.6-1.3-3.5-1.9-5.5-1.9-2.5 0-5 1-6.9 2.9l-6.1 6.1-8.6-8.6 7.2-7.2c3.7-3.6 8.6-5.7 13.9-5.7h.1c5.7 0 11 2.3 15.1 6.5 8 8.3 8.4 21.3.7 29z" />
  </svg>
);
export default SvgMagnet;
