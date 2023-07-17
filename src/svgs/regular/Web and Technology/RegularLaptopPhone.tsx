import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLaptopPhone = ({
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
    <path d="M58.1 22.1h-6V10.4c0-3.4-2.7-6.1-6.1-6.1H13c-3.4 0-6.1 2.7-6.1 6.1v17.5c-.6.5-1.1 1.2-1.4 2.1L1.8 48c-.2 1 .1 2.1.8 2.9.6.8 1.6 1.2 2.6 1.2h32.2v3.5c0 2.3 1.9 4.2 4.2 4.2h16.5c2.3 0 4.2-1.9 4.2-4.2V26.3c0-2.3-1.9-4.2-4.2-4.2zM6.5 47.6l3.3-15.9h27.7v15.9h-31zm30.9-21.3v.9h-26V10.4c0-.9.7-1.6 1.6-1.6h33c.9 0 1.6.7 1.6 1.6v11.7h-6c-2.3 0-4.2 1.9-4.2 4.2zm20.4 28.9H41.9V26.6h15.9v28.6z" />
    <path d="M47.6 34.3h5c1.2 0 2.3-1 2.3-2.3 0-1.2-1-2.3-2.3-2.3h-5c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3zM49.9 49.8c-.1 0-.3.1-.4.1-.1.1-.3.1-.4.2l-.3.3c-.4.4-.7 1-.7 1.6 0 .6.2 1.2.7 1.6l.3.3c.1.1.3.2.4.2.1.1.3.1.4.1h.4c.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.6 0-.6-.2-1.2-.7-1.6-.5-.4-1.3-.6-2-.5z" />
  </svg>
);
export default SvgLaptopPhone;
