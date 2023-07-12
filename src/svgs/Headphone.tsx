import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHeadphone = ({
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
    <path d="M53.6 18c-5.9-5.8-13.7-8.9-22.1-8.7-16.4.2-29.7 13.5-29.7 29.6v11.5c0 2.3 1.9 4.3 4.3 4.3h6.2c2.3 0 4.3-1.9 4.3-4.3v-8.8c0-2.3-1.9-4.3-4.3-4.3h-6c.8-13 11.8-23.5 25.2-23.7 7.1-.2 13.9 2.5 18.9 7.4 4.5 4.4 7.1 10.1 7.3 16.2h-5.9c-2.3 0-4.3 1.9-4.3 4.3v8.8c0 2.3 1.9 4.3 4.3 4.3H58c2.3 0 4.3-1.9 4.3-4.3v-12c0-7.5-3.1-14.8-8.7-20.3zM11.9 50.2H6.3v-8.3H12v8.3zm45.9 0h-5.7v-8.3h5.7v8.3z" />
  </svg>
);
export default SvgHeadphone;
