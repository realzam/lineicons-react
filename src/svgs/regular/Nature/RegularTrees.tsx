import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrees = ({
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
    <path d="M14.2 14.5C6.7 14.5 1.8 24.6 1.8 34c0 9 4.3 16.2 10.2 17.7v8.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-8.3c5.8-1.5 10.1-8.7 10.1-17.7-.1-9.3-5.1-19.4-12.5-19.4zm2.3 32.4v-4.7c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3V47c-3.2-1.7-5.6-7-5.6-13 0-7.6 3.9-15 7.9-15s7.9 7.4 7.9 15c0 5.9-2.4 11.1-5.6 12.9zM62.3 26.6c0-12-6-24.8-15-24.8s-15 12.8-15 24.8c0 11.6 5.4 20.9 12.7 22.6V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V49.2c7.2-1.6 12.7-11 12.7-22.6zM49.5 44.5v-7.4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v7.4c-4.6-1.9-8.2-9.3-8.2-17.8 0-10.4 5.1-20.3 10.5-20.3s10.5 9.9 10.5 20.3c.1 8.5-3.6 15.9-8.2 17.8z" />
  </svg>
);
export default SvgTrees;
