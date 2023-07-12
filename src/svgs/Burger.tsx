import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBurger = ({
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
    <path d="M56.8 23.1c-1-9.1-8.7-16.2-18-16.2H25.2c-4.9 0-9.4 1.9-12.8 5.3-3 3-4.8 6.8-5.2 11C4 24.8 1.8 28 1.8 31.7v.8c0 3.7 2.2 6.9 5.4 8.5.9 9.1 8.7 16.3 18 16.3h13.6c4.9 0 9.4-1.9 12.8-5.3 3-2.9 4.8-6.8 5.2-11 3.2-1.6 5.4-4.8 5.4-8.5v-.7c.1-3.9-2.2-7.2-5.4-8.7zm-41.2-7.8c2.6-2.6 6-4 9.6-4h13.6c6.5 0 12 4.6 13.3 10.8H11.9c.5-2.5 1.8-4.9 3.7-6.8zm32.8 33.4c-2.6 2.6-6 4-9.7 4H25.2c-6.5 0-12-4.6-13.3-10.8h40.2c-.5 2.6-1.8 4.9-3.7 6.8zm9.4-16.3c0 2.8-2.4 5-5.3 5h-41c-2.9 0-5.3-2.2-5.3-5v-.8c0-2.8 2.4-5 5.3-5h41.1c2.8 0 5.1 2.3 5.1 5.1v.7z" />
  </svg>
);
export default SvgBurger;
