import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCss3 = ({
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
    <path d="M48.5 15.8c-.8-.9-1.9-1.3-3.1-1.3H16.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h28.2l-1.1 6H19.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h23.8l-1.9 10.7-8.6 3.1-8.6-3.3-1.1-5.5c-.2-1.2-1.4-2-2.7-1.8-1.2.2-2 1.4-1.8 2.7l1.2 6c.2 1.2 1.1 2.2 2.3 2.6l9.4 3.4c.4.1.8.2 1.2.2.4 0 .8-.1 1.2-.2l9.4-3.4c1.2-.4 2.1-1.5 2.3-2.7l4-22.3c.2-1.2-.1-2.3-.9-3.3v-.1z" />
    <path d="M58.5 4.3c-1.5-1.6-3.6-2.6-5.8-2.6H11.3c-2.2.1-4.3 1-5.8 2.6s-2.2 3.9-1.9 6l4.9 41.3c.4 3.2 2.8 5.9 5.9 6.6L30.2 62c.6.1 1.2.2 1.8.2s1.2-.1 1.8-.2l15.8-3.7c3.1-.7 5.5-3.4 5.9-6.6l4.9-41.3c.2-2.2-.5-4.4-1.9-6.1zm-2.6 5.6L51 51.2c-.2 1.3-1.1 2.4-2.5 2.8l-15.8 3.7c-.5.1-1 .1-1.5 0L15.5 54c-1.3-.3-2.3-1.4-2.5-2.8L8.1 9.9c-.1-1 .2-1.9.8-2.6.6-.7 1.5-1.1 2.4-1.1h41.4c.9 0 1.8.4 2.4 1.1.6.7.9 1.6.8 2.6z" />
  </svg>
);
export default SvgCss3;
