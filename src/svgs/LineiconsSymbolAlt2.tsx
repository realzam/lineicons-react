import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLineiconsSymbolAlt2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="M32 1c-8.56 0-16.31 3.47-21.92 9.08C4.47 15.69 1 23.44 1 32c0 8.56 3.47 16.31 9.08 21.92C15.69 59.53 23.44 63 32 63c8.56 0 16.31-3.47 21.92-9.08C59.53 48.31 63 40.56 63 32 63 14.88 49.12 1 32 1Zm-.54 16.82a2.746 2.746 0 0 1 3.91 0l7.61 7.69a2.832 2.832 0 0 1 0 3.95 2.734 2.734 0 0 1-3.9 0l-7.62-7.7a2.8 2.8 0 0 1 0-3.94Zm1.37 28.36a2.734 2.734 0 0 1-3.9 0l-7.62-7.69a2.813 2.813 0 0 1 0-3.95 2.746 2.746 0 0 1 3.91 0l7.61 7.7a2.8 2.8 0 0 1 0 3.94Zm10.65-2.72a2.764 2.764 0 0 1-3.91 0L20.81 24.5a2.813 2.813 0 0 1 0-3.95 2.752 2.752 0 0 1 3.9 0l18.77 18.96a2.832 2.832 0 0 1 0 3.95Z"
    />
  </svg>
);
export default SvgLineiconsSymbolAlt2;
