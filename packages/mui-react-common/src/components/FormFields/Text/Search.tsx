import React, { memo } from "react";
import { Form } from "../Form";
import FormSearchField from "./FormSearchField";
import { useForm } from "react-hook-form";
import { TextFieldProps } from "@mui/material";

type SearchProps = TextFieldProps & {
  isLoading?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onSearch: (value: string) => void | Promise<any>;
};

const Search = ({ onSearch, isLoading, name, ...props }: SearchProps) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      query: "",
    },
  });

  return (
    <Form
      onSubmit={handleSubmit((value) => onSearch(value.query))}
      isLoading={isLoading}
      control={control}
    >
      <FormSearchField {...props} name="query" />
    </Form>
  );
};

export default memo(Search);
