import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVisa = ({
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
    <path d="M24.8 39.6h4l2.4-15.2h-3.9zM39.2 30.5c-1.4-.7-2.2-1.2-2.2-1.9 0-.6.7-1.3 2.3-1.3 1.3 0 2.2.3 3 .6l.4.1.5-3.2c-.8-.3-2-.6-3.5-.6-3.9 0-6.7 2-6.7 5 0 2.2 1.9 3.5 3.5 4.2 1.5.7 2.1 1.2 2.1 1.9 0 1-1.2 1.5-2.4 1.5-1.6 0-2.5-.2-3.8-.8l-.5-.2-.6 3.5c.9.3 2.6.7 4.3.7 4.2.1 6.9-2 6.9-5.2-.1-1.8-1.1-3.2-3.3-4.3zM50.2 24.4c-.9 0-1.7.3-2.1 1.3l-5.9 13.9h4v.1s.6-1.9.9-2.3h5c.1.5.5 2.3.5 2.3h3.7l-3.2-15.2h-2.9zm-2 9.9c.3-.9 1.6-4.2 1.6-4.2 0 .1.4-.9.5-1.4l.3 1.3s.8 3.7.9 4.4c-.6-.1-2.5-.1-3.3-.1zM21.6 24.4l-3.9 10.5-2.1-10.5H7.7l4.4 3.3 3.2 11.9h4.1l6.4-15.2z" />
    <path d="M54.6 13.3H9.4c-4.2 0-7.7 3.4-7.7 7.7v22c0 4.2 3.4 7.7 7.7 7.7h45.1c4.2 0 7.7-3.4 7.7-7.7V21c.1-4.2-3.4-7.7-7.6-7.7zM57.8 43c0 1.8-1.4 3.2-3.2 3.2H9.4c-1.8 0-3.2-1.4-3.2-3.2V21c0-1.8 1.4-3.2 3.2-3.2h45.1c1.8 0 3.2 1.4 3.2 3.2v22z" />
  </svg>
);
export default SvgVisa;
