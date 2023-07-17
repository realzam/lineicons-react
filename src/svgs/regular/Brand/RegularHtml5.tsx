import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHtml5 = ({
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
    <path d="M32.5 47.3c-.5 0-.9-.1-1.3-.3l-8-3.2c-1.2-.5-2-1.5-2.2-2.7l-.9-5c-.2-1.2.6-2.4 1.8-2.6 1.2-.2 2.4.6 2.6 1.8l.8 4.5 7.2 2.9 7.2-3 1.8-8.9H22.7c-1.7 0-3.2-1.2-3.5-3l-1.4-8c-.2-1.1.1-2.3.8-3.2l.1-.1c.8-.8 1.8-1.3 3-1.3h23.2c1.2 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3H22.3l1.2 6.6h19.2c1.1 0 2.1.5 2.8 1.3.7.8 1 1.9.7 3L44.1 41c-.2 1.2-1 2.2-2.1 2.6l-8 3.3c-.5.3-1 .4-1.5.4zm-.3-4.5zM22.1 18.9z" />
    <path d="M32 62.2c-.6 0-1.2-.1-1.8-.2l-15.8-3.7c-3.1-.7-5.5-3.4-5.9-6.6L3.6 10.4c-.2-2.2.5-4.4 1.9-6.1C7 2.7 9.1 1.8 11.3 1.8h41.4c2.2 0 4.3.9 5.8 2.6 1.5 1.6 2.2 3.9 1.9 6l-4.9 41.3c-.4 3.2-2.8 5.9-5.9 6.6L33.8 62c-.6.2-1.2.2-1.8.2zM11.3 6.3c-.9 0-1.8.4-2.4 1.1-.6.6-.9 1.5-.8 2.5L13 51.2c.2 1.3 1.1 2.4 2.5 2.8l15.8 3.7c.5.1 1 .1 1.5 0L48.5 54c1.3-.3 2.3-1.4 2.5-2.8l4.9-41.3c.1-1-.2-1.9-.8-2.6-.6-.7-1.5-1.1-2.4-1.1H11.3zM49 56.1z" />
  </svg>
);
export default SvgHtml5;
