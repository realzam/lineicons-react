import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSprout = ({
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
    <path d="M62 12.8c.1-.7-.2-1.4-.6-1.8-.5-.5-1.2-.7-1.8-.6-.6.1-14.4 1.7-21.1 8.4-2.3 2.2-4 5.2-5.2 8.2-1-4.8-3.2-12.4-7.7-16.9C18.9 3.5 5.1 1.8 4.5 1.8c-.7-.1-1.3.1-1.8.6S2 3.6 2 4.3c.1.6 1.7 14.4 8.4 21.1 5.3 5.3 14.9 7.4 19.1 8.1V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V42.1c3.9-.6 14.1-2.7 19.6-8.2 6.6-6.7 8.2-20.5 8.3-21.1zm-48.4 9.3C9.7 18.2 7.8 10.8 7 6.7c4.1.8 11.5 2.7 15.4 6.6 3.9 3.9 5.8 11.3 6.6 15.4-4.1-.7-11.5-2.6-15.4-6.6zM35 37.4c.8-4.1 2.7-11.5 6.6-15.4s11.3-5.8 15.4-6.6c-.8 4.1-2.7 11.5-6.6 15.4S39.1 36.6 35 37.4z" />
  </svg>
);
export default SvgSprout;
