import {
  TextField,
  Autocomplete,
  AutocompleteProps,
  TextFieldProps,
  styled,
} from "@mui/material";
import React, { memo } from "react";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { styledField, StyledFieldProps } from "../styledField";
import FormLabel, { useFormLabel } from "../FormLabel";

export type SelectAutocompleteFieldProps = StyledFieldProps &
  Omit<AutocompleteProps<any, any, any, any>, "renderInput" | "onChange"> & {
    helperText?: string;
    error?: boolean;
    loading?: boolean;
    required?: boolean;
    label?: string;
    searchProps?: TextFieldProps;
    inputProps?: any;
    onChange?: any;
    inputRef?: any;
    renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
  };

const WrapperAutocomplete = ({
  dark,
  ...props
}: AutocompleteProps<any, any, any, any> & { dark?: boolean }) => (
  <Autocomplete {...props} />
);

const AutocompleteDarkField =
  styled(WrapperAutocomplete)<SelectAutocompleteFieldProps>(styledField);

const SelectAutocompleteField = ({
  label,
  helperText,
  error,
  inputRef,
  placeholder,
  searchProps,
  inputProps,
  loading,
  required,
  renderInput,
  readOnly,
  onChange,
  disabled,
  dark,
  ...rest
}: SelectAutocompleteFieldProps) => {
  const { label: inputLabel, formLabel } = useFormLabel(label, dark);

  const input =
    renderInput ||
    ((params) => (
      <TextField
        {...params}
        label={inputLabel}
        {...searchProps}
        helperText={helperText}
        required={required}
        placeholder={placeholder}
        InputProps={{
          ...inputProps,
          ...params.InputProps,
          autoComplete: "disabled", // disable autocomplete and autofill
          endAdornment: (
            <>
              {loading ? <CircularProgress color="inherit" size={20} /> : null}
              {params.InputProps.endAdornment}
            </>
          ),
        }}
        error={error}
      />
    ));

  const readOnlyValue = readOnly || inputProps?.readOnly;

  return (
    <FormLabel label={formLabel} required={required}>
      <AutocompleteDarkField
        fullWidth
        disabled={disabled}
        loading={loading}
        dark={dark}
        readOnly={readOnlyValue}
        renderInput={input}
        {...rest}
        onChange={(_event: any, newValue: any) => {
          onChange?.({ target: { value: newValue } });
        }}
      />
    </FormLabel>
  );
};

export default memo(SelectAutocompleteField);
