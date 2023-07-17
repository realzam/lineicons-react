import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDirection = ({
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
    <path d="m58.4 17.5-4.8-6.2c-.9-1.2-2.4-1.9-3.9-1.9H26.9V4c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v5.4h-13c-2.7 0-4.9 2.2-4.9 4.9v12.4c0 2.7 2.2 4.9 4.9 4.9h12.9V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V31.7h22.7c1.5 0 3-.7 3.9-1.9l4.8-6.2c1.6-1.8 1.6-4.3.2-6.1zm-3.6 3.3L50 27c-.1.1-.2.2-.4.2H9.5c-.2 0-.4-.2-.4-.4V14.3c0-.2.2-.4.4-.4h40.1c.1 0 .3.1.4.2l4.8 6.2c.1.1.1.4 0 .5z" />
  </svg>
);
export default SvgDirection;
