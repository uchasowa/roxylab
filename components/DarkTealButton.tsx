import * as React from "react";
import {
  PlasmicDarkTealButton,
  DefaultDarkTealButtonProps
} from "./plasmic/roxy_landing_page/PlasmicDarkTealButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface DarkTealButtonProps extends DefaultDarkTealButtonProps {
  // Feel free to add any additional props that this component should receive
}
function DarkTealButton_(props: DarkTealButtonProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicDarkTealButton.useBehavior<DarkTealButtonProps>(props, ref);
  return <PlasmicDarkTealButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<DarkTealButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<DarkTealButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const DarkTealButton = React.forwardRef(
  DarkTealButton_
) as any as ButtonComponentType;

export default Object.assign(DarkTealButton, { __plumeType: "button" });
