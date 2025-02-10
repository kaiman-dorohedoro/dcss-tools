import { CalculatorState } from "@/hooks/useCalculatorState";
import { LineDot } from "recharts/types/cartesian/Line";

type ChartPayload = {
  [key: string]: number;
};

type RenderDotParams = {
  key: string;
  r: number;
  name: string;
  stroke: string;
  strokeWidth: number;
  fill: string;
  width: number;
  height: number;
  value: number;
  dataKey: string;
  cx: number;
  cy: number;
  index: number;
  payload: ChartPayload;
};

const baseLeftPadding = 30;
const baseTopOffset = 310;
const baseLeftOffset = 612;

const minLeftOffset = 7;
const minRightOffset = 7;
const minBottomOffset = 15;
const widthPerDigit = 8.3;
const heightDigit = 14;

const renderDot = (
  skillKey: keyof CalculatorState | "spellSkill",
  currentSkill: number
) => {
  const dotRenderer: LineDot = (params: RenderDotParams) => {
    const { cx, cy, payload, value } = params;

    const r = 2;
    const fillColor = "#fff";

    if (payload[skillKey] === currentSkill) {
      const textWidth = value.toString().length * widthPerDigit;

      let textCx = cx;
      let textCy = cy;

      if (cx <= baseLeftPadding + minLeftOffset + textWidth / 2) {
        textCx += textWidth / 2 + minLeftOffset - (cx - baseLeftPadding);
      } else if (cx >= baseLeftOffset - minRightOffset - textWidth / 2) {
        textCx += -textWidth / 2 - minRightOffset - (cx - baseLeftOffset);
      }

      if (cy >= baseTopOffset - minBottomOffset - heightDigit) {
        textCy += -heightDigit - minBottomOffset - (cy - baseTopOffset);
      } else {
        textCy += heightDigit;
      }

      return (
        <g key={params.key + params.name}>
          <circle cx={cx} cy={cy} r={r} fill={fillColor} stroke="white" />
          <text
            x={textCx}
            y={textCy}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
          >
            {value}
          </text>
        </g>
      );
    }
    return <g key={params.key + params.name} />;
  };
  return dotRenderer;
};

export default renderDot;
