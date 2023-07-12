import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCrop = ({
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
    <path d="M57.7 50.4h-5.1V12.2l4.4-5c.8-.9.7-2.4-.2-3.2s-2.4-.7-3.2.2l-4.3 4.9H15.9V4c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v5.1H6.3C5 9.1 4 10.1 4 11.4s1 2.2 2.2 2.2h5.1v36.8h-5c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.1V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-5.1H48V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-5.1h5.1c1.2 0 2.2-1 2.2-2.2s-.7-2.3-2-2.3zM15.9 13.6h29.4L15.9 46.7V13.6zm2.8 36.8 29.4-33.1v33.1H18.7z" />
  </svg>
);
export default SvgCrop;
