import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPointerTop = ({
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
    <path d="M38.4 62.2c-4.5 0-9.7-.8-13.5-2.8-4.6-2.4-7.6-8.6-9.1-11.6-.2-.4-.4-.9-.5-1.1-2.9-4.8-5.5-8.6-8-11.8-1.3-1.7-2.9-3.8-3-6.5 0-3 2.1-5.9 5.1-6.9 2.4-.8 5.1-.5 7.7.9.5.3 1.1.6 1.6.9 0-3.7 0-7.5.1-11.2.1-2 .2-4 1-5.8 1-2.2 2.9-3.8 5.2-4.5 2.2-.6 4.5-.3 6.4.9.6.4 1.1.8 1.5 1.3 1.6 1.7 2.5 4.2 2.8 7 .2 1.7.1 3.3 0 4.9 2.2-.2 4.5.6 6.2 2.1 2.8-.7 6 .2 8 2.4 1.4-.3 2.9-.2 4.4.3 2.2.8 4 2.5 4.8 4.6.7 1.7.7 3.5.7 5.1 0 3.3.1 6.7-.1 10.2-.2 4.7-.9 10.8-4.5 15.1-2.9 3.5-7.4 5.6-13.2 6.3-1.2.2-2.4.2-3.6.2zM12 25.8c-.4 0-.8.1-1.2.2-1 .3-2 1.4-2 2.5 0 1.2 1 2.5 2 3.8 2.7 3.4 5.3 7.3 8.3 12.2.2.3.4.8.7 1.4 1.1 2.3 3.8 7.8 7.1 9.5 4 2.1 10.3 2.6 14.5 2.1 3.2-.4 7.6-1.4 10.2-4.7 2.7-3.3 3.3-8.4 3.4-12.4.1-3.3.1-6.7.1-9.9 0-1.2 0-2.5-.4-3.5-.3-.9-1.1-1.6-2.1-1.9-.9-.3-1.8-.3-2.5.1-.5.3-1.1.4-1.7.2-.6-.2-1.1-.5-1.4-1.1-.9-1.7-3.3-2.4-4.9-1.5-1 .5-2.2.2-2.9-.7-1.1-1.5-3.4-2-4.9-1-.7.4-1.6.5-2.3.1-.7-.4-1.2-1.2-1.2-2 0-1 .1-2 .1-3 .1-1.6.2-3.1.1-4.6-.2-1.8-.8-3.4-1.7-4.4-.2-.2-.4-.4-.7-.6-.7-.5-1.7-.6-2.6-.3-1.1.3-2 1.1-2.4 2-.5 1.1-.6 2.5-.6 4.1-.2 5.3-.1 10.6 0 15.9 0 .9-.5 1.7-1.3 2.1-.7.4-1.7.3-2.3-.4-1.4-1.3-2.9-2.6-4.4-3.5-1.1-.5-2.1-.7-3-.7z" />
  </svg>
);
export default SvgPointerTop;