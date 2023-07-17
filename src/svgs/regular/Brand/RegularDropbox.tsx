import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDropbox = ({
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
    <path d="m60.9 30.5-9.3-6.2 9.4-6.2c.8-.6 1.3-1.5 1.3-2.5s-.6-1.8-1.4-2.3L46.6 3.8c-.9-.6-2.3-.6-3.2 0L32 11.4 20.7 3.9c-1-.8-2.5-.8-3.4 0L3 13.3c-.8.5-1.3 1.4-1.3 2.4s.5 1.9 1.3 2.4l9.3 6.2L3 30.5c-.8.5-1.3 1.4-1.3 2.4s.5 1.9 1.3 2.4l8.4 5.6v5.8c0 1 .5 1.9 1.4 2.5L30.4 60c.5.3 1 .5 1.6.5.5 0 1-.1 1.5-.4l17.6-10.8c.8-.6 1.3-1.5 1.3-2.4v-6l8.4-5.6c.8-.5 1.3-1.4 1.3-2.4.1-.9-.4-1.8-1.2-2.4zM32 31.9l-11.4-7.6L32 16.8l11.4 7.6L32 31.9zM45 8.2l11.4 7.6-8.9 5.9-11.4-7.6L45 8.2zM7.5 15.7 19 8.2l8.9 5.9-11.4 7.5h-.1l-8.9-5.9zm9 11.3L28 34.6l-9 5.9-11.5-7.6 9-5.9zM16 44l1.4.9c.5.3 1 .5 1.6.5.6 0 1.1-.2 1.6-.5l9.2-6.1v15.6L16 45.9V44zm32 2-13.8 8.4V38.8l9.2 6c.5.3 1 .5 1.6.5.6 0 1.1-.2 1.6-.5l1.4-.9V46zm-3-5.5-8.9-5.8 11.4-7.6 8.9 5.9L45 40.5z" />
  </svg>
);
export default SvgDropbox;
