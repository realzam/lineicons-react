import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCaravan = ({
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
    <path d="M18.3 19.6h-5.6c-1.8 0-3.3 1.5-3.3 3.3v5.6c0 1.8 1.5 3.3 3.3 3.3h5.6c1.8 0 3.3-1.5 3.3-3.3v-5.6c-.1-1.9-1.5-3.3-3.3-3.3zM17 27.2h-3.1v-3.1H17v3.1z" />
    <path d="M60 39.9h-5.4V26.8c0-.5-.1-1-.4-1.5l-7.1-11.4c-.8-1.2-2.1-2-3.6-2H7.9c-3.4 0-6.1 2.7-6.1 6.1v20.3c0 3 2.2 5.5 5.1 6v.4c0 4 3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3v-.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2zm-45.8 7.7c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8zm0-10.2c-2.2 0-4.2 1-5.5 2.6h-.8c-.9 0-1.6-.7-1.6-1.6V18c0-.9.7-1.6 1.6-1.6h35.5l6.7 10.9v12.6h-8.2V25.4c0-1.8-1.5-3.3-3.3-3.3H33c-1.8 0-3.3 1.5-3.3 3.3V40h-10c-1.3-1.6-3.3-2.6-5.5-2.6zm20.1 2.5V26.6h3.1v13.3h-3.1z" />
  </svg>
);
export default SvgCaravan;
