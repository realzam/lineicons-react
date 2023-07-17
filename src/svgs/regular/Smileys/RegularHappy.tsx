import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHappy = ({
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
    <path d="M46.3 35.3H17.7c-.7 0-1.4.3-1.8.9-.4.6-.6 1.3-.4 2 2.1 7.4 8.9 12.6 16.5 12.6 7.8 0 14.4-5 16.5-12.6.2-.7.1-1.4-.4-2-.4-.6-1.1-.9-1.8-.9zM32 46.2c-4.6 0-8.7-2.5-11-6.4h22c-2.2 3.9-6.3 6.4-11 6.4z" />
    <path d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3 31.3-14 31.3-31.3S49.2.8 32 .8zm0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8-12 26.7-26.8 26.7z" />
    <circle cx={20} cy={22.8} r={4} />
    <circle cx={44} cy={22.8} r={4} />
  </svg>
);
export default SvgHappy;
