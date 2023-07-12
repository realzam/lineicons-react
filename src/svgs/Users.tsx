import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUsers = ({
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
    <path d="M21.8 36.8c6.9 0 12.4-5.6 12.4-12.4S28.6 12 21.8 12 9.4 17.5 9.4 24.4 15 36.8 21.8 36.8zm0-20.4c4.4 0 7.9 3.6 7.9 7.9s-3.6 7.9-7.9 7.9c-4.4 0-7.9-3.6-7.9-7.9s3.5-7.9 7.9-7.9zM21.8 39.9c-7.2 0-14.1 2.9-19.4 8.3-.9.9-.9 2.3 0 3.2.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7 4.4-4.5 10.2-7 16.2-7 5.9 0 11.7 2.5 16.2 7 .9.9 2.3.9 3.2 0 .9-.9.9-2.3 0-3.2-5.3-5.3-12.2-8.3-19.4-8.3zM47.3 36.8c4 0 7.3-3.3 7.3-7.3s-3.3-7.3-7.3-7.3-7.3 3.3-7.3 7.3c-.1 4 3.2 7.3 7.3 7.3zm0-10.2c1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8c-.1-1.5 1.2-2.8 2.8-2.8zM61.5 45.6c-5.3-4.9-12.6-6.9-19.9-5-1.2.3-1.9 1.5-1.6 2.7.3 1.2 1.6 1.9 2.7 1.6 5.8-1.5 11.6 0 15.7 3.9.4.4 1 .6 1.5.6.6 0 1.2-.2 1.6-.7 1-.8.9-2.2 0-3.1z" />
  </svg>
);
export default SvgUsers;
