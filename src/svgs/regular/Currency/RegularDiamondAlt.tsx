import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDiamondAlt = ({
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
    <path d="M61.9 24.2 53.2 4.3c-.4-1-1.2-1.7-2.1-2.1-.2-.1-.3-.2-.5-.3-.3-.1-.6-.1-1-.1H14.7c-1.6 0-3.1 1-3.8 2.5L2.1 24.2c-.6 1.4-.4 3 .5 4.2l26.1 32.2c.7.9 1.7 1.5 2.8 1.6.2 0 .3.1.5.1 1.3 0 2.5-.6 3.3-1.6l26.1-32.1.1-.1c.8-1.3 1-2.9.4-4.3zm-4.7.5H45.3l5.1-15.4 6.8 15.4zm-15.4-3.8L35 6.2h11.7l-4.9 14.7zM32 10.5l6.6 14.2H25.4L32 10.5zM22 21.2l-5.6-15H29l-7 15zm17.2 8L32 52.4l-7.1-23.2h14.3zM27 51.4 9 29.2h11.2L27 51.4zm16.9-22.2H55L37 51.3l6.9-22.1zM13.1 10.3l5.5 14.3H6.8l6.3-14.3z" />
  </svg>
);
export default SvgDiamondAlt;
