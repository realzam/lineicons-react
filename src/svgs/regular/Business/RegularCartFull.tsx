import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCartFull = ({
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
    <path d="M37.1 47.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2 7.2-3.2 7.2-7.2c0-3.9-3.3-7.2-7.2-7.2zm0 10c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.4-1.3 2.7-2.7 2.7zM18.1 47.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2 7.2-3.2 7.2-7.2c0-3.9-3.3-7.2-7.2-7.2zm0 10c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.4-1.2 2.7-2.7 2.7zM58.2 1.8h-5.4c-2.4 0-4.5 1.8-4.8 4.2l-1.6 11.5h-4.2v-7.3C42.1 8.4 40.7 7 39 7h-7.4c-.3-1.5-1.6-2.6-3.1-2.6h-8.7c-1.7 0-3.2 1.5-3.2 3.4v1.9H9.3c-1.7 0-3.2 1.4-3.2 3v4.9c-.8.2-1.4.6-1.9 1.2-.6.8-.9 1.9-.6 2.9v.2l6.2 18.7C10.2 42 11.5 43 13 43h27.6c3.7 0 6.9-2.8 7.4-6.5l4.2-29.9c0-.2.2-.3.4-.3H58c1.2 0 2.3-1 2.3-2.3s-.9-2.2-2.1-2.2zM37.6 17.5h-6v-6h6v6zM21.2 8.9h6v8.6h-6V8.9zm-10.5 5.2h6v3.4h-6v-3.4zm33 21.7c-.2 1.5-1.5 2.6-3 2.6H13.9L8.5 22h37.2l-2 13.8z" />
  </svg>
);
export default SvgCartFull;
