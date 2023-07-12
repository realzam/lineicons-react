import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTesla = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 65 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      fillRule="evenodd"
      d="M62.594 10.416C52.088 5.837 41.825 4.382 32.86 4.45c-8.967-.068-19.232 1.387-29.736 5.966C1.872 8.148 1.36 6.772 1.36 6.772 12.842 2.23 23.597.673 32.86.634c9.26.04 20.016 1.594 31.5 6.138 0 0-.36 1.117-1.765 3.644Zm-20.918 3.381-8.813 49.569-8.885-49.576c-8.344.006-10.99.927-11.376 4.688 0 0-5.638-2.102-8.477-6.37C15.215 6.97 26.36 6.738 26.36 6.738l6.496 7.912 6.495-7.91s11.145.231 22.237 5.37c-2.843 4.268-8.478 6.37-8.478 6.37-.383-3.76-3.033-4.682-11.434-4.682Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTesla;
