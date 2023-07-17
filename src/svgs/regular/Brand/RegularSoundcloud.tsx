import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSoundcloud = ({
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
    <path d="M48.3 48.8h-9c-1.6 0-2.9-1.3-2.9-2.9V18.1c0-1.6 1.3-2.9 2.8-2.9h.6c1.2 0 2.7.2 4.2.7h.1c2.8 1 5.2 2.8 6.8 5.2 3 .6 5.7 2 7.5 4.2 2.4 2.5 3.7 5.9 3.7 9.5.2 7.7-6.1 14-13.8 14zm-7.4-4.5h7.4c5.3 0 9.5-4.2 9.5-9.4 0-2.5-.9-4.7-2.5-6.4l-.1-.1c-1.4-1.6-3.5-2.6-5.8-2.9l-1.1-.1-.6-1c-1.1-1.9-2.9-3.4-5-4.2-.7-.2-1.3-.3-1.8-.4v24.5zM26.5 47.4c-1.2 0-2.3-1-2.3-2.3V18.8c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3v26.3c-.1 1.3-1.1 2.3-2.3 2.3zM14.8 45.8c-1.2 0-2.3-1-2.3-2.3v-23c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3v23.1c0 1.2-1 2.2-2.3 2.2zM4 42.4c-1.2 0-2.3-1-2.3-2.3V23.8c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3v16.3c0 1.3-1.1 2.3-2.3 2.3z" />
  </svg>
);
export default SvgSoundcloud;
