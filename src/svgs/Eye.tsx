import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEye = ({
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
    <path d="M32 52.7C12.2 52.7 2.4 33.8 2 33c-.3-.6-.3-1.4 0-2 .4-.8 10.2-19.6 30-19.6S61.6 30.2 62 31c.3.6.3 1.4 0 2-.4.8-10.2 19.7-30 19.7zM6.6 32C8.8 35.7 17.4 48.2 32 48.2c14.6 0 23.2-12.5 25.4-16.2-2.2-3.7-10.8-16.2-25.4-16.2C17.4 15.8 8.8 28.3 6.6 32z" />
    <path d="M32 40.5c-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5 8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5zM32 28c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" />
  </svg>
);
export default SvgEye;
