import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLibrary = ({
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
    <path d="M57.2 9.4h-22c-1.2 0-2.3.4-3.2 1-.9-.6-2-1-3.2-1h-22c-2.8 0-5 2.3-5 5V47c0 2.8 2.3 5 5 5h23v.3c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3V52h23c2.8 0 5-2.3 5-5V14.4c-.1-2.8-2.4-5-5.2-5zM6.8 47.6c-.3 0-.5-.2-.5-.5V14.4c0-.3.2-.5.5-.5h22.1c.5 0 .9.4.9.9v32.8h-23zm51-.6c0 .3-.2.5-.5.5h-23V14.8c0-.5.4-.9.9-.9h22.1c.3 0 .5.2.5.5V47z" />
    <path d="M14.3 23.7h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM42 23.7h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H42c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM49.6 27.4h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM21.8 27.4h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM21.8 36.2h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM49.6 36.2h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgLibrary;
