import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCart = ({
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
    <path d="M37.1 47.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2 7.2-3.2 7.2-7.2c0-3.9-3.3-7.2-7.2-7.2zm0 10c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.4-1.3 2.7-2.7 2.7zM18.1 47.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2 7.2-3.2 7.2-7.2c0-3.9-3.3-7.2-7.2-7.2zm0 10c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.4-1.2 2.7-2.7 2.7zM58.2 1.8h-5.4c-2.4 0-4.5 1.8-4.8 4.2l-1.6 11.5H6.9c-1 0-2 .5-2.7 1.3-.6.8-.9 1.9-.6 2.9v.2l6.2 18.7C10.2 42 11.5 43 13 43h27.6c3.7 0 6.9-2.8 7.4-6.5l4.2-29.9c0-.2.2-.3.4-.3H58c1.2 0 2.3-1 2.3-2.3s-.9-2.2-2.1-2.2zm-14.5 34c-.2 1.5-1.5 2.6-3 2.6H13.9L8.5 22h37.2l-2 13.8z" />
  </svg>
);
export default SvgCart;
