import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThunderAlt = ({
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
    <path d="M57.3 23.5c-2.7-2.9-6.4-4.9-10.3-5.6-2.2-3.5-5.4-6.1-9.1-7.4-1.7-.7-3.7-1-5.8-1-9.5 0-17.2 7.4-17.8 16.7-7 .9-12.5 6.9-12.5 14.1C1.8 48.2 8 54.5 16 54.5h27.8c10.2 0 18.6-8.3 18.6-18.5-.1-4.6-1.9-9.1-5.1-12.5zM43.7 50H15.9c-5.4 0-9.7-4.3-9.7-9.7 0-5.4 4.3-9.7 9.7-9.7h.5c1.2 0 2.3-1 2.3-2.3v-1C18.7 20 24.7 14 32 14c1.6 0 3 .2 4.3.7 3.1 1.1 5.7 3.3 7.3 6.3.4.7 1 1.1 1.7 1.2 3.3.3 6.4 1.9 8.7 4.3 2.4 2.6 3.8 6 3.8 9.5 0 7.8-6.4 14-14.1 14z" />
    <path d="M36.7 31.4h-3.9l4.8-6.2c.8-1 .6-2.4-.4-3.2-1-.8-2.4-.6-3.2.4l-7.2 9.3c-.6.8-.7 1.8-.3 2.7.4.9 1.3 1.4 2.3 1.4h3.7l-5.1 6.1c-.8 1-.7 2.4.3 3.2.4.4.9.5 1.4.5.6 0 1.3-.3 1.7-.8l7.8-9.3c.6-.8.8-1.8.4-2.8-.4-.7-1.3-1.3-2.3-1.3z" />
  </svg>
);
export default SvgThunderAlt;
