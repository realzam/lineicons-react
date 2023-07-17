import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJcb = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 65"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      d="M10.6 8.7C5.4 8.7 1 12.9 1 18.2v38.2h52.4c5.4 0 9.6-4.4 9.6-9.6V8.7H10.6Zm10.8 37.6c0 3.9-3.1 6.9-6.9 6.9H4.4V38.5s3.1.8 7 .8c6.6 0 8.6-2.5 8.6-5.6v-8h-5.9v8.2c0 2-1.3 3.4-3.7 3.4-2 0-3.9-.6-5.9-1.5v-17c0-3.9 3.1-6.9 6.9-6.9h10v34.4Zm19.1 0c0 3.9-3.1 6.9-6.9 6.9h-10V37.4c1.7 1.4 4.8 2.4 9.7 2.3 2.7-.1 5.4-.8 5.4-.8v-3c-1.4.7-3.1 1.4-5.2 1.5-3.7.3-5.9-1.5-5.9-4.8 0-3.2 2.3-5.1 5.9-4.8 2.1.1 3.9.7 5.2 1.6v-3s-2.8-.7-5.4-.8c-4.8-.1-7.9.7-9.7 2.3v-9c0-3.9 3.1-6.9 6.9-6.9h10v34.3Zm19 0c0 3.9-3.1 6.9-6.9 6.9H42.4v-14h10.7c2.5 0 4.4-1.4 4.4-3.5 0-2-1.7-3.2-3.9-3.2v-.1c2-.3 3.1-1.5 3.1-3.1 0-2-1.7-3.1-3.9-3.2H42.5v-7.2c0-3.9 3.1-6.9 6.9-6.9h10.1v34.3ZM49.9 33h.4c.7.1 1.4 1.1 1.4 2 0 1-.7 1.7-1.4 1.7H46V33h3.9ZM46 31.4V28h3.9c.7.1 1.4.7 1.4 1.7 0 .8-.7 1.6-1.4 1.7H46Z"
    />
  </svg>
);
export default SvgJcb;
