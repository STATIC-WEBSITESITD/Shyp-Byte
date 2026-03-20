import { useCallback, useMemo } from "react";
import Select, { type MultiValue, type SingleValue } from "react-select";

export type SelectOption = {
  value: string;
  label: string;
};

// Sample options data (can be replaced by callers).
export const sampleOptions: SelectOption[] = [
  { value: "fruits-veg", label: "Fruits & vegetables" },
  { value: "seafood", label: "Seafood / fish" },
  { value: "pharma", label: "Medicines / vaccines" },
  { value: "flowers", label: "Flowers / plants" },
];

type ReactSelectFieldProps = {
  options: SelectOption[];
  value: string | string[] | null;
  onChange: (value: string | string[] | null) => void;
  isMulti?: boolean;
  placeholder?: string;
  isClearable?: boolean;
};

const ReactSelectField = ({
  options,
  value,
  onChange,
  isMulti = false,
  placeholder = "Select...",
  isClearable = true,
}: ReactSelectFieldProps) => {
  const selectedOption = useMemo(() => {
    if (isMulti) {
      const ids = Array.isArray(value) ? value : [];
      return options.filter((o) => ids.includes(o.value));
    }

    const id = Array.isArray(value) ? value[0] : value;
    return options.find((o) => o.value === id) ?? null;
  }, [isMulti, options, value]);

  const handleChange = useCallback(
    (newValue: MultiValue<SelectOption> | SingleValue<SelectOption>) => {
      if (isMulti) {
        const multi = newValue as MultiValue<SelectOption> | null;
        onChange(multi ? multi.map((v) => v.value) : []);
        return;
      }

      const single = newValue as SingleValue<SelectOption> | null;
      onChange(single ? single.value : null);
    },
    [isMulti, onChange]
  );

  return (
    <Select
      isMulti={isMulti}
      options={options as any}
      value={selectedOption as any}
      onChange={handleChange as any}
      placeholder={placeholder}
      isSearchable
      isClearable={isClearable}
      classNamePrefix='rs'
      styles={{
        container: (base) => ({ ...base, width: "100%" }),
        control: (base, state) => ({
          ...base,
          minHeight: 48,
          borderColor: state.isFocused ? "#005eff" : "rgba(229, 231, 235, 1)",
          boxShadow: "none",
          "&:hover": {
            borderColor: state.isFocused ? "#005eff" : "rgba(229, 231, 235, 1)",
          },
        }),
        menu: (base) => ({ ...base, zIndex: 50 }),
      }}
    />
  );
};

export default ReactSelectField;

