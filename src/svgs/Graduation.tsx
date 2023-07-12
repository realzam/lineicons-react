import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGraduation = ({
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
    <path d="m61.5 34-4.2-4.3v-3.8c.6-.7 1-1.6 1-2.6 0-1.5-.8-2.8-2.2-3.4l-24.5-11c-.9-.4-2-.4-3 0L4 19.8c-1.3.6-2.2 1.9-2.2 3.4S2.7 26 4 26.6l8.4 3.8v11.8c0 7.3 5.9 13.2 13.1 13.2h9.1c7.3 0 13.1-5.9 13.1-13.2V30.6l4.8-2.2.3-.1v1.6l-4 4.1c-1.1 1.1-1.1 2.8 0 3.9l4.3 4.5c.5.5 1.2.8 2 .8.7 0 1.5-.3 2-.8l4.3-4.5c1.1-1.1 1.1-2.8.1-3.9zm-18.3 8.2c0 4.8-3.9 8.7-8.6 8.7h-9.1c-4.8 0-8.6-3.9-8.6-8.7v-9.7l11.9 5.4c.5.2 1 .3 1.5.3s1-.1 1.5-.3l11.4-5.1v9.4zm-12.9-8.7L7.4 23.2l22.7-10 22.6 10.2-22.4 10.1zM55.1 38l-2-2 2-2 2 2-2 2z" />
  </svg>
);
export default SvgGraduation;
