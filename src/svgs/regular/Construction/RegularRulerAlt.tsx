import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRulerAlt = ({
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
    <path d="M60.4 16.8 47.2 3.6c-1.2-1.2-2.7-1.8-4.4-1.8s-3.2.6-4.4 1.8L3.6 38.3c-1.2 1.2-1.8 2.7-1.8 4.4s.6 3.2 1.8 4.4l13.2 13.2c1.2 1.2 2.7 1.8 4.4 1.8 1.7 0 3.2-.7 4.4-1.8l34.7-34.7c1.2-1.2 1.8-2.8 1.8-4.4.1-1.6-.5-3.2-1.7-4.4zm-3.2 5.7L22.5 57.2c-.7.7-1.8.7-2.5 0L6.8 44c-.3-.3-.5-.8-.5-1.2s.2-.9.5-1.2L9.4 39l9 9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-9-9 3.6-3.6 5.4 5.4c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2L19.4 29l3.6-3.6 9 9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-9-9 3.6-3.6 5.4 5.4c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2L33 15.3l3.6-3.6 9 9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-9-9 1.7-1.7c.3-.3.8-.5 1.2-.5s.9.2 1.2.5L57.2 20c.3.3.5.8.5 1.2 0 .5-.2 1-.5 1.3z" />
  </svg>
);
export default SvgRulerAlt;
