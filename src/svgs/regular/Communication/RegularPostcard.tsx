import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPostcard = ({
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
    <path d="M56 11.9H8c-3.4 0-6.2 2.8-6.2 6.2v27.7C1.8 49.2 4.6 52 8 52h48c3.4 0 6.2-2.8 6.2-6.2V18.2c0-3.5-2.8-6.3-6.2-6.3zm1.8 33.9c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V18.2c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z" />
    <path d="M32 20.9c-1.2 0-2.2 1-2.2 2.2v15.3c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2V23.1c0-1.2-1-2.2-2.2-2.2zM11.6 33h8.9c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-8.9c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2zM52 20.9h-9.4c-1.5 0-2.6 1.2-2.6 2.6v9.4c0 1.4 1.2 2.6 2.6 2.6H52c1.4 0 2.6-1.2 2.6-2.6v-9.4c0-1.5-1.2-2.6-2.6-2.6zM50.1 31h-5.7v-5.7h5.7V31zM23 36.1H11.6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2H23c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2z" />
  </svg>
);
export default SvgPostcard;
