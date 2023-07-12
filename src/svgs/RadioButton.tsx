import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRadioButton = ({
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
    <path d="M9.1 4.3c-4 0-7.3 3.3-7.3 7.3S5 19 9.1 19s7.3-3.3 7.3-7.3-3.3-7.4-7.3-7.4zm0 10.2c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zM9.1 24.7c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.3-7.3-7.3-7.3zm0 10.1c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zM9.1 45c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3S13.1 45 9.1 45zm0 10.2c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.2 2.8-2.8 2.8zM24.4 13.9H60c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM60 29.8H24.4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3 0-1.3-1.1-2.3-2.3-2.3zM60 50.1H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgRadioButton;
