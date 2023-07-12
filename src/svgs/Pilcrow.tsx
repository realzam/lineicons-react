import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPilcrow = ({
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
    <path d="M49.8 1.8H28.3C19.3 1.8 12 9.1 12 18c0 8.6 6.6 15.6 15 16.2V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V6.3H40V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V6.3h5.3C51 6.3 52 5.2 52 4s-1-2.2-2.2-2.2zM16.5 18c0-6 4.6-11.1 10.5-11.7v23.4c-5.9-.6-10.5-5.6-10.5-11.7z" />
  </svg>
);
export default SvgPilcrow;
