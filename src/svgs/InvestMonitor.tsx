import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInvestMonitor = ({
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
    <path d="M35.1 11.9h-5.4c-1 0-1.8-.7-1.8-1.6s.8-1.6 1.8-1.6h8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-2.3V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v.1h-1.2c-3.5 0-6.3 2.8-6.3 6.1s2.8 6.1 6.3 6.1H35c1 0 1.8.7 1.8 1.6s-.8 1.6-1.8 1.6h-9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h4.9v.1c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-.1c3.3-.1 6-2.8 6-6.1-.1-3.4-2.9-6.1-6.4-6.1zM13.8 35.3H9.7c-2.3 0-4.3 1.9-4.3 4.3V58c0 2.3 1.9 4.3 4.3 4.3h4.1c2.3 0 4.3-1.9 4.3-4.3V39.6c-.1-2.4-2-4.3-4.3-4.3zm-.3 22.5H9.9v-18h3.6v18zM34.1 29.6H30c-2.3 0-4.3 1.9-4.3 4.2V58c0 2.3 1.9 4.3 4.3 4.3h4.1c2.3 0 4.3-1.9 4.3-4.3V33.9c-.1-2.4-2-4.3-4.3-4.3zm-.3 28.2h-3.6V34.1h3.6v23.7zM54.3 35.3h-4.1c-2.3 0-4.3 1.9-4.3 4.3V58c0 2.3 1.9 4.3 4.3 4.3h4.1c2.3 0 4.3-1.9 4.3-4.3V39.6c0-2.4-1.9-4.3-4.3-4.3zm-.2 22.5h-3.6v-18h3.6v18z" />
  </svg>
);
export default SvgInvestMonitor;
