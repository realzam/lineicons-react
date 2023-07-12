import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAmbulance = ({
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
    <path d="M57.1 9.8H25.9c-2.8 0-5.1 2.4-5.1 5.3v2.6h-3.4v-2c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v2H9.6c-1.4 0-2.7.9-3.2 2.3L1.9 32.3l-.4 1.1.8 1.1V45c0 2 1.6 3.6 3.6 3.6h.5c1 3.3 4 5.7 7.6 5.7 3.6 0 6.6-2.4 7.6-5.7h20.9c1 3.3 4 5.7 7.6 5.7 3.6 0 6.6-2.4 7.6-5.7h1.7c1.6 0 3-1.4 3-3V15.1c-.2-2.9-2.4-5.3-5.3-5.3zM10.4 22.2h10.4v8.7H7.2l3.2-8.7zM14 49.7c-1.9 0-3.4-1.6-3.4-3.5s1.5-3.5 3.4-3.5 3.4 1.6 3.4 3.5-1.5 3.5-3.4 3.5zm0-11.4c-3.2 0-6 2-7.2 4.8v-7.6h14v6.8c-1.4-2.5-3.9-4-6.8-4zm36.1 11.4c-1.9 0-3.4-1.6-3.4-3.5s1.5-3.5 3.4-3.5 3.4 1.6 3.4 3.5-1.6 3.5-3.4 3.5zm0-11.4c-3.6 0-6.7 2.5-7.6 5.8H25.3v-29c0-.5.3-.8.6-.8h31.3c.3 0 .6.4.6.9v28.9h-.1c-1-3.4-4-5.8-7.6-5.8z" />
    <path d="M46.8 25.6h-3v-3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v3h-3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h3v3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-3h3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2z" />
  </svg>
);
export default SvgAmbulance;
