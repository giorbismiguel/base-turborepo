import React, { memo } from "react";
import FormFieldControl, { FormFieldControlProps } from "../FormFieldControl";
import AsyncSelectAutocompleteField, {
  AsyncSelectAutocompletedProps,
} from "./AsyncSelectAutocompleteField";

const FormAsyncSelectAutocompleteField = (
  props: FormFieldControlProps & AsyncSelectAutocompletedProps
) => {
  return (
    <FormFieldControl {...props} Component={AsyncSelectAutocompleteField} />
  );
};

export default memo(FormAsyncSelectAutocompleteField);
