import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTab = ({
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
    <path d="M48.6 1.8H15.4c-3.4 0-6.1 2.7-6.1 6.1v48.3c0 3.4 2.7 6.1 6.1 6.1h33.1c3.4 0 6.1-2.7 6.1-6.1V7.9c.1-3.4-2.7-6.1-6-6.1zm1.6 54.3c0 .9-.7 1.6-1.6 1.6H15.4c-.9 0-1.6-.7-1.6-1.6V7.9c0-.9.7-1.6 1.6-1.6h33.1c.9 0 1.6.7 1.6 1.6v48.2z" />
    <path d="M33 10.1h-7.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H33c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM39.4 10.1h-1.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h1.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM32 48.8c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-1.3-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgTab;
