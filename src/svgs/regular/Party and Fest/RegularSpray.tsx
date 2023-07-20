import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpray = ({
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
    <path d="M22.8 21.4h-.4V19h.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.7v2.4h-.4c-7 0-12.7 5.7-12.7 12.7v24.3c0 2.1 1.7 3.8 3.8 3.8h23.1c2.1 0 3.8-1.7 3.8-3.8V34.2c.1-7.1-5.6-12.8-12.6-12.8zm-5.3 4.5h5.3c4.5 0 8.1 3.6 8.2 8H9.3c0-4.4 3.7-8 8.2-8zM9.2 57.8V38.5H31v19.3H9.2zM48.8 19c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.2C51 20 50 19 48.8 19zM48.8 8.6c-1.2 0-2.3 1-2.3 2.3v.1c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.2C51 9.6 50 8.6 48.8 8.6zM57 25.5c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.2c0-1.3-1.1-2.3-2.3-2.3zM40 13.8c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V16c0-1.2-1-2.2-2.3-2.2zM57 13.8c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V16c0-1.2-1.1-2.2-2.3-2.2zM57 1.8c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V4c0-1.2-1.1-2.2-2.3-2.2z" />
  </svg>
);
export default SvgSpray;
