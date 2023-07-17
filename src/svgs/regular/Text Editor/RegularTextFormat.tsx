import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextFormat = ({
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
    <path d="M6.1 46h5.3c.9 0 1.9-.7 2.1-1.4l2.5-6.3h18.8l2.3 6.3c.2.9 1.2 1.4 2.1 1.4h5.7c1.8-.2 2.8-1.8 2.1-3.1L31.7 6.5c-.4-.9-1.1-1.3-2-1.3h-8c-.8 0-1.8.4-2 1.3L4.2 43.1c-.6 1.4.3 2.9 1.9 2.9zm19.4-29.6 5.4 14.3H20l5.5-14.3zM47.3 56.5H4c-1.2 0-2.3 1-2.3 2.3S2.8 61 4 61h43.3c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2zM60 3c-1.2 0-2.3 1-2.3 2.3V46c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V5.3C62.3 4 61.2 3 60 3z" />
  </svg>
);
export default SvgTextFormat;
