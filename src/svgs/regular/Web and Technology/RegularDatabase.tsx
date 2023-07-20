import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDatabase = ({
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
    <path d="M32 1.8c-11.7 0-20.9 5.5-20.9 12.4v35.6c0 6.9 9.4 12.4 20.8 12.4 11.5 0 20.9-5.6 20.9-12.4V14.2c.1-7-9.1-12.4-20.8-12.4zm0 4.5c9.6 0 16.4 4.2 16.4 7.9 0 3.8-6.7 7.9-16.4 7.9s-16.4-4.2-16.4-7.9c0-3.8 6.8-7.9 16.4-7.9zm0 51.5c-9.4 0-16.3-4.2-16.3-7.9V46c3.8 2.8 9.6 4.5 16.3 4.5 6.7 0 12.6-1.8 16.4-4.5v3.9c0 3.7-7 7.9-16.4 7.9zM32 46c-9.6 0-16.3-4-16.3-7.6v-4.6c3.9 2.8 10 4.5 16.3 4.5 6.6 0 12.5-1.7 16.4-4.5v4.6C48.4 42 41.6 46 32 46zm13.8-15.9c-3.1 2.3-8.2 3.7-13.8 3.7-5.5 0-10.7-1.4-13.8-3.7-1.2-.8-2.5-2.2-2.5-3.9V22c3.8 2.8 9.7 4.6 16.4 4.6 6.7 0 12.6-1.8 16.4-4.6v4.2c-.1 1.6-1.5 3-2.7 3.9z" />
  </svg>
);
export default SvgDatabase;
