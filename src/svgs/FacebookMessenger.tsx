import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacebookMessenger = ({
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
    <path d="M31.9 1.1C14.5 1.1 1 13.9 1 31.1c0 9.1 3.7 16.9 9.7 22.2.4.4.7 1.1.8 1.7l.1 5.5c.1 1.7 1.8 3 3.5 2.2l6.2-2.7c.4-.1 1.1-.3 1.7-.1 2.8.7 5.8 1.3 9 1.3 17.5-.1 31-12.9 31-30S49.4 1.1 31.9 1.1zm18.6 23.1-9.1 14.3c-1.4 2.2-4.5 3-6.6 1.3l-7.2-5.5c-.7-.4-1.5-.4-2.2 0l-9.8 7.3c-1.3 1-3-.6-2.1-2l9.1-14.3c1.4-2.2 4.5-3 6.6-1.3l7.2 5.5c.7.4 1.5.4 2.2 0l9.7-7.5c1.5-.6 3 .9 2.2 2.2z" />
  </svg>
);
export default SvgFacebookMessenger;
