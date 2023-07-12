import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgClose = ({
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
    <path d="M35.2 32 59.6 7.6c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0L32 28.8 7.6 4.4c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2L28.8 32 4.4 56.4c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7L32 35.2l24.4 24.4c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2L35.2 32z" />
  </svg>
);
export default SvgClose;
