import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSortAmountDsc = ({
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
    <path d="m22.7 43.2-6.3 6.3V9.1c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v40.4l-6.3-6.3c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.5 9.5c.6.6 1.4.9 2.3.9.8 0 1.6-.3 2.3-.9l9.5-9.5c.9-.9.9-2.3 0-3.2-.9-.8-2.3-.8-3.2 0zM39.7 52.7h-4.9c-1.2 0-2.2 1-2.3 2.2 0 1.2 1 2.3 2.2 2.3h4.9c1.2 0 2.2-1 2.3-2.2 0-1.3-1-2.3-2.2-2.3zM47.3 37.4H34.8c-1.2 0-2.2 1-2.3 2.2 0 1.2 1 2.3 2.2 2.3h12.5c1.2 0 2.2-1 2.3-2.2 0-1.3-1-2.3-2.2-2.3zM52.4 22.1H34.8c-1.2 0-2.3 1-2.3 2.2 0 1.2 1 2.3 2.2 2.3h17.6c1.2 0 2.2-1 2.3-2.2 0-1.3-1-2.3-2.2-2.3zM60 6.9H34.8c-1.2 0-2.2 1-2.3 2.2 0 1.2 1 2.3 2.2 2.3h25.2c1.2 0 2.2-1 2.3-2.2.1-1.3-1-2.3-2.2-2.3z" />
  </svg>
);
export default SvgSortAmountDsc;
