import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAndroidOriginal = ({
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
    <path d="M14.8 46.5c0 2.3 1.8 4.2 4.2 4.2h2.7v8.5c0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8v-8.5h5.1v8.5c0 2.1 1.7 3.8 3.8 3.8 2.1 0 3.8-1.7 3.8-3.8v-8.5h2.7c2.3 0 4.2-1.8 4.2-4.2V21.9H14.8v24.6zM40.5 6.8 43.1 2c.1-.3.1-.6-.1-.7-.2-.3-.3-.3-.3-.3-.1 0-.4.1-.4.3l-2.7 4.9c-2.3-1-4.8-1.5-7.3-1.5-2.7 0-5.1.6-7.3 1.5l-2.7-4.9c-.1-.3-.4-.4-.7-.1-.3.1-.4.4-.1.7l2.7 4.8c-5.6 2.8-9 7.9-9 13.8h34.2c-.2-6-3.9-11-8.9-13.7zm-16.4 7.5c-.7 0-1.4-.7-1.4-1.4s.7-1.4 1.4-1.4 1.4.7 1.4 1.4-.5 1.4-1.4 1.4zm15.8 0c-.7 0-1.4-.7-1.4-1.4s.7-1.4 1.4-1.4 1.4.7 1.4 1.4-.6 1.4-1.4 1.4zM9.6 21.2c-2.1 0-3.8 1.7-3.8 3.8v15.9c0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8V25c.1-2.2-1.7-3.8-3.8-3.8zM54.4 21.2c-2.1 0-3.8 1.7-3.8 3.8v15.9c0 2.1 1.7 3.8 3.8 3.8 2.1 0 3.8-1.7 3.8-3.8V25c0-2.2-1.7-3.8-3.8-3.8z" />
  </svg>
);
export default SvgAndroidOriginal;
