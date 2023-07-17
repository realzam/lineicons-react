import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAgenda = ({
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
    <path d="M46 1.8H18c-3.4 0-6.3 2.8-6.3 6.3v43.5c0 2.7 1.8 5 4.2 5.9V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-2.3H46c3.4 0 6.3-2.8 6.3-6.3V8c0-3.4-2.8-6.2-6.3-6.2zM18 53.2c-1 0-1.8-.8-1.8-1.8V39.7h20.2v13.5H18zm-1.8-18V21.7h20.2v13.5H16.2zm24.7-13.5h6.9v13.5h-6.9V21.7zM47.8 8v9.2h-6.9V6.3H46c1 0 1.8.7 1.8 1.7zM18 6.3h18.4v10.9H16.2V8c0-1 .8-1.7 1.8-1.7zm28 46.9h-5.1V39.7h6.9v11.8c0 1-.8 1.7-1.8 1.7z" />
  </svg>
);
export default SvgAgenda;
