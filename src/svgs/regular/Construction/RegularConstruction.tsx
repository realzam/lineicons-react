import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgConstruction = ({
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
    <path d="M57.5 24.1c2.6 0 4.8-2.2 4.8-4.8v-3.2c0-2.1-1.4-4-3.4-4.6L27.9 2c-.5-.1-.9-.2-1.4-.2H14.2c-2.6 0-4.8 2.2-4.8 4.8v12.7c0 2.6 2.2 4.8 4.8 4.8H17v18.4H8c-3.4 0-6.2 2.8-6.2 6.2V56c0 3.4 2.8 6.2 6.2 6.2h22.5c3.4 0 6.3-2.8 6.3-6.2v-7.3c0-3.4-2.8-6.2-6.3-6.2h-9V24.1h28.6V35c0 2.1 1.5 4 3.6 4.5 2.7.7 4.4 3.4 3.9 6.2-.4 2.1-2.2 3.9-4.3 4.3-1.6.3-3.2-.1-4.5-1.2-1.2-1-1.9-2.5-1.9-4.1 0-.6.1-1.2.3-1.8.4-1.2-.2-2.5-1.4-2.9-1.2-.4-2.5.2-2.9 1.4a9.6 9.6 0 0 0-.6 3.3c0 2.9 1.3 5.7 3.5 7.6 1.8 1.5 4 2.3 6.4 2.3.6 0 1.2-.1 1.8-.2 4-.7 7.3-4 8-8 .9-5.2-2.2-10-7.2-11.3-.2 0-.2-.1-.2-.2V24.1h2.9zM32.3 48.7V56c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8v-7.3c0-.9.8-1.7 1.8-1.7h22.5c1 0 1.8.8 1.8 1.7zm25.5-32.6v3.2c0 .2-.1.3-.3.3H29.2V7l28.4 8.7c.1.1.2.2.2.4zm-43.9 3.2V6.5c0-.2.1-.3.3-.3h10.5v13.3H14.2c-.2.1-.3-.1-.3-.2z" />
  </svg>
);
export default SvgConstruction;
