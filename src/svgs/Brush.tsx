import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrush = ({
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
    <path d="M60.1 19.1 45 4c-2.9-2.9-7.5-2.9-10.4 0L20.1 18.5c-2.4 2.4-3.8 5.6-3.8 9.1 0 2.7.8 5.2 2.3 7.3L3.9 49.6c-1.4 1.4-2.2 3.2-2.2 5.1 0 2 .8 3.9 2.2 5.3 1.4 1.4 3.3 2.1 5.2 2.1 1.9 0 3.8-.7 5.2-2.1L29 45.3c2.2 1.6 4.8 2.4 7.4 2.4 3.3 0 6.6-1.2 9.1-3.7L60 29.5c1.4-1.4 2.1-3.2 2.1-5.2s-.6-3.8-2-5.2zm-49 37.7c-1.1 1.1-2.9 1.1-4 0-.5-.5-.8-1.3-.8-2s.3-1.4.8-2l14.5-14.5 4 4-14.5 14.5zm19.5-16-7.3-7.3c-1.6-1.6-2.4-3.7-2.4-5.9s.9-4.3 2.4-5.9l2.5-2.5 19.1 19.1-2.5 2.5c-3.3 3.2-8.6 3.2-11.8 0zm26.3-14.5L48 35.2 29 16.1l8.9-8.9c1.1-1.1 2.9-1.1 4 0L57 22.3c.5.5.8 1.2.8 2s-.3 1.4-.9 2z" />
    <path d="M36.4 35.2c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.8.9-2.3 0-3.2zM28.7 26.5c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.8.9-2.3 0-3.2z" />
  </svg>
);
export default SvgBrush;
