import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMusic = ({
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
    <path d="M60.2 2.2c-.5-.4-1.2-.6-1.9-.4L22.2 9.7c-1 .2-1.8 1.1-1.8 2.2v30.6c-1.8-1.3-4.1-2.1-6.5-2.1-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11V29.1l31.7-6.9v14.1c-1.8-1.3-4.1-2.1-6.5-2.1-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11V4c0-.7-.3-1.3-.9-1.8zM13.9 57.8c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm11-44.1 31.7-6.9v10.8l-31.7 6.9V13.7zm25.2 37.9c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z" />
  </svg>
);
export default SvgMusic;
