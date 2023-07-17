import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBridge = ({
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
    <path d="M61 29.1h-6.7c-3-9.2-11.8-15.9-22.3-15.9S12.7 19.9 9.7 29.1H3c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h5.7v13c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V35.9c0-.8.1-1.5.2-2.3h37.3c.1.8.2 1.5.2 2.3v10.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-13H61c1.2 0 2.3-1 2.3-2.3 0-1.2-1.1-2.2-2.3-2.2zm-31.2 0h-6v-9.5c1.9-.9 3.9-1.5 6-1.7v11.2zm4.5-11.2c2.1.2 4.2.9 6 1.7v9.5h-6V17.9zm-15.1 4.7v6.5h-4.7c1.1-2.5 2.7-4.7 4.7-6.5zm25.6 6.5v-6.5c2 1.8 3.6 4 4.7 6.5h-4.7z" />
  </svg>
);
export default SvgBridge;
