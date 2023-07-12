import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFullScreen = ({
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
    <path d="M60 21.5c1.2 0 2.3-1 2.3-2.3V5c0-1.8-1.4-3.2-3.2-3.2H44.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h9.8L32 28.8 9.4 6.3h9.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H5C3.2 1.8 1.8 3.2 1.8 5v14.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V9.4L28.8 32 6.3 54.6v-9.8c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3V59c0 1.8 1.4 3.2 3.2 3.2h14.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H9.4L32 35.2l22.6 22.6h-9.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H59c1.8 0 3.2-1.4 3.2-3.2V44.7c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v9.8L35.2 32 57.8 9.4v9.8c0 1.3 1 2.3 2.2 2.3z" />
  </svg>
);
export default SvgFullScreen;
