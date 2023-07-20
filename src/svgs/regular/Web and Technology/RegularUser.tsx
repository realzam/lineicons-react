import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUser = ({
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
    <path d="M32 36.8c8.3 0 15-6.7 15-15s-6.7-15-15-15-15 6.7-15 15 6.7 15 15 15zm0-25.5c5.8 0 10.5 4.7 10.5 10.5S37.8 32.3 32 32.3s-10.5-4.7-10.5-10.5S26.2 11.3 32 11.3zM61.5 53.2C53.3 46.3 42.9 42.5 32 42.5S10.7 46.3 2.5 53.2c-.9.8-1.1 2.2-.3 3.2.8.9 2.2 1.1 3.2.3C12.8 50.4 22.2 47 32 47s19.2 3.4 26.5 9.6c.4.4.9.5 1.5.5s1.3-.3 1.7-.8c.8-.9.7-2.3-.2-3.1z" />
  </svg>
);
export default SvgUser;
