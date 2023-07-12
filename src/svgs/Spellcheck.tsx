import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpellcheck = ({
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
    <path d="M24.3 29.3c-.3-.6-.8-.9-1.4-.9h-6c-.7 0-1.2.3-1.4.9L4.1 55.4c-.5 1.1.3 2.1 1.4 2.1h4.9c.6 0 1.2-.4 1.3-.9l1.6-4h12.4l1.5 4c.1.6.8.9 1.3.9h5.2c1.3-.1 2.1-1.2 1.6-2.1l-11-26.1zm-8.6 16.1 4.1-10.5 4.1 10.5h-8.2zM61.6 4.8c-.9-.9-2.3-.9-3.2 0L37.5 25.5l-5.2-5.1c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l6.3 6.2c.6.6 1.3.9 2.1.9s1.5-.3 2.1-.9L61.6 8c.9-.9.9-2.3 0-3.2z" />
  </svg>
);
export default SvgSpellcheck;
