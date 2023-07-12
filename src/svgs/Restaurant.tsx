import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRestaurant = ({
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
    <path d="M45.9 37.4h-5c-2 0-3.6 1.6-3.6 3.6v5c0 2 1.6 3.6 3.6 3.6h5c2 0 3.6-1.6 3.6-3.6v-5c0-2-1.6-3.6-3.6-3.6zM45 45h-3.1v-3.1H45V45z" />
    <path d="M59.7 20.6v-1.2c0-.4-.1-.8-.3-1.1L51.8 4.9c-1.1-1.9-3.1-3.1-5.3-3.1h-29c-2.2 0-4.2 1.2-5.3 3.1L4.6 18.3v.1c0 .1-.1.2-.1.3-.1.2-.2.5-.2.8v36.8c0 3.4 2.7 6.1 6.1 6.1h43.1c3.4 0 6.1-2.7 6.1-6.1l.1-35.7zm-30.1 1c-.4 1.8-2.1 3.1-4 3.1s-3.5-1.3-4-3.1h8zM16.1 7.1c.3-.5.8-.8 1.4-.8h29c.6 0 1.1.3 1.4.8l5.6 10h-43l5.6-10zM55 21.6c-.4 1.8-2 3.1-4 3.1-1.9 0-3.5-1.3-4-3.1h8zm-12.7 0c-.4 1.8-2 3.1-4 3.1s-3.5-1.3-4-3.1h8zm-25.4 0c-.4 1.8-2 3.1-4 3.1-1.9 0-3.5-1.3-4-3.1h8zM19 57.8V42.3c0-.2.2-.4.4-.4h4.8c.2 0 .4.2.4.4v15.4H19zm34.6 0H29.2V42.3c0-2.7-2.2-4.9-4.9-4.9h-4.8c-2.7 0-4.9 2.2-4.9 4.9v15.4h-4.1c-.9 0-1.6-.7-1.6-1.6v-28c1.2.7 2.6 1 4.1 1 2.5 0 4.8-1.1 6.4-2.8 1.6 1.7 3.8 2.8 6.4 2.8 2.5 0 4.8-1.1 6.4-2.8 1.6 1.7 3.8 2.8 6.4 2.8 2.5 0 4.8-1.1 6.4-2.8 1.6 1.7 3.8 2.8 6.4 2.8 1.5 0 2.9-.4 4.1-1v28c-.3.9-1.1 1.7-1.9 1.7z" />
  </svg>
);
export default SvgRestaurant;
