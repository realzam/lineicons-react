import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStamp = ({
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
    <path d="M46 35h-7.3l1.2-24.4c.1-2.4-.7-4.7-2.3-6.4C36 2.6 34.1 1.8 32 1.8c-2.1 0-4.1.9-5.6 2.4-1.6 1.7-2.5 4-2.4 6.4L25.3 35H18c-6.2 0-11.2 5.4-11.2 12.1v4.7c0 1.5 1.1 2.7 2.5 2.8V56c0 3.4 2.8 6.3 6.3 6.3h32.7c3.4 0 6.3-2.8 6.3-6.3v-1.4c1.4-.1 2.5-1.3 2.5-2.8v-4.7c0-6.7-5-12.1-11.1-12.1zM28.6 10.4c-.1-1.2.4-2.3 1.1-3.1C31 6 33 6 34.3 7.3c.8.8 1.2 1.9 1.1 3L34.2 35h-4.4l-1.2-24.6zM11.4 47.1c0-4.2 3-7.6 6.7-7.6H46c3.7 0 6.7 3.4 6.7 7.6v3.1H11.4v-3.1zm37 10.7H15.6c-1 0-1.8-.8-1.8-1.8v-1.3H50V56c.1 1-.7 1.8-1.6 1.8z" />
  </svg>
);
export default SvgStamp;
