import React, { memo } from "react";
import FormFieldControl, { FormFieldControlProps } from "../FormFieldControl";
import SelectAutocompleteField, {
  SelectAutocompleteFieldProps,
} from "./SelectAutocompleteField";

const FormSelectAutocompleteField = (
  props: FormFieldControlProps & SelectAutocompleteFieldProps
) => {
  return <FormFieldControl {...props} Component={SelectAutocompleteField} />;
};

export default memo(FormSelectAutocompleteField);
