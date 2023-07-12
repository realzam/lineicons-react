import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowRight = ({
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
    <path d="m57.6 30.4-20.7-21c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l16.8 17.1H8c-1.2 0-2.2 1-2.2 2.2s1 2.3 2.2 2.3h42.7l-17 17.3c-.9.9-.9 2.3 0 3.2.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7l20.7-21c.9-.9.9-2.3 0-3.2z" />
  </svg>
);
export default SvgArrowRight;
