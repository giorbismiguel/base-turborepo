import React from "react";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  ListItemText,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { ConditionContainer, FlexBox } from "mui-react-common";
import { BaseFilterProps } from "../Base/FilterBase";
import { useRangeFilter } from "./useRangeFilter";
import { FilterBase } from "../Base";

export type NumberFilterProps = BaseFilterProps & {
  value?: string;
  onChange: (selected: string) => void;
};

const defaultValue: string = "";

const NumberFilter = ({
  id,
  title,
  onChange,
  value = defaultValue,
}: NumberFilterProps) => {
  const { t } = useTranslation("common");
  const { rangeValue, handleChange, handleClear, handleChangeType } =
    useRangeFilter(value, onChange);

  return (
    <FilterBase title={title} id={id}>
      <Box px={2} py={1}>
        <FlexBox justifyContent={"center"} mb={2}>
          <ToggleButtonGroup
            color="primary"
            size={"small"}
            value={rangeValue.isRange}
            exclusive
            onChange={handleChangeType}
            aria-label="Platform"
          >
            <ToggleButton value={false} sx={{ minWidth: 120 }}>
              {t("filtersCom.exact")}
            </ToggleButton>
            <ToggleButton value={true} sx={{ minWidth: 120 }}>
              {t("filtersCom.range")}
            </ToggleButton>
          </ToggleButtonGroup>
        </FlexBox>
        <ConditionContainer
          active={rangeValue.isRange}
          alternative={
            <TextField
              size={"small"}
              name={"equal"}
              value={rangeValue.equal}
              onChange={handleChange}
              fullWidth
              type={"number"}
              label={t("filtersCom.value")}
            />
          }
        >
          <FlexBox gap={2}>
            <TextField
              size={"small"}
              name={"from"}
              fullWidth
              value={rangeValue.from}
              onChange={handleChange}
              type={"number"}
              label={t("filtersCom.from")}
            />
            <TextField
              size={"small"}
              name={"to"}
              fullWidth
              value={rangeValue.to}
              onChange={handleChange}
              type={"number"}
              label={t("filtersCom.to")}
            />
          </FlexBox>
        </ConditionContainer>
      </Box>
      <MenuItem key={"clear"} value={"clear"} onClick={handleClear}>
        <ListItemText
          primary={t("clear")}
          primaryTypographyProps={{ color: "primary", ml: 0.5 }}
        />
      </MenuItem>
    </FilterBase>
  );
};

export default NumberFilter;
