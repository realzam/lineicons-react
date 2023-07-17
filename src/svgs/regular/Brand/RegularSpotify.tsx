import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSpotify = ({
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
    <path d="M42.2 48.7c-.3 0-.7-.1-1-.2-6.5-3.2-14-3.9-20.9-2.1-1.2.3-2.4-.4-2.7-1.6-.3-1.2.4-2.4 1.6-2.8 8-2.1 16.5-1.3 24 2.4 1.1.5 1.6 1.9 1 3-.4.8-1.2 1.3-2 1.3zM45.3 38c-.3 0-.6-.1-.9-.2-5.2-2.4-10.9-3.7-16.4-3.7-3.3 0-6.1.3-8.8 1.1-1.2.3-2.4-.4-2.8-1.6-.3-1.2.4-2.4 1.6-2.8 3.1-.8 6.3-1.2 9.9-1.2 6.2 0 12.5 1.4 18.3 4.1 1.1.5 1.6 1.9 1.1 3-.4.8-1.2 1.3-2 1.3zM48.5 26.8c-.3 0-.6-.1-1-.2-6.1-2.9-12.7-4.3-19.7-4.3-3.1 0-6.5.4-10 1.1-1.2.3-2.4-.5-2.7-1.7-.1-1.3.7-2.5 1.9-2.7 3.8-.8 7.5-1.2 10.9-1.2 7.6 0 14.8 1.6 21.6 4.7 1.1.5 1.6 1.9 1.1 3-.4.8-1.2 1.3-2.1 1.3z" />
    <path d="M32 62.3C15.3 62.3 1.8 48.7 1.8 32 1.8 15.3 15.3 1.8 32 1.8S62.3 15.4 62.3 32c0 16.7-13.6 30.3-30.3 30.3zm0-56C17.8 6.3 6.3 17.8 6.3 32S17.8 57.8 32 57.8 57.8 46.2 57.8 32C57.8 17.8 46.2 6.3 32 6.3z" />
  </svg>
);
export default SvgSpotify;
