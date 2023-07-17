import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpinner = ({
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
    <path d="M33.3 2c-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8S37.6 2 33.3 2zM33.3 52.5c-2.6 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8c2.6 0 4.8-2.1 4.8-4.8s-2.2-4.8-4.8-4.8zM57 30c-1.9 0-3.5 1.6-3.5 3.5S55.1 37 57 37s3.5-1.6 3.5-3.5c-.1-1.9-1.6-3.5-3.5-3.5zM15.4 33.5c0-3.3-2.7-5.9-5.9-5.9-3.3 0-5.9 2.7-5.9 5.9 0 3.3 2.7 5.9 5.9 5.9 3.3 0 5.9-2.6 5.9-5.9z" />
    <circle cx={50.1} cy={50.2} r={4.1} />
    <path d="M16.5 10.1c-1.7 0-3.4.7-4.6 1.9-2.5 2.5-2.5 6.7 0 9.2 1.3 1.3 2.9 1.9 4.6 1.9 1.7 0 3.3-.6 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zM50 19.6c.8 0 1.5-.3 2.1-.8.6-.6.9-1.3.8-2.1 0-.8-.3-1.4-.8-1.9-.6-.6-1.3-.9-2.1-.8-.8 0-1.4.3-1.9.8-.6.6-.9 1.3-.8 2.1 0 .8.3 1.4.8 1.9.4.5 1.1.8 1.9.8zM16.5 45c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3 5.3-2.4 5.3-5.3-2.4-5.3-5.3-5.3z" />
  </svg>
);
export default SvgSpinner;
