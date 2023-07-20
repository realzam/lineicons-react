import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFirebase = ({
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
      d="M12.638 40.866 18.37 4.124c.198-1.252 1.879-1.548 2.472-.428l6.162 11.533-14.367 25.637Zm40.762 8.93-5.47-33.842c-.165-1.054-1.483-1.482-2.241-.725L11.22 49.796 30.3 60.506c1.186.659 2.67.659 3.855 0L53.4 49.796ZM37.912 20.271l-4.416-8.403a1.313 1.313 0 0 0-2.34 0l-19.408 34.6 26.164-26.197Z"
    />
  </svg>
);
export default SvgFirebase;
