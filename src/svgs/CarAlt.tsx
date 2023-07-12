import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCarAlt = ({
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
    <path d="M15.2 38.4h6.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM41.6 38.4H48c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3z" />
    <path d="M60 21.4h-2.9l-4.7-12c-.7-1.8-2.5-3.1-4.5-3.1H15.7c-2 0-3.7 1.2-4.5 3l-4.7 12H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.8v16.6c0 2.6 2 4.8 4.5 5.2v3.9c0 3.4 2.8 6.3 6.3 6.3h2c3.4 0 6.3-2.8 6.3-6.3v-3.8h15.5v3.8c0 3.4 2.8 6.3 6.3 6.3h2c3.4 0 6.3-2.8 6.3-6.3v-3.8c2.8-.1 5-2.4 5-5.2V25.8h1c1.2 0 2.3-1 2.3-2.3s-1.1-2.1-2.3-2.1zM15.4 11c0-.1.1-.2.3-.2h32.2c.1 0 .2.1.3.1v.1l5.1 12.8h-43L15.4 11zm3.9 40.4c0 1-.8 1.8-1.8 1.8h-2c-1 0-1.8-.8-1.8-1.8v-3.8h5.5v3.8zm30.1 0c0 1-.8 1.8-1.8 1.8h-2c-1 0-1.8-.8-1.8-1.8v-3.8h5.5v3.8zm5-9c0 .4-.3.8-.8.8H10c-.4 0-.8-.3-.8-.8v-14h45.1v14z" />
  </svg>
);
export default SvgCarAlt;
