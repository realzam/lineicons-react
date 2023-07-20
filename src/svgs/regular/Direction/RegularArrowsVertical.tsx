import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowsVertical = ({
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
    <path d="m40.8 48.2-6.5 6.4V9.3l6.5 6.4c.4.4 1 .6 1.6.6.6 0 1.2-.2 1.6-.7.9-.9.9-2.3 0-3.2l-10.4-10c-.9-.9-2.3-.9-3.2 0L20.1 12.6c-.9.9-.9 2.3 0 3.2s2.3.9 3.2 0l6.5-6.4v45.2l-6.5-6.4c-.9-.9-2.3-.9-3.2 0-.9.9-.9 2.3 0 3.2l10.3 10.2c.4.4 1 .6 1.6.6.6 0 1.1-.2 1.6-.6l10.3-10.2c.9-.9.9-2.3 0-3.2-.8-.8-2.3-.8-3.1 0z" />
  </svg>
);
export default SvgArrowsVertical;
