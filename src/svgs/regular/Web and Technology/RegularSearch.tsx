import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSearch = ({
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
    <path d="M60.1 49.5 49.8 39.2c-1.4-1.4-3.3-2.2-5.3-2.2-1.2 0-2.4.3-3.4.8l-5.2-5.2c5.9-7.5 5.4-18.4-1.5-25.4C27-.1 14.8-.1 7.4 7.4-.1 14.9-.1 27 7.4 34.5 11.1 38.1 16 40 20.9 40c4.2 0 8.4-1.4 11.8-4.1l5.2 5.2c-.5 1-.8 2.2-.8 3.4 0 2 .8 3.9 2.2 5.3l10.3 10.3c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.8-2.9 2.8-7.7-.1-10.6zM10.5 31.2c-5.7-5.7-5.7-15 0-20.7 2.9-2.9 6.6-4.3 10.3-4.3 3.7 0 7.5 1.4 10.4 4.3 5.7 5.7 5.7 15 0 20.7-5.7 5.7-15 5.7-20.7 0zm46.4 25.7c-1.1 1.1-3 1.2-4.2 0L42.4 46.6c-.6-.6-.9-1.3-.9-2.1s.3-1.5.9-2.1 1.3-.9 2.1-.9 1.5.3 2.1.9l10.3 10.3c1.1 1.2 1.1 3 0 4.2z" />
  </svg>
);
export default SvgSearch;
