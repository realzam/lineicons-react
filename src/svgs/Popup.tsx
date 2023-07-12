import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPopup = ({
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
    <path d="M56 5H8c-3.4 0-6.2 2.8-6.2 6.2V44c0 3.4 2.8 6.2 6.2 6.2h14.6l6.9 8.4c.6 1 1.5 1.4 2.5 1.4s1.9-.4 2.5-1.2l6.9-8.4H56c3.4 0 6.2-2.8 6.2-6.2V11.3C62.2 7.8 59.4 5 56 5zm1.8 39.1c0 1-.8 1.8-1.8 1.8H41.3c-1.1 0-2.2.4-3 1.2l-.2.2-6.1 7.5-6.1-7.5-.2-.2c-.8-.8-1.8-1.2-3-1.2H8c-1 0-1.8-.8-1.8-1.8V11.3c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v32.8z" />
    <path d="M17.2 19.7h27.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H17.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2zM17.2 30h19.9c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H17.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2zM47.3 35.7H17.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h30.1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2z" />
  </svg>
);
export default SvgPopup;
