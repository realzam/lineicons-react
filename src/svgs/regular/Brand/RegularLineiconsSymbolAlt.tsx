import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLineiconsSymbolAlt = ({
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
      d="M53 1H11C5.48 1 1 5.48 1 11v42c0 5.52 4.48 10 10 10h42c5.52 0 10-4.48 10-10V11c0-5.52-4.48-10-10-10ZM31.52 14.03a3.495 3.495 0 0 1 4.95 0l9.63 9.75c1.37 1.38 1.39 3.62.02 5a3.477 3.477 0 0 1-4.95 0l-9.65-9.75c-1.37-1.37-1.37-3.62 0-5Zm1.74 35.94a3.495 3.495 0 0 1-4.95 0l-9.65-9.75a3.555 3.555 0 0 1 0-5 3.477 3.477 0 0 1 4.95 0l9.65 9.75a3.574 3.574 0 0 1 0 5Zm13.48-3.46a3.477 3.477 0 0 1-4.95 0L18.02 22.5a3.574 3.574 0 0 1 0-5 3.477 3.477 0 0 1 4.95 0l23.77 24.01a3.574 3.574 0 0 1 0 5Z"
    />
  </svg>
);
export default SvgLineiconsSymbolAlt;
