import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVolume = ({
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
    <path d="M32 52.3c-.9 0-1.8-.2-2.6-.7l-10.8-6.7c-.1 0-.1-.1-.2-.1H5.6c-2.7 0-4.9-2.2-4.9-4.9V24.1c0-2.7 2.2-4.9 4.9-4.9h12.8c.1 0 .1 0 .2-.1l10.8-6.7c1.5-.9 3.4-1 5-.1s2.5 2.5 2.5 4.3v30.9c0 1.8-1 3.4-2.5 4.3-.8.3-1.6.5-2.4.5zM5.6 23.7c-.2 0-.4.2-.4.4v15.8c0 .2.2.4.4.4h12.8c.9 0 1.8.3 2.6.7l10.8 6.7c.1.1.3.1.4 0 .1-.1.2-.2.2-.3V16.5c0-.2-.1-.3-.2-.3-.1-.1-.3-.1-.4 0L21 23c-.8.5-1.7.7-2.6.7H5.6z" />
  </svg>
);
export default SvgVolume;
