import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIndentIncrease = ({
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
    <path d="M8.5 6.3h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H8.5c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM54.3 57.8H8.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM56.6 29.5l-10.1-8.6c-.9-.8-2.1-.9-3.1-.4-1.1.5-1.8 1.6-1.8 2.9v17.5c.1 1.1.8 2.1 1.9 2.5.4.2.8.2 1.2.2.7 0 1.3-.2 1.9-.7l10-8.6c.7-.6 1.1-1.4 1.1-2.4s-.4-1.9-1.1-2.4zm-10.5 7.9V26.5l6.4 5.4-6.4 5.5zM8.5 20.2h21.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H8.5c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM8.5 34.3h21.8c1.2 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3H8.5c-1.2 0-2.3 1-2.3 2.3.1 1.3 1.1 2.3 2.3 2.3zM8.5 48.3h21.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H8.5c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3z" />
  </svg>
);
export default SvgIndentIncrease;
