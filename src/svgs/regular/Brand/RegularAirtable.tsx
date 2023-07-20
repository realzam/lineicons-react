import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAirtable = ({
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
      d="M32.614 5.243c-1.158 0-2.32.229-3.414.685L5.38 15.778c-1.341.555-1.307 2.422.032 2.977l23.952 9.488a8.71 8.71 0 0 0 6.544 0l23.952-9.488c1.341-.523 1.341-2.422.032-2.976L36.006 5.928a8.68 8.68 0 0 0-3.392-.685Zm30.421 16.24a1.57 1.57 0 0 0-.592.12L35.744 31.94a1.632 1.632 0 0 0-1.013 1.504v23.723a1.6 1.6 0 0 0 2.19 1.472l26.7-10.373a1.555 1.555 0 0 0 1.014-1.47V23.075a1.6 1.6 0 0 0-1.6-1.59v-.002Zm-60.597.104a1.719 1.719 0 0 0-1.28.506c-.294.296-.523.654-.523 1.08v22.28c0 1.179 1.373 1.966 2.421 1.44l16.72-8.016.819-.392 7.917-3.829c1.243-.587 1.147-2.421-.162-2.912L2.99 21.701a1.52 1.52 0 0 0-.552-.117v.003Z"
    />
  </svg>
);
export default SvgAirtable;
