import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAnchor = ({
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
    <path d="m54 46.9-5.1-5.4c-.8-.9-2.2-1-3.1-.1l-5.4 4.8c-.9.8-1 2.3-.2 3.2.8.9 2.2 1 3.2.2l1.2-1.1c-1.2 4.7-5.3 8.4-10.5 9.2V26.2h5.5c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.5V18c3.5-1 6-4.2 6-7.9 0-4.5-3.7-8.2-8.2-8.2s-8.2 3.7-8.2 8.2c0 3.8 2.5 6.9 6 7.9v3.6h-5.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.5v31.5c-5.2-.8-9.4-4.6-10.5-9.3l1.5 1.3c.9.8 2.4.7 3.2-.2.8-.9.7-2.4-.2-3.2l-5.5-4.9c-.9-.8-2.3-.7-3.1.2L10 46.8c-.8.9-.8 2.3.1 3.2.4.4 1 .6 1.5.6.6 0 1.2-.2 1.7-.7l1.3-1.4c1.4 7.8 8.6 13.8 17.3 13.8 8.7 0 16-6 17.3-13.9l1.5 1.6c.4.5 1 .7 1.6.7.5 0 1.1-.2 1.5-.6 1-.9 1.1-2.3.2-3.2zM28.2 10c0-2.1 1.7-3.7 3.7-3.7S35.6 8 35.6 10s-1.7 3.7-3.7 3.7-3.7-1.7-3.7-3.7z" />
  </svg>
);
export default SvgAnchor;
