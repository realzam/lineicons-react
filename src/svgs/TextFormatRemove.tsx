import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextFormatRemove = ({
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
    <path d="M43 52.9H6.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H43c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM59.3 41l2.3-2.3c.9-.9.9-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-2.3 2.3-2.3-2.3c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l2.3 2.3-2.3 2.3c-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7l2.3-2.3 2.3 2.3c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2L59.3 41zM30.5 10.1c-.3-.9-1-1.2-1.9-1.2h-7.7c-.8 0-1.7.3-1.9 1.2L4.2 45c-.6 1.4.3 2.8 1.8 2.8h5.1c.9 0 1.8-.7 2-1.3l2.4-6h18l2.2 6c.2.9 1.2 1.3 2 1.3h5.4c1.7-.2 2.7-1.7 2-2.9L30.5 10.1zM19.3 33.2l5.2-13.7 5.2 13.7H19.3z" />
  </svg>
);
export default SvgTextFormatRemove;
