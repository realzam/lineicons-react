import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCirclePlus = ({
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
    <path d="M42.2 29.7h-8v-7.9c0-1.2-1-2.2-2.3-2.2-1.2 0-2.2 1-2.2 2.3v7.9h-7.9c-1.2 0-2.2 1-2.2 2.3 0 1.2 1 2.2 2.3 2.2h7.9v7.9c0 1.2 1 2.2 2.3 2.2 1.2 0 2.2-1 2.2-2.3v-7.9h7.9c1.2 0 2.2-1 2.2-2.3 0-1.2-1-2.2-2.2-2.2z" />
    <path d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32s13.6 30.3 30.3 30.3c16.7 0 30.3-13.6 30.3-30.3C62.3 15.3 48.7 1.8 32 1.8zm0 56C17.8 57.8 6.3 46.2 6.3 32S17.8 6.3 32 6.3 57.8 17.8 57.8 32 46.2 57.8 32 57.8z" />
  </svg>
);
export default SvgCirclePlus;
