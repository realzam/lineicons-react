import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHighlight = ({
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
    <path d="M35.3 1.8h-6.6c-3.8 0-7 3.1-7 7V43c0 1.4 1.2 2.6 2.6 2.6h.1v4.6c0 1.2.4 2.2 1.1 3.1v6c0 .9.4 1.8 1.2 2.4.5.4 1.1.6 1.8.6.3 0 .6 0 .8-.1l7.1-2.1c1.3-.4 2.2-1.6 2.2-3v-3.8c.6-.8 1-1.9 1-3v-4.6c1.5 0 2.6-1.2 2.6-2.6V8.7c.1-3.8-3-6.9-6.9-6.9zm-9.1 6.9c0-1.4 1.1-2.5 2.5-2.5h6.6c1.4 0 2.5 1.1 2.5 2.5v32.4H26.2V8.7zM30 57.2v-2.1h4.1v.9L30 57.2zm5.1-7c0 .2-.2.4-.4.4h-5.4c-.2 0-.4-.2-.4-.4v-4.6h6.2v4.6z" />
  </svg>
);
export default SvgHighlight;
