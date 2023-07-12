import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhone = ({
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
    <path d="M48.6 60.9c-8.1 0-19.6-5.8-30.2-15.8C4 31.3-2.1 15.9 4.3 9.1c.3-.3.7-.6 1.1-.8l8.1-4.6c2.1-1.2 4.7-.6 6.1 1.4l5.9 8.4c.7 1 1 2.2.7 3.4-.2 1.1-.9 2.1-1.9 2.8L20.8 22c2.7 3.9 10 13.6 21.6 20.5.1.1.2 0 .2 0l2.5-3.4c1.4-1.9 4.1-2.4 6.2-1.1l8.8 5.6c2.1 1.3 2.7 4 1.4 6.1l-4.8 7.7c-.3.4-.6.8-.9 1.1-1.8 1.6-4.3 2.4-7.2 2.4zM15.8 7.6s-.1 0 0 0l-8.2 4.6c-3.8 4.1.9 17.2 14 29.6 13.3 12.6 27 17.1 31.4 13.3l4.8-7.7-8.8-5.6h-.2l-2.5 3.4c-1.4 1.9-4.1 2.4-6.1 1.2-12.5-7.5-20.3-17.9-23.1-22-.7-1-.9-2.2-.7-3.3.2-1.2.9-2.2 1.9-2.8l3.5-2.3L16 7.7c-.1 0-.2-.1-.2-.1z" />
  </svg>
);
export default SvgPhone;
