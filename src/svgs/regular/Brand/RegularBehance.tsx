import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBehance = ({
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
    <path d="M29.2 25.5c.8-3.4 0-6.9-2.2-9.6-2.2-2.7-5.4-4.2-8.8-4.2H7.7c-3.3 0-5.9 2.7-5.9 5.9v28.6c0 3.3 2.7 5.9 5.9 5.9h10.2c5.9 0 10.9-4.3 11.5-9.9.4-3.2-.6-6.4-2.7-8.8-.6-.6-1.2-1.2-1.8-1.7 2.1-1.5 3.8-3.7 4.3-6.2zm-10.9 8.7c2 0 3.8.8 5.1 2.3 1.3 1.4 1.9 3.3 1.6 5.3-.4 3.3-3.5 5.9-7.1 5.9H7.7c-.8 0-1.4-.6-1.4-1.4v-12h12zm6.5-9.7c-.6 2.7-3.9 5.2-6.9 5.2H6.3V17.6c0-.8.6-1.4 1.4-1.4h10.6c2.1 0 4 .9 5.3 2.6 1.2 1.6 1.7 3.6 1.2 5.7zM39.1 17h19.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H39.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM48.2 24.2c-7.8 0-14.1 6.3-14.1 14.1s6.3 14.1 14.1 14.1c3.4 0 6.7-1.2 9.2-3.5.9-.8 1-2.2.2-3.2-.8-.9-2.2-1-3.2-.2-1.7 1.5-4 2.4-6.3 2.4-4.5 0-8.3-3.1-9.3-7.3H60c1.2 0 2.3-1 2.3-2.3 0-7.8-6.4-14.1-14.1-14.1zm0 4.5c4.5 0 8.3 3.1 9.3 7.3H38.9c1-4.2 4.8-7.3 9.3-7.3z" />
  </svg>
);
export default SvgBehance;
