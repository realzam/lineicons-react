import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFacebookOval = ({
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
    <path d="M32 1C14.8 1 1 14.8 1 32s13.8 31 31 31 31-13.8 31-31S49.2 1 32 1zm8.2 18.9h-3.1c-1.4 0-2.3.7-2.3 2-.1 1.1 0 2.3 0 3.2 0 .4.1.4.4.4h4.6c.4 0 .6.1.6.6-.1 1.8-.4 3.7-.4 5.5 0 .4-.1.4-.6.4h-3.7c-.8 0-.7-.1-.7.7v17.1c0 .6-.1.7-.7.7H28c-.6 0-.7-.1-.7-.7V32.5c0-.4-.1-.7-.6-.6H24c-.6.3-.6.1-.6-.3v-5.5c0-.4.1-.4.4-.4h2.8c.6 0 .7-.1.7-.7v-4.2c0-1.7.4-3.2 1.4-4.6 1.3-1.7 3.1-2.5 5.1-2.7 2.1-.1 4.2 0 6.3-.1.3 0 .4.1.4.4v5.5c.1.4 0 .6-.3.6z" />
  </svg>
);
export default SvgFacebookOval;
