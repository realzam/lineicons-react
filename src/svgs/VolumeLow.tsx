import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolumeLow = ({
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
    <path d="M46.9 26.9c-.8-.9-2.3-1-3.2-.1-.9.8-1 2.3-.1 3.2 1 1.1 1 3 0 4.2-.8.9-.8 2.3.1 3.2.4.4 1 .6 1.5.6.6 0 1.2-.2 1.7-.7 2.6-3 2.6-7.6 0-10.4zM34.4 12.3c-1.6-.9-3.5-.8-5 .1l-10.8 6.7c-.1 0-.1.1-.2.1H5.6c-2.7 0-4.9 2.2-4.9 4.9v15.8c0 2.7 2.2 4.9 4.9 4.9h12.8c.1 0 .1 0 .2.1l10.8 6.7c.8.5 1.7.7 2.6.7.8 0 1.6-.2 2.4-.6 1.6-.9 2.5-2.5 2.5-4.3V16.5c0-1.7-1-3.4-2.5-4.2zm-2 35.2c0 .2-.1.3-.2.3-.1.1-.3.1-.4 0L21 41c-.8-.5-1.7-.7-2.6-.7H5.6c-.2 0-.4-.2-.4-.4V24.1c0-.2.2-.4.4-.4h12.8c.9 0 1.8-.3 2.6-.7l10.8-6.7c.1-.1.3-.1.4 0 .1.1.2.2.2.3v30.9z" />
  </svg>
);
export default SvgVolumeLow;
