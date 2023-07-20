import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWeight = ({
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
    <path d="M53.5 1.8h-43C7.1 1.8 4.3 4.6 4.3 8v48c0 3.4 2.8 6.2 6.2 6.2h42.9c3.4 0 6.2-2.8 6.2-6.2V8c.1-3.4-2.7-6.2-6.1-6.2zM55.2 56c0 1-.8 1.8-1.8 1.8H10.5c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h42.9c1 0 1.8.8 1.8 1.8v48z" />
    <path d="M45.8 14c-9.2-1.7-18.5-1.7-27.6 0-.9.2-1.8.7-2.3 1.5-.5.7-.6 1.6-.5 2.4l1.9 9.3c.3 1.5 1.7 2.6 3.2 2.6.2 0 .4 0 .6-.1 7.2-1.4 14.5-1.4 21.7 0 1.7.3 3.5-.8 3.8-2.5l1.9-9.3c.2-.8 0-1.7-.5-2.4-.4-.7-1.2-1.3-2.2-1.5zm-3.3 11.1c-2.9-.5-5.9-.8-8.8-.9l-1.2-3.6c-.4-1.2-1.7-1.8-2.9-1.4-1.2.4-1.8 1.7-1.4 2.9l.7 2.1c-2.5.1-5 .4-7.5.8L20 18.1c7.9-1.4 15.9-1.4 23.8 0l-1.3 7z" />
  </svg>
);
export default SvgWeight;
