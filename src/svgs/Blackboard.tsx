import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBlackboard = ({
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
    <path d="M56.1 9.4H34.3V6.5c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v2.8H7.9c-3.4 0-6.1 2.7-6.1 6.1v20.3c0 3.4 2.7 6.1 6.1 6.1h8.6L8.3 56.3c-.6 1.1-.2 2.5.9 3.1.3.2.7.3 1.1.3.8 0 1.6-.4 2-1.2l9.3-16.7h8.1v15.6c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V41.9h8.3L52 58.6c.4.7 1.2 1.1 2 1.1.4 0 .8-.1 1.1-.3 1.1-.6 1.5-2 .9-3.1l-8.2-14.5h8.5c3.4 0 6.1-2.7 6.1-6.1V15.5c-.1-3.4-2.9-6.1-6.3-6.1zm1.7 26.4c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6V15.5c0-.9.7-1.6 1.6-1.6h48.3c.9 0 1.6.7 1.6 1.6v20.3z" />
  </svg>
);
export default SvgBlackboard;
