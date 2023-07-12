import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAndroid = ({
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
    <path d="M26.9 12.3c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6zM36.5 12.3c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6z" />
    <path d="M53.1 18.4c-.7 0-1.4.1-2 .3-1.2-3.6-3.3-6.7-6-9.1l4-4.1c.9-.9.8-2.3 0-3.2-.9-.9-2.3-.9-3.2 0l-4.5 4.6c-2.8-1.5-6-2.3-9.3-2.3-3.3 0-6.5.8-9.3 2.3l-4.5-4.6c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l3.9 4c-2.6 2.3-4.7 5.3-5.9 8.8-.7-.2-1.4-.4-2.1-.4-3.5 0-6.4 2.9-6.4 6.4V35c0 3.5 2.9 6.4 6.4 6.4.7 0 1.3-.1 1.9-.3V47c0 1.5 1.1 2.6 2.6 2.6h1.1v6.2c0 3.5 2.9 6.4 6.4 6.4 3.5 0 6.4-2.9 6.4-6.4v-6.2H34v6.2c0 3.5 2.9 6.4 6.4 6.4s6.4-2.9 6.4-6.4v-6.2h1.7c1.5 0 2.6-1.2 2.6-2.6v-5.5c.6.2 1.2.3 1.9.3 3.5 0 6.4-2.9 6.4-6.4V24.8c.1-3.5-2.8-6.4-6.3-6.4zM32 9.3c5.7 0 10.8 3.1 13.5 7.8h-27c2.7-4.8 7.8-7.8 13.5-7.8zM10.9 36.9c-1 0-1.9-.8-1.9-1.9V24.4c0-1.1.9-1.9 1.9-1.9s1.9.9 1.9 1.9V35c.1 1.1-.8 1.9-1.9 1.9zm14 18.9c0 1.1-.9 1.9-1.9 1.9s-1.9-.9-1.9-1.9v-6.2h3.8v6.2zm17.4 0c0 1.1-.9 1.9-1.9 1.9s-1.9-.9-1.9-1.9v-6.2h3.8v6.2zM17.4 45.2V21.6h29.3v23.5H17.4zM55 35.4c0 1.1-.9 1.9-1.9 1.9s-1.9-.9-1.9-1.9V24.8c0-1.1.9-1.9 1.9-1.9s1.9.9 1.9 1.9v10.6z" />
  </svg>
);
export default SvgAndroid;