import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBook = ({
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
    <path d="M39.6 50.1H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h15.3c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3zM24.1 34.3h15.8c2.3 0 4.3-1.9 4.3-4.3v-5.9c0-2.3-1.9-4.3-4.3-4.3H24.1c-2.3 0-4.3 1.9-4.3 4.3V30c.1 2.3 2 4.3 4.3 4.3zm.3-9.9h15.3v5.4H24.4v-5.4z" />
    <path d="M17 6.3h35.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H17c-4 0-7.2 3.1-7.5 7V56c0 3.4 2.9 6.1 6.5 6.1h32.9c2.8 0 5.1-2.3 5.1-5.1V17c0-2.8-2.3-5.1-5.1-5.1H16.7c-1.7 0-2.7-1-2.7-2.6-.1-1.7 1.3-3 3-3zm-.4 10.1s.1 0 0 0c.1 0 .1 0 0 0h32.2c.3 0 .6.3.6.6v40.2c0 .3-.3.6-.6.6H15.9c-1.1 0-2-.7-2-1.6V16c.8.3 1.7.4 2.7.4z" />
  </svg>
);
export default SvgBook;
