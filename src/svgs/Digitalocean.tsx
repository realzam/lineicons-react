import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDigitalocean = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 65 64"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#000"
      fillRule="evenodd"
      d="M32.804 49.205V60c18.32 0 32.608-17.717 26.607-36.926-2.604-8.382-9.303-15.05-17.685-17.685C22.516-.61 4.8 13.676 4.8 31.996h10.827c0-11.494 11.398-20.384 23.495-16.002 4.477 1.619 8.065 5.207 9.684 9.652 4.41 12.086-4.492 23.474-15.97 23.495V38.378H22.009v10.827h10.795Zm-10.795 8.287h-8.287v-8.287h8.287v8.287Zm-15.24-8.287h6.953V42.25H6.769v6.954Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDigitalocean;
