import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHighlightAlt = ({
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
    <path d="m60 10.2-5.3-5.3c-3-3-7.8-3-10.8 0L13.7 35.1c-1 1-1 2.7 0 3.8l.3.3L9.1 44c-.9.9-1.4 2.1-1.5 3.2l-4.9 4.9c-.7.7-1 1.7-.9 2.6.1.9.7 1.8 1.6 2.2l7.4 4c.5.3 1 .4 1.5.4.8 0 1.7-.3 2.3-1l3.1-3.1c1.1-.1 2.3-.6 3.1-1.5l4.9-4.9.2.2c.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8L60 20.9c1.4-1.4 2.2-3.3 2.2-5.4 0-2-.7-3.9-2.2-5.3zM12 56.6 7.2 54l2.2-2.2 3.7 3.7-1.1 1.1zm10.5-8.8-4.9 4.9c-.3.3-.8.3-1.1 0l-4.3-4.3c-.2-.3-.2-.5-.2-.6s0-.4.2-.6l4.9-4.9 2.7 2.7 2.7 2.8zm34.3-30.1-29 29-4.8-4.8-4.9-4.9 29-29c1.2-1.2 3.2-1.2 4.4 0l5.3 5.3c1.3 1.3 1.3 3.2 0 4.4z" />
  </svg>
);
export default SvgHighlightAlt;
