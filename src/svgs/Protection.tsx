import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgProtection = ({
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
    <path d="M53.6 7.5 33.3 1.9c-.8-.2-1.7-.2-2.5 0L10.4 7.5c-2.1.6-3.6 2.5-3.6 4.7V27c0 15.5 9.2 29.2 23.4 34.9.6.2 1.2.4 1.8.4s1.2-.1 1.8-.4c14.2-5.7 23.4-19.5 23.4-35V12.2c0-2.2-1.5-4.1-3.6-4.7zm-.9 19.4c0 13.4-8.3 25.8-20.5 30.8h-.3c-12.5-5-20.6-17.1-20.6-30.7V12.2c0-.1.1-.3.2-.3l20.4-5.6h.2l20.4 5.6c.1 0 .2.2.2.3v14.7z" />
    <path d="M43.3 22.6 29.5 34.2 23.3 29c-1-.8-2.4-.7-3.2.3-.8 1-.7 2.4.3 3.2l7.6 6.4c.4.4.9.5 1.4.5s1-.2 1.4-.5L46.2 26c1-.8 1.1-2.2.3-3.2-.8-.9-2.3-1-3.2-.2z" />
  </svg>
);
export default SvgProtection;
