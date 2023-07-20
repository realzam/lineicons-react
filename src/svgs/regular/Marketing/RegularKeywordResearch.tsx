import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeywordResearch = ({
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
    <path d="M60.7 50.6 47.6 37.5c-1.9-1.9-5-2-7.1-.3l-5.1-5.1c5.8-7.4 5.3-18.1-1.5-24.9-7.3-7.3-19.3-7.3-26.6 0S0 26.5 7.3 33.8c3.7 3.7 8.5 5.5 13.3 5.5 4.1 0 8.2-1.3 11.6-4l5.1 5.1c-1.8 2.1-1.7 5.2.3 7.1l13.1 13.1c1 1 2.4 1.5 3.7 1.5 1.3 0 2.7-.5 3.7-1.5l2.6-2.6c2-2 2-5.3 0-7.4zM10.4 30.7c-5.6-5.6-5.6-14.7 0-20.3 2.8-2.8 6.5-4.2 10.1-4.2s7.3 1.4 10.1 4.2c5.6 5.6 5.6 14.7 0 20.3-5.5 5.6-14.6 5.6-20.2 0zm47.1 24.2-2.6 2.6c-.3.3-.8.3-1.1 0L40.7 44.4c-.3-.3-.3-.8 0-1.1l2.6-2.6c.1-.1.3-.2.5-.2s.4.1.5.2l13.1 13.1c.4.3.4.8.1 1.1z" />
    <path d="M15.6 19.2h4.9c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-4.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3zM25.8 22.1H15.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h10.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3z" />
  </svg>
);
export default SvgKeywordResearch;
