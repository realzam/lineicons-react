import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBackward = ({
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
    <path d="M54.6 4.2c-2.1-1.2-4.8-1.1-6.8.3L10.4 28.9V4c0-1.2-1-2.3-2.3-2.3S5.9 2.8 5.9 4v56c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V35.1l37.4 24.4c1.1.7 2.4 1.1 3.6 1.1 1.1 0 2.2-.3 3.2-.8 2.1-1.2 3.5-3.4 3.5-5.8V10c-.1-2.4-1.5-4.6-3.6-5.8zm-1 49.8c0 1.1-.8 1.6-1.1 1.8-.7.4-1.5.3-2.2-.1L13.9 32 50.3 8.3c.7-.4 1.5-.5 2.2-.1.3.2 1.1.7 1.1 1.8v44z" />
  </svg>
);
export default SvgBackward;
