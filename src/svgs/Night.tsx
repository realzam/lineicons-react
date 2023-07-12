import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNight = ({
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
    <path d="M35.5 4c-1.7-.5-3.4-.9-5.2-1.2-1.3-.2-2.7.5-3.2 1.7-.6 1.2-.3 2.7.7 3.5 7.1 6.6 9.7 16.3 6.8 25.4C31.4 43.5 22 50.6 11.1 50.9c-1.4 0-2.5.9-2.9 2.2-.4 1.3.2 2.7 1.3 3.4 2.5 1.5 5 2.7 7.5 3.5 2.9.9 5.9 1.3 8.9 1.3 5.1 0 10.1-1.3 14.6-3.8 7.1-3.9 12.1-10.2 14.3-17.8C59.1 24.7 50.6 9 35.5 4zm15 34.4c-1.8 6.5-6.2 11.8-12.1 15.1-6.2 3.4-13.3 4.1-20 2.1-.7-.2-1.5-.5-2.2-.8 10.6-2.1 19.4-9.7 22.7-20.1 2.9-9.2 1.1-18.9-4.8-26.5 12.8 4.3 20 17.6 16.4 30.2z" />
  </svg>
);
export default SvgNight;
