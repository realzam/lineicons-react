import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowDownCircle = ({
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
    <path d="m40.3 32-6.1 6V20.7c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2V38l-6.1-6c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l9.9 9.8c.4.4 1 .6 1.6.6s1.1-.2 1.6-.6l9.9-9.8c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0z" />
    <path d="M32 1.7C15.3 1.7 1.8 15.3 1.8 32S15.3 62.3 32 62.3 62.2 48.7 62.2 32 48.7 1.7 32 1.7zm0 56.1C17.8 57.8 6.2 46.2 6.2 32S17.8 6.2 32 6.2c14.2 0 25.8 11.6 25.8 25.8S46.2 57.8 32 57.8z" />
  </svg>
);
export default SvgArrowDownCircle;
