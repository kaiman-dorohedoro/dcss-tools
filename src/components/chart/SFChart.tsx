import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import renderDot from "@/components/chart/SkillDotRenderer";
import CustomSpellTick from "@/components/chart/CustomSpellTick";
import { CalculatorState } from "@/hooks/useCalculatorState";
import { calculateAvgSFData, calculateSFTicks } from "@/utils/calculatorUtils";
import { getSpellSchools } from "@/utils/spellCalculation";
import { GameVersion } from "@/types/game";
import SpellModeHeader from "../SpellModeHeader";

type SFChartProps<V extends GameVersion> = {
  state: CalculatorState<V>;
  setState: React.Dispatch<React.SetStateAction<CalculatorState<V>>>;
};

const SFChart = <V extends GameVersion>({
  state,
  setState,
}: SFChartProps<V>) => {
  const [sfData, setSFData] = useState<ReturnType<typeof calculateAvgSFData>>(
    []
  );
  const [sfTicks, setSfTicks] = useState<number[]>([]);
  const spellSchools = getSpellSchools<V>(state.version, state.targetSpell);
  const [firstSchool] = spellSchools;

  useEffect(() => {
    const firstSFData = calculateAvgSFData(state);
    setSFData(firstSFData);
    setSfTicks(calculateSFTicks(state));
  }, [state]);

  return (
    <>
      <SpellModeHeader state={state} setState={setState} />
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={sfData}
          margin={{ left: 10, right: 10, top: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="spellSkill"
            label={{
              value:
                spellSchools.length > 1
                  ? "Skill Average"
                  : `${firstSchool} Skill`,
              position: "bottom",
              offset: 16,
              style: { fill: "#eee" },
            }}
            tickFormatter={(value) => value.toFixed(1)}
            ticks={sfTicks}
            interval={0}
            tick={CustomSpellTick}
          />
          <YAxis allowDecimals={false} width={30} tick={{ fill: "#eee" }} />
          <Tooltip
            formatter={(value) => {
              return [`${value}%`, "Spell Failure Rate"];
            }}
            labelFormatter={(value) =>
              `${
                spellSchools.length > 1
                  ? "Skill Average"
                  : `${firstSchool} Skill`
              }: ${value}`
            }
            wrapperStyle={{
              backgroundColor: "hsl(var(--popover))",
              borderColor: "hsl(var(--border))",
              color: "hsl(var(--popover-foreground))",
              borderRadius: "calc(var(--radius) - 2px)",
            }}
            contentStyle={{
              backgroundColor: "hsl(var(--popover))",
              border: "none",
            }}
            itemStyle={{
              color: "hsl(var(--popover-foreground))",
            }}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            layout="horizontal"
            wrapperStyle={{
              marginLeft: "-150px",
              marginBottom: "-10px",
            }}
          />
          <Line
            type="stepAfter"
            dataKey="spellFailureRate"
            name=" Spell Failure Rate"
            isAnimationActive={false}
            dot={renderDot(
              "spellSkill",
              Math.round(
                spellSchools.reduce(
                  (acc, school) =>
                    acc + (state.schoolSkills?.[school] ?? 0) * 200,
                  0
                ) /
                  spellSchools.length /
                  20
              ) / 10
            )}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SFChart;
