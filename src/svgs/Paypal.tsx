import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPaypal = ({
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
    <path d="M51.9 11.9c-1-6.1-5.8-10.1-12.2-10.1H19.4c-1 0-1.9.7-2.2 1.7L5.6 50.8c-.2.7 0 1.4.4 1.9s1.1.9 1.8.9h5.6L12 59.5c-.2.7 0 1.4.4 1.9s1.1.9 1.8.9h14.4c1 0 2-.7 2.2-1.7L35.1 42h4.5c4.1 0 8.2-1.6 11.6-4.5 3.4-2.8 5.8-6.7 6.8-10.8 1.5-6.4-1-12.3-6.1-14.8zM21.2 6.3h18.6c4.4 0 7.5 2.9 7.8 7.2.1 1.4 0 2.5-.3 3.5-.7 3-2.6 6.1-5.3 8.3-2.6 2.2-5.7 3.4-8.7 3.4h-6.2c-1 0-1.9.7-2.2 1.7L20.4 49h-9.7L21.2 6.3zm32.5 19.4c-.7 3.1-2.6 6.1-5.3 8.3-2.6 2.2-5.7 3.4-8.7 3.4h-6.3c-1 0-2 .7-2.2 1.7l-4.3 18.6H17l1-4.2h4.1c1 0 1.9-.7 2.2-1.7l4.5-18.6h4.4c4.1 0 8.2-1.6 11.7-4.5 3.4-2.9 5.8-6.7 6.8-10.7.1-.3.1-.5.2-.8 1.8 2.1 2.6 5.1 1.8 8.5z" />
  </svg>
);
export default SvgPaypal;
