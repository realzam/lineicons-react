import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLeaf = ({
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
    <path d="m61.6 58.2-13-12.9c3-3.7 4.5-8.1 4.5-12.9 0-7.1-3.5-14.5-9.9-20.8C26.6-5 6 4.9 5.8 5l-.6.3-.4.7c-.1.2-10 20.7 6.7 37.2 6.5 6.5 14.1 9.8 21 9.8 4.7 0 9.1-1.5 12.9-4.6l13 12.9c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.9-.8.9-2.2 0-3.1zM14.6 40C1.8 27.2 7.1 12.1 8.5 8.7 12 7.2 27.2 2 40.1 14.8c5.5 5.5 8.5 11.7 8.5 17.7 0 3.6-1.1 6.9-3.3 9.7L38 34.9V22.2c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.2l-8.2-8.2c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l5.8 5.8h-8.2c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h12.7l9.7 9.6C34.7 51 23.7 49 14.6 40z" />
  </svg>
);
export default SvgLeaf;
