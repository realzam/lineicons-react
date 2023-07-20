import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitch = ({
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
    <path d="M6.5 1 2.4 11.7v43.5h14.8V63h8.3l7.9-7.9h12l16.2-16.2V1H6.5zM56 36.1l-9.3 9.3H32l-7.9 7.9v-7.9H11.6V6.5H56v29.6zm-9.2-18.9v16.2h-5.5V17.2h5.5zm-14.8 0v16.2h-5.5V17.2H32z" />
  </svg>
);
export default SvgTwitch;
