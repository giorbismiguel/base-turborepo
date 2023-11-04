import {memo} from 'react'
import Divider from "@mui/material/Divider";
import {H3} from "mui-react-common";
import {useTranslation} from "react-i18next";

const OrDivider = () => {
    const { t } = useTranslation(['common']);
    return (
        <Divider
            sx={{
                my: 3,
                width: '100%'
            }}
        >
            <H3 color='text.disabled' px={1} my={0}>
                {t('or')}
            </H3>
        </Divider>
    );

}

export default memo(OrDivider);
