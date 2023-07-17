import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMic = ({
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
    <path d="M32 43.9c3.2 0 6.2-1.3 8.5-3.5 2.2-2.2 3.4-5.2 3.4-8.3V13.6C43.9 7 38.6 1.7 32 1.7c-6.6 0-11.9 5.3-11.9 11.9V32c0 6.6 5.3 11.9 11.9 11.9zm-7.4-30.3c0-4.1 3.3-7.4 7.4-7.4 4.1 0 7.4 3.3 7.4 7.4V32c0 1.9-.7 3.8-2.1 5.2-1.4 1.4-3.3 2.2-5.3 2.2-4.1 0-7.4-3.3-7.4-7.4V13.6z" />
    <path d="M52.6 31.5c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3c0 8.9-7.2 16.1-16.1 16.1-8.8 0-16-7.2-16-16 0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3c0 10.6 8 19.3 18.3 20.4v5.7h-6.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h16.9c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.2V52c10.4-1.1 18.5-9.9 18.5-20.5z" />
  </svg>
);
export default SvgMic;
