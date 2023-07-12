import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWindows = ({
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
    <path d="M62.9 30.5V1.1C51.6 2.6 40.4 4.2 29 6v24.7c11.4-.1 22.6-.1 33.9-.2zM1 10.2V31c8.3 0 16.9-.1 25.2-.1V6.7C17.9 7.8 9.3 8.9 1 10.2zM1 33.4v20.8c8.3 1.1 16.9 2.2 25.2 3.4v-24c-8.3-.2-16.9-.2-25.2-.2zM29.3 33.8c.1 8.2.1 16.2.1 24.3 11.2 1.5 22.4 3.1 33.6 4.8V33.8H29.3z" />
  </svg>
);
export default SvgWindows;
