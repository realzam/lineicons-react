import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChrome = ({
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
    <path d="M61.4 39c3.2-13.5-3.2-27.9-16.2-34.2-3.1-1.5-6.4-2.4-9.7-2.8h-.3C22.9.6 10.5 7 4.8 18.8-.3 29.2 1.2 41.1 7.6 49.9c.1.1.1.2.2.3 2.8 3.7 6.5 6.9 11 9.1 4.2 2.1 8.7 3 13.2 3 11.2 0 22-6.3 27.3-17 1-2 1.7-4 2.2-6.1-.1-.1-.1-.2-.1-.2zm-3.8-4.1L38.8 22.6l-.9-.6h-.1c-.1-.1-.2-.1-.2-.1-.2-.1-.3-.2-.5-.3-2.3-1.1-4.9-1.4-7.4-.9l6.8-14c2.3.4 4.6 1.1 6.8 2.2 10 4.8 15.5 15.4 14.3 26zm-19.2.2c-1.7 3.5-6 5-9.5 3.3-3.5-1.7-5-6-3.3-9.5 1.2-2.5 3.8-4 6.4-4 1 0 2.1.2 3.1.7.1.1.2.1.4.2l.9.6c2.5 2 3.5 5.6 2 8.7zM8.8 20.8c3-6.2 8.2-10.8 14.7-13.1 2.6-.9 5.3-1.4 8.1-1.4L21.6 27c-2.5 5.2-.8 11.3 3.7 14.5L10.4 46c-4.7-7.3-5.6-16.8-1.6-25.2zm12 34.4c-2.8-1.4-5.3-3.2-7.3-5.3L35.7 43c.2 0 .3-.1.4-.2 2.6-1 4.9-3 6.3-5.7.9-1.9 1.3-4 1.1-6l13.1 8.5c-.4 1.2-.9 2.4-1.4 3.6C49 56 33.5 61.4 20.8 55.2z" />
  </svg>
);
export default SvgChrome;
