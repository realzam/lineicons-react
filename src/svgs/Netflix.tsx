import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNetflix = ({
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
      d="M9.6 39.181c-.963.17-1.942.22-2.956.355l-3.09-9.053v9.442c-.964.101-1.842.236-2.754.371V23h2.568l3.513 9.814V23H9.6v16.181Zm5.32-9.847c1.048 0 2.653-.05 3.616-.05v2.702c-1.2 0-2.602 0-3.615.05v4.02c1.588-.1 3.175-.236 4.78-.286v2.6l-7.483.592V23h7.483v2.703h-4.78v3.631Zm14.831-3.631h-2.804v12.431c-.912 0-1.824 0-2.702.034V25.703H21.44V23h8.31v2.703Zm4.392 3.445h3.699v2.703h-3.7v6.131h-2.651V23h7.55v2.703h-4.898v3.445Zm9.29 6.47c1.537.033 3.09.152 4.594.236v2.669c-2.415-.152-4.83-.304-7.297-.355V23h2.703v12.618Zm6.874 3.09c.862.051 1.774.102 2.652.203V23h-2.652v15.709ZM64.8 23l-3.429 8.226 3.429 9.07c-1.014-.135-2.027-.32-3.04-.49l-1.943-5-1.976 4.595c-.98-.169-1.926-.22-2.905-.355l3.48-7.921L55.273 23h2.905l1.773 4.544L61.844 23H64.8Z"
    />
  </svg>
);
export default SvgNetflix;
