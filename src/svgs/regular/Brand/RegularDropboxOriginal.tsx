import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDropboxOriginal = ({
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
    <path d="m1 35.2 15.5 9.9L32 35.2l-15.5-9.8zM16.4 48.5 32 58.4l15.5-9.9L32 38.6zM32 35.2l15.5 9.9L63 35.2l-15.5-9.8zM16.5 5.6 1 15.5l15.5 9.9L32 15.5zM63 15.5 47.5 5.6 32 15.5l15.5 9.9z" />
  </svg>
);
export default SvgDropboxOriginal;
