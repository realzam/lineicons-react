import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBluetooth = ({
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
    <path d="m48.8 42-15-10 15-10c1.6-1.1 2.6-2.9 2.6-4.8s-1-3.7-2.6-4.8L34 2.4c-1.2-.8-2.7-.9-4-.2-1.3.7-2.1 2-2.1 3.5v22.2l-11.9-8c-1-.7-2.4-.4-3.1.6-.7 1-.4 2.4.6 3.1L25.9 32l-12.2 8.2c-1 .7-1.3 2.1-.6 3.1.4.6 1.1 1 1.9 1 .4 0 .9-.1 1.2-.4L27.9 36v22.3c0 1.5.8 2.8 2.1 3.5.6.3 1.2.5 1.8.5.7 0 1.5-.2 2.1-.7l14.9-9.9c1.6-1.1 2.6-2.9 2.6-4.8 0-2-.9-3.8-2.6-4.9zM32.4 6.8l13.9 9.3c.5.3.6.9.6 1.1 0 .2-.1.7-.6 1.1l-13.9 9.3V6.8zm13.9 41.1-13.9 9.3V36.5l13.9 9.3c.5.3.6.9.6 1.1 0 .2 0 .7-.6 1z" />
  </svg>
);
export default SvgBluetooth;
