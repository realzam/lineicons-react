import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGrammarly = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      fillRule="evenodd"
      d="M32 63c17.12 0 31-13.88 31-31C63 14.88 49.12 1 32 1 14.88 1 1 14.88 1 32c0 17.12 13.88 31 31 31Zm6.61-22.732c-1.04 0-2.002-.686-2.186-1.687a2.04 2.04 0 0 1 .452-1.71 2.11 2.11 0 0 1 .73-.553c.281-.13.588-.197.9-.196H50v11.804a2.05 2.05 0 0 1-.203.883c-.133.276-.326.52-.566.714a2.132 2.132 0 0 1-1.742.441c-1.023-.18-1.724-1.123-1.724-2.139v-1.97l.4-2.183a18.171 18.171 0 0 1-6.222 4.557 18.472 18.472 0 0 1-7.589 1.595c-10.496 0-18.932-8.5-18.323-18.914.526-8.947 7.92-16.265 17.055-16.866a18.635 18.635 0 0 1 9.515 1.869 18.242 18.242 0 0 1 7.215 6.373c.266.447.348.978.231 1.483a2.044 2.044 0 0 1-.862 1.239c-.962.652-2.285.308-2.95-.633-2.511-3.453-6.888-6.313-11.881-6.313-9.58 0-16.93 9.405-13.07 19.258 1.703 4.34 5.733 7.45 10.426 8.17 5.764.885 11.034-1.12 14.07-5.48l-1.897.258h-3.272Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGrammarly;
