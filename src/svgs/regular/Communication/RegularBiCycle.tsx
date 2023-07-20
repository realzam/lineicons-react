import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBiCycle = ({
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
    <path d="M13 36.1c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2 11.2-5 11.2-11.2-5-11.2-11.2-11.2zm0 18a6.7 6.7 0 1 1 0-13.4 6.7 6.7 0 0 1 0 13.4zM51.1 36.2c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2 11.2-5 11.2-11.2-5.1-11.2-11.2-11.2zm0 17.8a6.7 6.7 0 1 1 0-13.4 6.7 6.7 0 0 1 0 13.4zM46.2 30.5c.8 1 2.2 1.1 3.2.4 1-.8 1.1-2.2.4-3.2l-8.5-10.8-.2-.2c-1-1-2.4-1.2-3.6-.6l-11.6 6.8c-.8.5-1.4 1.3-1.5 2.2-.1.9.2 1.7.8 2.4l3.8 4.4c.5.6.8 1.4.8 2.3v6.7c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-6.7c0-1.9-.7-3.8-1.9-5.2l-2.7-3.1 8.8-5.2 7.6 9.8zM48.6 17.7c3.4 0 6.1-2.7 6.1-6.1S52 5.4 48.6 5.4c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.2 6.1 6.2zm0-7.8c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6-1.6-.6-1.6-1.5.7-1.7 1.6-1.7z" />
  </svg>
);
export default SvgBiCycle;
