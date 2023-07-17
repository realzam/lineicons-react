import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgControlPanel = ({
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
    <path d="M48.4 1.8H15.6c-3.4 0-6.3 2.8-6.3 6.3v48c0 3.4 2.8 6.3 6.3 6.3h32.7c3.4 0 6.3-2.8 6.3-6.3V8c0-3.4-2.8-6.2-6.2-6.2zM50.1 56c0 1-.8 1.8-1.8 1.8H15.6c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h32.7c1 0 1.8.8 1.8 1.8v48z" />
    <path d="M42.2 14.4H26.6v-.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V19h15.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM42.2 29.8h-.3v-.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3H21.8c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h15.6v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.3h.3c1.2 0 2.3-1 2.3-2.3-.2-1.3-1.2-2.3-2.4-2.3zM42.2 45.1H26.6v-.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.3h15.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgControlPanel;
