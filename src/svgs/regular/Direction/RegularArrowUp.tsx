import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowUp = ({
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
    <path d="m54.6 27.1-21-20.7c-.9-.9-2.3-.9-3.2 0l-21 20.7c-.9.9-.9 2.3 0 3.2.9.9 2.3.9 3.2 0l17.1-16.8V56c0 1.2 1 2.2 2.2 2.2s2.3-1 2.3-2.2V13.3l17.3 17c.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7.8-.8.8-2.3-.1-3.1z" />
  </svg>
);
export default SvgArrowUp;
