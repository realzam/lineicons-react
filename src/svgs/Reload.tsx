import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReload = ({
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
    <path d="M8.4 29c.3 0 .7-.1 1-.2l11.1-3.9c1.2-.4 1.8-1.7 1.4-2.9-.4-1.2-1.7-1.8-2.9-1.4L12.1 23c3.3-8.6 11.7-14.4 21.3-14.4 10.5 0 19.6 7 22.2 17 .3 1.2 1.5 1.9 2.7 1.6 1.2-.3 1.9-1.5 1.6-2.7-3.1-12-14-20.4-26.6-20.4-11.2 0-21.1 6.6-25.2 16.5l-2.1-6c-.4-1.2-1.7-1.8-2.9-1.4-1.2.4-1.8 1.7-1.4 2.9L5.5 27c.6 1.3 1.7 2 2.9 2zM62.1 49.7 58 39c-.3-.7-.8-1.3-1.5-1.6-.7-.3-1.5-.3-2.2 0l-11 4.2c-1.2.4-1.7 1.7-1.3 2.9.4 1.2 1.7 1.7 2.9 1.3l6.9-2.6c-4 7.3-11.8 12.1-20.5 12.1-9.9 0-18.6-6.2-21.7-15.4-.4-1.2-1.7-1.8-2.8-1.4-1.2.4-1.8 1.7-1.4 2.8 3.7 11 14.1 18.4 25.9 18.4 10.3 0 19.6-5.7 24.3-14.5l2.3 6.1c.3.9 1.2 1.4 2.1 1.4.3 0 .5 0 .8-.2 1.2-.3 1.7-1.6 1.3-2.8z" />
  </svg>
);
export default SvgReload;
