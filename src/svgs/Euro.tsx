import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEuro = ({
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
    <path d="M49.2 57.8c-10.5 0-19.7-6.6-23.7-15.9h14.8c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H24c-.4-1.7-.6-3.5-.6-5.4 0-1 .1-1.9.2-2.8h16.7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H24.5C27.8 14.1 37.8 6.2 49.2 6.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2c-13.9 0-25.9 9.9-29.3 22.9h-5.1c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h4.3c-.1 1-.2 1.9-.2 2.9 0 1.8.2 3.6.5 5.4h-4.6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.8c4.2 11.7 15.6 20.4 28.5 20.4 1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.1-2.2z" />
  </svg>
);
export default SvgEuro;
