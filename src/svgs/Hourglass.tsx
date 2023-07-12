import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHourglass = ({
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
    <path d="M57 56.7h-3.2c.1-.8.1-1.5.1-2.3 0-7.1-6.2-14.9-11.7-21.8-.1-.2-.3-.4-.4-.6.1-.2.3-.4.4-.6 5.5-6.9 11.7-14.7 11.7-21.8 0-.8 0-1.6-.1-2.3H57c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h3.2c-.1.8-.1 1.6-.1 2.3 0 7.1 6.2 14.9 11.7 21.8.1.2.3.4.4.6-.1.2-.3.4-.4.6-5.5 6.9-11.7 14.7-11.7 21.8 0 .8 0 1.6.1 2.3H7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h50c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zm-42.4-2.3c0-5.5 6-13 10.8-19 .5-.7 1.1-1.3 1.6-2 .6-.8.6-2 0-2.8-.5-.6-1-1.3-1.6-2-4.8-6-10.8-13.5-10.8-19 0-.8 0-1.6.1-2.3h34.6c.1.8.1 1.6.1 2.3 0 5.5-6 13-10.8 19-.5.7-1.1 1.3-1.6 2-.6.8-.6 2 0 2.8.5.6 1 1.3 1.6 2 4.8 6 10.8 13.5 10.8 19 0 .8 0 1.6-.1 2.3H14.7c-.1-.8-.1-1.5-.1-2.3z" />
  </svg>
);
export default SvgHourglass;
