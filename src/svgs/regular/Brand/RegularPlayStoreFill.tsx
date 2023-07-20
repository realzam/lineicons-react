import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlayStoreFill = ({
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
      d="m10.273 1 27.32 27.316 7.05-7.05C35.01 15.42 22.109 7.58 16.306 4.054L12.418 1.7A4.826 4.826 0 0 0 10.273 1Zm-4.17 3.27c-.055.3-.103.602-.103.926V59.18c0 .227.046.438.077.653L33.871 32.04 6.103 4.27Zm43.174 19.808-7.96 7.96 7.821 7.822c4.144-2.512 7.015-4.256 7.333-4.448 1.409-.861 2.204-2.16 2.18-3.58-.02-1.392-.816-2.637-2.17-3.403-.302-.174-3.134-1.884-7.204-4.35ZM37.594 35.762 10.355 63c.53-.092 1.058-.25 1.564-.555a235259 235259 0 0 1 32.586-19.772l-6.911-6.911Z"
    />
  </svg>
);
export default SvgPlayStoreFill;
