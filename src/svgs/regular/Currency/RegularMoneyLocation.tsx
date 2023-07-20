import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoneyLocation = ({
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
    <path d="M32 1.4C17.9 1.4 6.5 12.3 6.5 25.6c0 10.1 13.6 26 21.7 34.6 1 1.1 2.4 1.7 3.8 1.7 1.5 0 2.8-.6 3.8-1.7 8.1-8.6 21.7-24.5 21.7-34.6C57.5 12.3 46.1 1.4 32 1.4zm.5 55.7c-.2.2-.4.3-.5.3-.1 0-.4 0-.5-.3C21.6 46.6 11 32.8 11 25.6 11 14.8 20.4 6 32 6s21 8.8 21 19.6c0 7.2-10.6 21-20.5 31.5z" />
    <path d="M34.6 25h-5.1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h8.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-3.3V17c0-1.2-1-2.2-2.2-2.2-1.2 0-2.2 1-2.2 2.2v.5h-.3c-3.3 0-6 2.7-6 6s2.7 6 6 6h5.1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h3.3v.5c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-.5h.3c3.3 0 6-2.7 6-6s-2.7-5.9-6-5.9z" />
  </svg>
);
export default SvgMoneyLocation;
