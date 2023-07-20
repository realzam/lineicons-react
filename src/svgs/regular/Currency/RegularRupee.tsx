import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRupee = ({
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
    <path d="M52.4 17H39.2c-.4-4-1.9-7.9-4.5-10.8h17.7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H11.6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h12.7c6.1 0 9.6 5.1 10.3 10.8h-23c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h22.8c-2 5.5-10.9 9.7-17 9.7-.9 0-1.7.5-2 1.3-.4.8-.2 1.7.3 2.4l22.2 26.5c.4.5 1.1.8 1.7.8.5 0 1-.2 1.4-.5 1-.8 1.1-2.2.3-3.2L21.9 35.2c7.4-1.5 15.7-6.6 17.2-13.7h13.3c1.2 0 2.2-1 2.2-2.2s-1-2.3-2.2-2.3z" />
  </svg>
);
export default SvgRupee;
