import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIndentDecrease = ({
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
    <path d="M9.7 6.3h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H9.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM55.5 57.8H9.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h45.8c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM17.4 42.9c.5.4 1.2.7 1.9.7.4 0 .8-.1 1.2-.2 1.1-.4 1.8-1.4 1.9-2.5V23.4c0-1.2-.7-2.4-1.8-2.9-1-.5-2.2-.3-3.1.4l-10 8.5c-.7.6-1.2 1.5-1.2 2.4 0 .9.4 1.8 1.1 2.4l10 8.7zm.5-16.4v10.9l-6.4-5.5 6.4-5.4zM55.5 15.7H33.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h21.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.2-2.3zM55.5 29.8H33.6c-1.2 0-2.3 1-2.3 2.3s1 2.2 2.3 2.2h21.8c1.2 0 2.3-1 2.3-2.2s-1-2.3-2.2-2.3zM55.5 43.8H33.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h21.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.2-2.3z" />
  </svg>
);
export default SvgIndentDecrease;
