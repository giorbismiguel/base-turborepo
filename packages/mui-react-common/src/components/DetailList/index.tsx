import React, { FC, memo } from "react";
import { Stack } from "@mui/material";
import { H5, Span } from "../Typography";
import get from "lodash/get";
import { Details, DetailsProps } from "./DetailList.types";

const useDetails = (
  details: Details[],
  data: {},
  t: (key: string) => string
) => {
  return details.map((item, key) => {
    const value = item.value ? item.value : item.field && get(data, item.field);
    const label = item.translate && t ? t(item.label) : item.label;
    const finalValue = item.format ? item.format(value) : value;
    return (
      <Stack key={key} direction="row" alignItems="center" spacing={1}>
        <H5 width={"50%"} minWidth={"130px"} textTransform={"none"}>
          {label}
        </H5>
        <Span flexGrow={1} secondary textTransform={"none"}>
          {finalValue}
        </Span>
      </Stack>
    );
  });
};

const DetailList: FC<DetailsProps> = ({ details, data, t }) => {
  const items = useDetails(details, data, t);

  return (
    <Stack spacing={1} width="100%">
      {items}
      {/*<Stack direction='row' alignItems='center' spacing={1}>*/}
      {/*  <H6 width={130}>{t('profile.phone')}</H6>*/}
      {/*  <Span flexGrow={1}>+55 748 327 439</Span>*/}
      {/*</Stack>*/}
      {/*<Stack direction='row' alignItems='center' spacing={1}>*/}
      {/*  <H6 width={130}>{t('country')}</H6>*/}
      {/*  <Span flexGrow={1}>+55 748 327 439</Span>*/}
      {/*</Stack>*/}
      {/*<Stack direction='row' alignItems='center' spacing={1}>*/}
      {/*  <H6 width={'50%'}>{t('profile.creation')}</H6>*/}
      {/*  <Span flexGrow={1} color={'secondary.400'}>*/}
      {/*    06/02/2022 | 04:30*/}
      {/*  </Span>*/}
      {/*</Stack>*/}
    </Stack>
  );
};

export default memo(DetailList);
