import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExit = ({
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
    <path d="M45.2 1.8H33.9c-2.6 0-4.8 2.2-4.8 4.8v6.9c0 1.2 1 2.2 2.2 2.2s2.3-1 2.3-2.2v-7c0-.2.1-.3.3-.3h11.3c2.4 0 4.3 1.9 4.3 4.3v42.9c0 2.4-1.9 4.3-4.3 4.3H33.9c-.2 0-.3-.1-.3-.3v-6.9c0-1.2-1-2.2-2.3-2.2s-2.2 1-2.2 2.2v6.9c0 2.6 2.2 4.8 4.8 4.8h11.3c4.9 0 8.8-4 8.8-8.8V10.6c0-4.9-4-8.8-8.8-8.8z" />
    <path d="M17.6 34.2h17.9c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2H17.7l6.2-6.3c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-10 10.2c-.9.9-.9 2.3 0 3.2l10 10.2c.4.4 1 .7 1.6.7.6 0 1.1-.2 1.6-.6.9-.9.9-2.3 0-3.2l-6.3-6.6z" />
  </svg>
);
export default SvgExit;
