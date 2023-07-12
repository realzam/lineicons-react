import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeyboard = ({
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
    <path d="M56 11.9H8c-3.4 0-6.3 2.8-6.3 6.3v27.6c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V18.2c0-3.5-2.9-6.3-6.3-6.3zm1.8 33.9c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V18.2c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z" />
    <path d="M42.2 38.9H21.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM23.5 24c0-1.2-1-2.3-2.3-2.3h-1.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h1.7c1.3 0 2.3-1 2.3-2.3zM31.1 26.3h1.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-1.7c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM44.5 21.8h-1.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h1.7c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM25.3 34H27c1.2 0 2.3-1 2.3-2.2s-1-2.3-2.3-2.3h-1.7c-1.2 0-2.3 1-2.3 2.3s1.1 2.2 2.3 2.2zM36.9 34h1.7c1.2 0 2.3-1 2.3-2.2s-1-2.3-2.3-2.3h-1.7c-1.2 0-2.3 1-2.3 2.3s1.1 2.2 2.3 2.2z" />
  </svg>
);
export default SvgKeyboard;
