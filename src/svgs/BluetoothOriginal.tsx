import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBluetoothOriginal = ({
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
    <path d="m36.4 32.4 11.3-12.5L30 1v24.9L19.5 15.5l-3.8 3.9 13.1 13.1-13.1 13.2 3.8 3.8L30 39l.3 24 18-18-11.9-12.6zm5-12.4-6.1 6.1V14l6.1 6zm-6.2 18.9 6.1 6.1-6.1 6V38.9z" />
  </svg>
);
export default SvgBluetoothOriginal;
