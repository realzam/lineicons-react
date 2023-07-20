import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlug = ({
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
    <path d="M45.3 11.9h-3.4V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v7.9H26.6V4c0-1.2-1-2.3-2.3-2.3S22 2.7 22 4v7.9h-3.4c-2.3 0-4.3 1.9-4.3 4.3v12.4c0 7.3 6 13.3 13.3 13.3h2V60c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V41.9h2c7.3 0 13.3-6 13.3-13.3V16.2c0-2.4-1.9-4.3-4.2-4.3zM45 28.6c0 4.9-4 8.8-8.8 8.8h-8.4c-4.9 0-8.8-4-8.8-8.8V16.4h26v12.2z" />
  </svg>
);
export default SvgPlug;
