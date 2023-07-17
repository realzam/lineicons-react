import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgZip = ({
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
    <path d="M56.3 11.6h-3.4V9.4c0-4.2-3.4-7.6-7.6-7.6H10.8c-4.2 0-7.6 3.4-7.6 7.6v30.7c0 1.4.6 2.7 1.6 3.6L23 60.9c.9.9 2.1 1.3 3.4 1.3h18.8c4.2 0 7.6-3.4 7.6-7.6V34.5h3.4c1.4 0 2.5-1.1 2.5-2.5V14.2c.1-1.4-1-2.6-2.4-2.6zm-46 31.2H23c.2 0 .4.2.4.4v11.9L10.3 42.8zm38.1 11.8c0 1.7-1.4 3.1-3.1 3.1H28V43.2c0-2.7-2.2-4.9-4.9-4.9H7.6V9.4c0-1.7 1.4-3.1 3.1-3.1h34.5c1.7 0 3.1 1.4 3.1 3.1v2.3H18.1c-1.4 0-2.5 1.1-2.5 2.5V32c0 1.4 1.1 2.5 2.5 2.5h30.3v20.1zm-10-35.3v7.6c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-7.6c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5zm-7.6 7.6c0 1.4-1.1 2.5-2.5 2.5H24c-.9 0-1.8-.5-2.2-1.3-.4-.8-.4-1.8.1-2.6l2.3-3.8h-.9c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h5.5c.9 0 1.8.5 2.2 1.3.4.8.4 1.8-.1 2.6l-2.3 3.8c1.2.1 2.2 1.2 2.2 2.5zm17.8 0h-2.5c0 1.4-1.1 2.5-2.5 2.5S41 28.3 41 26.9v-7.6c0-1.4 1.1-2.5 2.5-2.5h5.1c2.8 0 5.1 2.3 5.1 5.1 0 2.7-2.3 5-5.1 5z" />
  </svg>
);
export default SvgZip;
