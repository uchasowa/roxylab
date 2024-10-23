// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconParkTwotoneSuccessSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconParkTwotoneSuccessSvgIcon(
  props: IconParkTwotoneSuccessSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 120 120"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <mask
        id={"SKIlpj4dlbrEa"}
        style={{
          maskType: 'luminance"',
        }}
        maskUnits={"userSpaceOnUse"}
        x={"9"}
        y={"7"}
        width={"102"}
        height={"106"}
      >
        <path
          d={
            "M60 10l13.132 9.58 16.258-.03 4.992 15.47 13.17 9.53L102.5 60l5.052 15.45-13.17 9.53-4.992 15.47-16.258-.03L60 110l-13.133-9.58-16.257.03-4.993-15.47-13.17-9.53L17.5 60l-5.053-15.45 13.17-9.53 4.993-15.47 16.257.03L60 10z"
          }
          fill={"#555"}
          stroke={"#fff"}
          strokeWidth={"6"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>

        <path
          d={"M42.5 60L55 72.5l25-25"}
          stroke={"#fff"}
          strokeWidth={"6"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        ></path>
      </mask>

      <g mask={"url(#SKIlpj4dlbrEa)"}>
        <path d={"M0 0h120v120H0V0z"} fill={"#5959D8"}></path>
      </g>
    </svg>
  );
}

export default IconParkTwotoneSuccessSvgIcon;
/* prettier-ignore-end */
