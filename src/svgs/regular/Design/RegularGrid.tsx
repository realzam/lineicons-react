import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGrid = ({
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
    <path d="M60 34.2c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2h-7V18.6h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7V7.3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v6.8H34.2V7.3c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v6.8H15.5V7.3c0-1.2-1-2.2-2.2-2.2S11 6.1 11 7.3v6.8H4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h7v11.1H4c-1.2 0-2.2 1-2.2 2.2C1.8 33 2.8 34 4 34h7v11.1H4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h7v6.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.8h14.3v6.8c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-6.8h14.3v6.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.8h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7V34.2H60zM48.5 18.6v11.1H34.2V18.6h14.3zm-33 0h14.3v11.1H15.5V18.6zm0 26.8V34.2h14.3v11.1H15.5zm33 0H34.2V34.2h14.3v11.2z" />
  </svg>
);
export default SvgGrid;
