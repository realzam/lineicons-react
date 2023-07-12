import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBus = ({
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
    <path d="M21.8 33.4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 7.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM42.2 33.4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 7.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.6 1.5-1.5 1.5z" />
    <path d="M56.4 4.3h-2.3c-.8-1.5-2.3-2.5-4.1-2.5H14.1c-1.8 0-3.4 1-4.1 2.5H7.6C5.4 4.3 3.5 6 3.4 8.1v4.4c0 2.2 1.9 3.9 4.3 3.9h1.7v29.7c0 3 2.2 5.5 5.1 5.9v4c0 3.4 2.8 6.3 6.3 6.3H23c3.4 0 6.3-2.8 6.3-6.3v-3.9H35V56c0 3.4 2.8 6.3 6.3 6.3h2.2c3.4 0 6.3-2.8 6.3-6.3v-4c2.9-.4 5.1-2.9 5.1-5.9V16.4h1.7c2.4 0 4.3-1.8 4.3-3.9V8.2c-.3-2.2-2.2-3.9-4.5-3.9zm-42.3 2h35.8c.1 0 .2.1.2.2V12H13.9V6.4c0-.1.1-.1.2-.1zm36 20.9H34.3V16.4h15.9v10.8zm-36.2 0V16.4h15.9v10.8H13.9zm-6-15.3V8.8h1.5v3.1H7.9zM24.7 56c0 1-.8 1.8-1.8 1.8h-2.2c-1 0-1.8-.8-1.8-1.8v-3.9h5.7V56zM45 56c0 1-.8 1.8-1.8 1.8H41c-1 0-1.8-.8-1.8-1.8v-3.9H45V56zm3.7-8.4H15.3c-.8 0-1.4-.7-1.4-1.4V31.7h36.2v14.4c0 .8-.6 1.5-1.4 1.5zm7.4-35.7h-1.5V8.8h1.5v3.1z" />
  </svg>
);
export default SvgBus;
