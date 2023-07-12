import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCoffeeCup = ({
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
    <path d="M54.2 25.7c-1.3 0-2.6.3-3.7.9-.2-3.2-2.9-5.7-6.1-5.7H9.3c-3.4 0-6.1 2.7-6.1 6.1v9.5c0 9.2 5.9 17 14.1 19.9H4c-1.2 0-2.3 1-2.3 2.3S2.7 61 4 61h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H36.4c5.9-2.1 10.5-6.7 12.7-12.4 1.4 1.1 3.2 1.8 5.1 1.8 2.2 0 4.4-.9 5.9-2.5 1.5-1.5 2.2-3.5 2.1-5.5v-4.1c0-4.4-3.5-8-8-8zM46 36.5c0 9.2-7.5 16.7-16.7 16.7h-4.9c-9.2 0-16.7-7.5-16.7-16.7V27c0-.9.7-1.6 1.6-1.6h35.1c.9 0 1.6.7 1.6 1.6v9.5zm10.9 3.8c-.7.7-1.6 1.1-2.6 1.1-1.9 0-3.5-1.6-3.5-3.5v-4.1c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5V38c0 .8-.3 1.6-.9 2.3zM13.8 16.5c1.2 0 2.3-1 2.3-2.3V5.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.9c0 1.3 1.1 2.3 2.3 2.3zM26.9 16.5c1.2 0 2.3-1 2.3-2.3V5.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.9c0 1.3 1 2.3 2.3 2.3zM40 16.5c1.2 0 2.3-1 2.3-2.3V5.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.9c0 1.3 1 2.3 2.3 2.3z" />
  </svg>
);
export default SvgCoffeeCup;
