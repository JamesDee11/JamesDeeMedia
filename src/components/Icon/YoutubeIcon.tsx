import { FC, memo } from "react";
import Icon, { IconProps } from "./Icon";

const YouTubeIcon: FC<IconProps> = memo((props) => (
  <Icon {...props}>
    {/* Define the mask */}
    <mask id="playButtonMask">
      {/* Outer box with rounded edges (solid white in mask) */}
      <rect
        x="0"
        y="0"
        width="128"
        height="128"
        rx="24" /* Rounded corners */
        fill="white"
      />
      {/* Larger, centered, and flipped play button (transparent in mask) */}
      <polygon
        points="44,44 80,64 44,84" /* Adjusted and flipped points */
        fill="black"
      />
    </mask>

    {/* Apply the mask to the rounded outer box */}
    <rect
      x="0"
      y="0"
      width="128"
      height="128"
      rx="24" /* Rounded corners */
      fill="currentColor"
      mask="url(#playButtonMask)"
    />
  </Icon>
));

export default YouTubeIcon;
