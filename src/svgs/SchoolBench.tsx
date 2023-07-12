import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSchoolBench = ({
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
    <path d="m32.8 26.1-28-10.2c-1.2-.4-2.5.2-2.9 1.3-.4 1.2.2 2.5 1.3 2.9l3.6 1.3V46c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V23.1l13.3 4.8V46c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V29.5l2.1.8c.3.1.5.1.8.1.9 0 1.8-.6 2.1-1.5.2-1.1-.4-2.4-1.5-2.8zM60 15.8c-1.2 0-2.3 1-2.3 2.3v15.6H47.4c-2.7 0-5 2.2-5 5V46c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-7.5c0-.3.2-.5.5-.5h10.3v8c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V18c-.1-1.2-1.2-2.2-2.4-2.2z" />
  </svg>
);
export default SvgSchoolBench;
