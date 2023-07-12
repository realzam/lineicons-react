import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuotation = ({
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
    <path d="M19.2 49.5c-1.2 0-2.3-.7-2.7-1.8l-3.3-8c-3.7-.6-7-2.5-9.1-5.4-2.2-2.9-2.9-6.5-2-10 1.4-5.7 7.3-10 13.8-9.9 4.6.1 8.4 2 10.9 5.4 2.4 3.4 3 8 1.6 12.2-1.3 3.8-3 7.6-4.6 11.3-.6 1.5-1.3 3-1.9 4.4-.4 1.1-1.5 1.8-2.7 1.8zm1.5-3.5zm-5-27.1c-4.4 0-8.4 2.8-9.3 6.5-.5 2.2-.1 4.4 1.3 6.2 1.6 2.2 4.3 3.6 7.2 3.8l1.4.1 2.9 7c.1-.3.3-.7.4-1 1.6-3.6 3.2-7.3 4.4-11 1-2.8.6-5.9-1-8.1-1.6-2.2-4.1-3.4-7.2-3.5h-.1zM52.3 49.6c-1.2 0-2.3-.7-2.7-1.8l-3.3-8c-3.7-.6-7-2.5-9.1-5.4-2.2-2.9-2.9-6.5-2-10 1.4-5.7 7.3-10 13.8-9.9 4.6.1 8.4 2 10.8 5.4 2.4 3.4 3 8 1.6 12.2-1.3 3.8-3 7.6-4.6 11.3-.6 1.5-1.3 3-1.9 4.4-.3 1.1-1.4 1.8-2.6 1.8zm1.5-3.5zm-5-27.2c-4.4 0-8.4 2.8-9.3 6.5-.5 2.2-.1 4.4 1.3 6.3 1.6 2.2 4.3 3.6 7.2 3.8l1.4.1 2.9 7c.1-.3.3-.7.4-1 1.6-3.6 3.2-7.3 4.4-11 1-2.8.6-5.9-1-8.2-1.6-2.2-4.1-3.4-7.2-3.5h-.1z" />
  </svg>
);
export default SvgQuotation;