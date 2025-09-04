import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  type SelectProps,
  FormHelperText,
} from "@mui/material";
import { useController } from "react-hook-form";
import type { UseControllerProps, FieldValues } from "react-hook-form";

type Props<T extends FieldValues> = {
  items: { text: string; value: string }[];
  label: string;
} & UseControllerProps<T> &
  SelectProps;

export default function SelectInput<T extends FieldValues>(props: Props<T>) {
  const { field, fieldState } = useController(props);
  return (
    <FormControl error={!!fieldState.error} fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select
        value={field.value || ""}
        label={props.label}
        onChange={field.onChange}
      >
        {props.items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{fieldState.error?.message}</FormHelperText>
    </FormControl>
  );
}
