import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGoogleDrive = ({
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
    <path d="M42.1 39.1 22.3 4.9h19.4l19.9 34.2H42.1zm-16.7 2.8-9.7 17.2h37.6L63 41.9H25.4zM19.7 9.1 1 41.9l9.7 17.2 18.9-32.8-9.9-17.2z" />
  </svg>
);
export default SvgGoogleDrive;
