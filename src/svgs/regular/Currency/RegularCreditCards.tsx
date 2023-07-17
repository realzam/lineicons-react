import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCreditCards = ({
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
    <path d="M59.2 18.1v-5.7c0-1.8-.8-3.4-2.2-4.5-1.4-1.1-3.2-1.5-4.9-1.1L8.6 17.2H8c-3.4 0-6.2 2.8-6.2 6.2V51c0 3.4 2.8 6.2 6.2 6.2h48c3.4 0 6.2-2.8 6.2-6.2V23.5c0-2.3-1.2-4.3-3-5.4zm-6.1-6.9c.5-.1.9.1 1.1.3s.5.5.5 1v4.8H27.9l25.2-6.1zM8 21.7h48c1 0 1.8.8 1.8 1.8v3.9H6.2v-3.9c0-1 .8-1.8 1.8-1.8zm49.8 10.2v4.5H6.2v-4.5h51.6zm-1.8 21H8c-1 0-1.8-.8-1.8-1.8V40.9h51.5v10.2c.1 1-.7 1.8-1.7 1.8z" />
  </svg>
);
export default SvgCreditCards;
