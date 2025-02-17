import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const parseFloatInput = (value: number | string) => {
  const parsedValue = typeof value === "string" ? parseFloat(value) : value;
  if (!isNaN(parsedValue)) {
    return Math.floor(parsedValue * 10) / 10;
  }
  return 0;
};

const defaultWidth = "w-16";
const skillWidth = "w-[80px]";

type AttrInputProps = {
  label: string;
  value: number;
  type: "stat" | "skill" | "number";
  max?: number;
  onChange: (value: number) => void;
};

const AttrInput = ({
  label,
  value,
  type = "stat",
  max,
  onChange,
}: AttrInputProps) => {
  const maxValue = max !== undefined ? max : type === "skill" ? 27 : undefined;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =
      type === "skill"
        ? parseFloatInput(e.target.value)
        : Number(e.target.value);

    onChange(maxValue !== undefined ? Math.min(newValue, maxValue) : newValue);
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <label className="break-keep text-sm">{label}:</label>
      <Input
        type="number"
        className={cn(defaultWidth, type === "skill" ? skillWidth : "", "h-6")}
        min="0"
        max={maxValue}
        step={type === "skill" ? "0.1" : undefined}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default AttrInput;
