import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVmware = ({
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
      d="M34.79 26.151c1.61.503 2.664 1.581 3.161 3.235v9.244h7.154v-.01h1.101v-.019h.103V22.918c-.821-2.729-2.56-4.51-5.214-5.343H9.073c-2.655.83-4.393 2.61-5.214 5.343v32.97c.821 2.728 2.597 4.455 5.326 5.18h31.798c2.73-.725 4.505-2.452 5.326-5.18v-8.596H37.95v2.07c-.497 1.654-1.573 2.7-3.227 3.139h-19.27c-1.655-.439-2.73-1.485-3.228-3.139V29.385c.498-1.653 1.552-2.731 3.162-3.234H34.79Z"
    />
    <path
      fill="#000"
      d="M61.86 8.275c-.821-2.729-2.56-4.51-5.215-5.343h-32.02c-2.656.833-4.394 2.614-5.215 5.343v8.385h8.357v-1.917c.498-1.654 1.552-2.732 3.163-3.234h19.4c1.611.502 2.665 1.58 3.163 3.234v19.976c-.498 1.654-1.574 2.7-3.228 3.139h-19.27c-1.654-.439-2.73-1.485-3.228-3.139v-9.482H19.41v16.008c.82 2.728 2.596 4.455 5.326 5.18h31.797c2.73-.725 4.506-2.452 5.326-5.18V8.275Z"
    />
  </svg>
);
export default SvgVmware;
