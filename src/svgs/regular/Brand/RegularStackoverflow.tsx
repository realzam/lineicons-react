import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgStackoverflow = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M50.2 57.5H11.5V40.9H5.8V63h49.8V40.9h-5.4v16.6ZM41.732.98l-4.417 3.277 16.444 22.166 4.417-3.277L41.732.98ZM31.56 9.876l-3.517 4.23 21.221 17.647 3.517-4.23L31.559 9.877Z" />
    <path d="M44.6 46.4H17v5.5h27.6v-5.5ZM48.4 33.1 23.5 21.3l-2.4 5.1 25 11.7 2.3-5ZM45.7 39.6l-27-5.8-1.3 5.5L44.6 45l1.1-5.4Z" />
  </svg>
);
export default SvgStackoverflow;
