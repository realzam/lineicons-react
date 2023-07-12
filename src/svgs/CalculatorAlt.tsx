import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCalculatorAlt = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 64 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      fillRule="evenodd"
      d="M13.1 6.25c-.957 0-1.75.793-1.75 1.75v48c0 .957.793 1.75 1.75 1.75h37.8c.957 0 1.75-.793 1.75-1.75V8c0-.957-.793-1.75-1.75-1.75H13.1ZM6.85 8c0-3.443 2.807-6.25 6.25-6.25h37.8c3.443 0 6.25 2.807 6.25 6.25v48c0 3.443-2.807 6.25-6.25 6.25H13.1c-3.443 0-6.25-2.807-6.25-6.25V8Zm13.4 6.15v7h23.5v-7h-23.5Zm-4.5-.25A4.256 4.256 0 0 1 20 9.65h24a4.256 4.256 0 0 1 4.25 4.25v7.5c0 1.111-.38 2.212-1.209 3.041-.829.829-1.93 1.209-3.041 1.209H20a4.256 4.256 0 0 1-4.25-4.25v-7.5ZM20 29.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5h-1ZM28.75 32A2.25 2.25 0 0 1 31 29.75h1a2.25 2.25 0 0 1 0 4.5h-1A2.25 2.25 0 0 1 28.75 32ZM42 29.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5h-1ZM17.75 42A2.25 2.25 0 0 1 20 39.75h1a2.25 2.25 0 0 1 0 4.5h-1A2.25 2.25 0 0 1 17.75 42ZM31 39.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5h-1ZM39.75 42A2.25 2.25 0 0 1 42 39.75h1a2.25 2.25 0 0 1 0 4.5h-1A2.25 2.25 0 0 1 39.75 42ZM20 49.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5h-1ZM28.75 52A2.25 2.25 0 0 1 31 49.75h1a2.25 2.25 0 0 1 0 4.5h-1A2.25 2.25 0 0 1 28.75 52ZM42 49.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5h-1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgCalculatorAlt;
