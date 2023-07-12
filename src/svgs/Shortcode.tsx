import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgShortcode = ({
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
    <path d="M30.8 24.6h7.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.6c-3.5 0-6.4 2.9-6.4 6.4V28c0 3.5 2.9 6.4 6.4 6.4h3.5c1 0 1.9.8 1.9 1.9V38c0 1-.8 1.9-1.9 1.9h-7.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.1c3.5 0 6.4-2.9 6.4-6.4v-1.6c0-3.5-2.8-6.4-6.4-6.4h-3.5c-1 0-1.9-.8-1.9-1.9v-1.6c.1-1.1.9-2 1.9-2zM17.4 20.5c-.8-1-2.2-1.1-3.2-.3L2.9 29.4c-.7.6-1.2 1.5-1.2 2.5s.4 1.8 1.2 2.4l11.4 9.2c.4.3.9.5 1.4.5.7 0 1.3-.3 1.7-.8.8-1 .6-2.4-.3-3.2L7 31.8l10.1-8.2c1-.7 1.1-2.2.3-3.1zM61.1 29.4l-11.4-9.2c-1-.8-2.4-.6-3.2.3-.8 1-.6 2.4.3 3.2l10.1 8.1L46.8 40c-1 .8-1.1 2.2-.3 3.2.4.6 1.1.8 1.8.8.5 0 1-.2 1.4-.5l11.4-9.2c.8-.6 1.2-1.5 1.2-2.5s-.5-1.8-1.2-2.4z" />
  </svg>
);
export default SvgShortcode;
