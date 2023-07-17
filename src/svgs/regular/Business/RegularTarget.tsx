import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTarget = ({
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
    <path d="M60 29.8h-5.9c-1-10.8-9.4-19.5-19.9-20.6V4c0-1.2-1-2.3-2.3-2.3-1.2 0-2.3 1-2.3 2.3v5.2c-10.5 1.1-18.9 9.7-19.9 20.6H4c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h5.9c1 10.8 9.4 19.5 19.9 20.6v5c0 1.2 1 2.3 2.3 2.3 1.2 0 2.3-1 2.3-2.3v-5.2c10.5-1.1 18.9-9.7 19.9-20.6H60c1.2 0 2.3-1 2.3-2.3 0-1.1-1.1-2.1-2.3-2.1zm-10.4 0h-6.2c-.9-4.8-4.5-8.6-9.2-9.5v-6.5c8.1 1 14.4 7.6 15.4 16zM32 39.5c-4 0-7.2-3.4-7.2-7.5s3.2-7.4 7.1-7.5c3.9 0 7.1 3.4 7.1 7.5.1 4.1-3.1 7.4-7 7.5zm-2.2-25.8v6.5c-4.6.9-8.3 4.7-9.2 9.5h-6.2c1-8.3 7.3-14.9 15.4-16zM14.4 34.3h6.2c.9 4.8 4.5 8.6 9.2 9.5v6.5c-8.1-1.1-14.4-7.7-15.4-16zm19.9 16v-6.5c4.6-.9 8.3-4.7 9.2-9.5h6.2c-1.1 8.3-7.4 14.9-15.4 16z" />
  </svg>
);
export default SvgTarget;
