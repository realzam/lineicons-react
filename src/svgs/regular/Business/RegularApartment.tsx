import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgApartment = ({
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
    <path d="M56 1.8H33.5c-3.4 0-6.2 2.8-6.2 6.3V12H8c-3.4 0-6.3 2.8-6.3 6.3V56c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V8c0-3.4-2.9-6.2-6.3-6.2zm-28.8 56H8c-1 0-1.8-.8-1.8-1.8V18.2c0-1 .8-1.8 1.8-1.8h19.2v41.4zM57.8 56c0 1-.8 1.8-1.8 1.8H31.7V8c0-1 .8-1.8 1.7-1.8H56c1 0 1.8.8 1.8 1.8v48z" />
    <path d="M14 28.1h5.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H14c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM14 39.3h5.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H14c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM13.9 50.6h5.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.6c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3zM47.6 14.7H42c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3zM47.6 29.1H42c-1.2 0-2.3 1-2.3 2.3 0 1.2 1 2.3 2.3 2.3h5.6c1.2 0 2.3-1 2.3-2.3-.1-1.3-1.1-2.3-2.3-2.3zM47.5 43.5h-5.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgApartment;
