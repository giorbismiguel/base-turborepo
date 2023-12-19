import React, { ReactNode } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Checkbox, ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useManySelectFilter } from "./useManySelectFilter";
import { SelectFilterProps } from "../../types";
import { FilterBase } from "../Base";

const defaultValue: string[] = [];
const ITEM_HEIGHT = 36;
const menuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 7.5,
    },
  },
};

const SelectFilter = ({
  id,
  title,
  options = [],
  onChange,
  value = defaultValue,
}: SelectFilterProps) => {
  const { t } = useTranslation("common");
  const { selected, handleSelect, handleClear } = useManySelectFilter(
    value,
    onChange
  );

  return (
    <FilterBase title={title} id={id} menuProps={menuProps}>
      {options.map((option) => {
        const itemValue: string = option.value || option._id || option;
        const label: ReactNode =
          option.label || option.title || option.name || option;
        const isSelected = selected.indexOf(itemValue) > -1;
        const primaryLabel = option.translate ? t(label as string) : label;

        return (
          <MenuItem
            key={itemValue}
            value={itemValue}
            selected={isSelected}
            onClick={() => handleSelect(itemValue)}
          >
            <Checkbox checked={isSelected} />
            <ListItemText primary={primaryLabel} />
          </MenuItem>
        );
      })}
      <MenuItem key={"clear"} value={"clear"} onClick={handleClear}>
        <ListItemText
          primary={t("clear")}
          primaryTypographyProps={{ color: "primary", ml: 0.5 }}
        />
      </MenuItem>
    </FilterBase>
  );
};

export default SelectFilter;
