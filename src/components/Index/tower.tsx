import Svg, { Line, Path, Rect } from "react-native-svg";
import { Colors } from "../../constants/colors";

export default function TowerLogo() {
  return (
    <Svg width="130" height="156" viewBox="0 0 100 120" fill="none">
      <Rect
        x="15"
        y="104"
        width="70"
        height="10"
        rx="3"
        fill={Colors.card}
        stroke={Colors.border}
        strokeWidth="1"
      />
      <Rect
        x="28"
        y="50"
        width="44"
        height="56"
        rx="2"
        fill="#1d2c32"
        stroke={Colors.border}
        strokeWidth="1.2"
      />
      <Line
        x1="28"
        y1="68"
        x2="72"
        y2="68"
        stroke={Colors.border}
        strokeWidth="0.8"
      />
      <Line
        x1="28"
        y1="84"
        x2="72"
        y2="84"
        stroke={Colors.border}
        strokeWidth="0.8"
      />
      <Line
        x1="28"
        y1="100"
        x2="72"
        y2="100"
        stroke={Colors.border}
        strokeWidth="0.8"
      />
      <Line
        x1="50"
        y1="50"
        x2="50"
        y2="104"
        stroke={Colors.border}
        strokeWidth="0.8"
      />

      <Rect
        x="24"
        y="38"
        width="9"
        height="16"
        rx="1.5"
        fill="#1d2c32"
        stroke={Colors.border}
        strokeWidth="1.2"
      />
      <Rect
        x="37"
        y="32"
        width="9"
        height="22"
        rx="1.5"
        fill="#1d2c32"
        stroke={Colors.border}
        strokeWidth="1.2"
      />
      <Rect
        x="54"
        y="32"
        width="9"
        height="22"
        rx="1.5"
        fill="#1d2c32"
        stroke={Colors.border}
        strokeWidth="1.2"
      />
      <Rect
        x="67"
        y="38"
        width="9"
        height="16"
        rx="1.5"
        fill="#1d2c32"
        stroke={Colors.border}
        strokeWidth="1.2"
      />

      <Rect x="39" y="62" width="4" height="12" rx="1" fill="#0e1618" />
      <Rect x="57" y="62" width="4" height="12" rx="1" fill="#0e1618" />

      <Path d="M41 114 L41 96 Q50 87 59 96 L59 114Z" fill="#0e1618" />

      <Line
        x1="50"
        y1="32"
        x2="50"
        y2="6"
        stroke={Colors.border}
        strokeWidth="1.5"
      />

      <Path d="M50 6 L76 14 L50 22 Z" fill={Colors.primary} />

      <Rect
        x="46"
        y="54"
        width="8"
        height="6"
        rx="1"
        fill={Colors.primary}
        opacity="0.85"
      />
    </Svg>
  );
}
