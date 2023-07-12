import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBricks = ({
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
    <path d="M57 29.8h-3v-6.1c0-3.4-2.8-6.2-6.2-6.2H16.3c-3.4 0-6.2 2.8-6.2 6.2v6.1H7c-2.9 0-5.2 2.4-5.2 5.2v6.3c0 2.9 2.4 5.2 5.2 5.2h50c2.9 0 5.2-2.4 5.2-5.2V35c0-2.9-2.3-5.2-5.2-5.2zm-7.5-6.1v6.1H34.2V22h13.5c1-.1 1.8.7 1.8 1.7zm-9.6 10.5V42H24.1v-7.8h15.8zM14.5 23.7c0-1 .8-1.8 1.8-1.8h13.5v7.8H14.5v-6zM6.2 41.3V35c0-.4.3-.8.8-.8h12.6V42H7c-.4.1-.8-.3-.8-.7zm51.6 0c0 .4-.3.8-.8.8H44.4v-7.8H57c.4 0 .8.3.8.8v6.2z" />
  </svg>
);
export default SvgBricks;
