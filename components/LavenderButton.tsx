import * as React from "react";
import {
  PlasmicLavenderButton,
  DefaultLavenderButtonProps
} from "./plasmic/roxy_landing_page/PlasmicLavenderButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface LavenderButtonProps extends DefaultLavenderButtonProps {
  // Feel free to add any additional props that this component should receive
}
function LavenderButton_(props: LavenderButtonProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicLavenderButton.useBehavior<LavenderButtonProps>(props, ref);
  return <PlasmicLavenderButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<LavenderButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<LavenderButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const LavenderButton = React.forwardRef(
  LavenderButton_
) as any as ButtonComponentType;

export default Object.assign(LavenderButton, { __plumeType: "button" });
