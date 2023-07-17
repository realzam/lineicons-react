import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBulb = ({
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
    <path d="M55.2 24.9C55.2 12.1 44.8 1.8 32 1.8 19.2 1.8 8.8 12.1 8.8 24.9c0 8.6 4.8 16.5 12.3 20.5v10.7c0 3.4 2.7 6.1 6.1 6.1h9.5c3.4 0 6.1-2.7 6.1-6.1V45.4c7.6-4 12.4-11.9 12.4-20.5zM38.4 56.1c0 .9-.7 1.6-1.6 1.6h-9.5c-.9 0-1.6-.7-1.6-1.6v-9.9h12.7v9.9zm1.7-14.3h-5.5v-7.3l5.7-4.4c1-.8 1.2-2.2.4-3.2-.8-1-2.2-1.2-3.2-.4l-3 2.3V24c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v5.1l-3.8-2.7c-1-.7-2.4-.5-3.1.5-.7 1-.5 2.4.5 3.1l6.4 4.5v7.2h-6.2c-6.4-3.1-10.6-9.7-10.6-16.8 0-10.3 8.4-18.7 18.7-18.7s18.7 8.4 18.7 18.7c.2 7.2-4 13.8-10.4 16.9z" />
  </svg>
);
export default SvgBulb;
