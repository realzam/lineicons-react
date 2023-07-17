import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRoad = ({
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
    <path d="m63.1 53.6-11-44.9C51.7 7.2 50.2 6 48.6 6H15.4c-1.6 0-3.1 1.1-3.5 2.7L.9 53.6c-.3 1.1 0 2.2.6 3 .7.9 1.7 1.4 2.8 1.4h55.4c1.1 0 2.1-.5 2.8-1.4s.9-2 .6-3zM32 46.8c-1.2 0-2.2 1-2.2 2.2v4.4H13.7l10.1-42.9h6v5c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-5h6l10.1 42.9H34.2V49c0-1.2-1-2.2-2.2-2.2zM16.1 10.5h3L9 53.5H5.5l10.6-43zm38.9 43-10.1-43h3l10.6 42.9H55z" />
    <path d="M32 30.6c1.2 0 2.2-1 2.2-2.2v-4.9c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v4.9c0 1.2 1 2.2 2.2 2.2zM34.2 36.3c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v4.9c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-4.9z" />
  </svg>
);
export default SvgRoad;
