import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPrinter = ({
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
    <path d="M54.6 14.5V7c0-2.9-2.4-5.3-5.3-5.3H14.6c-2.9 0-5.3 2.4-5.3 5.3v7.5c-2.8.1-5.1 2.4-5.1 5.2v14.4c0 2.8 2.3 5.1 5.1 5.2V57c0 2.9 2.4 5.3 5.3 5.3h34.8c2.9 0 5.3-2.4 5.3-5.3V39.3c2.8-.1 5.1-2.4 5.1-5.2V19.7c-.1-2.8-2.4-5.1-5.2-5.2zM13.9 7c0-.4.3-.8.8-.8h34.8c.4 0 .8.3.8.8v7.5H13.9V7zm36.2 50c0 .4-.3.8-.8.8H14.6c-.4 0-.8-.3-.8-.8V39.3h36.3V57zm5.1-22.9c0 .4-.3.8-.8.8H9.5c-.4 0-.8-.3-.8-.8V19.7c0-.4.3-.8.8-.8h44.9c.4 0 .8.3.8.8v14.4z" />
    <path d="M24.5 47h15c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-15c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM50 23.2h-7.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H50c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM24.5 54.6h15c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-15c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3z" />
  </svg>
);
export default SvgPrinter;
