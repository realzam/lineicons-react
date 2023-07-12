import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExitDown = ({
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
    <path d="M57.5 29.1h-6.9c-1.2 0-2.2 1-2.2 2.2s1 2.3 2.2 2.3h6.9c.2 0 .3.1.3.3v11.3c0 2.4-1.9 4.3-4.3 4.3H10.6c-2.4 0-4.3-1.9-4.3-4.3V33.9c0-.2.1-.3.3-.3h6.9c1.2 0 2.2-1 2.2-2.3s-1-2.2-2.2-2.2h-7c-2.6 0-4.8 2.2-4.8 4.8v11.3c0 4.9 4 8.8 8.8 8.8h42.9c4.9 0 8.8-4 8.8-8.8V33.9c0-2.6-2.1-4.8-4.7-4.8z" />
    <path d="M30.4 37.1c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6l10.2-10c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-6.3 6.2V12.3c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v17.9l-6.4-6.3c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l10.1 10z" />
  </svg>
);
export default SvgExitDown;
