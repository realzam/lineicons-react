import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHelmet = ({
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
    <path d="M57.4 38.1C57.4 23.6 46 11.9 32 11.9 18 11.9 6.6 23.6 6.6 38v.1c-2.7.2-4.9 2.4-4.9 5.2v3.5c0 2.9 2.4 5.2 5.2 5.2h50c2.9 0 5.2-2.4 5.2-5.2v-3.5c.1-2.7-2-5-4.7-5.2zM20.5 19.9v3.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.1c1.5-.6 3.1-.9 4.7-1.1v9.6c0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2v-9.6c1.6.2 3.2.6 4.7 1.1v6.1c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-3.8c5.7 3.9 9.4 10.5 9.4 18.1v.1H11.1V38c0-7.5 3.8-14.2 9.4-18.1zm37.3 27c0 .4-.3.8-.8.8H7c-.4 0-.8-.3-.8-.8v-3.5c0-.4.3-.8.8-.8h50c.4 0 .8.3.8.8v3.5z" />
  </svg>
);
export default SvgHelmet;
