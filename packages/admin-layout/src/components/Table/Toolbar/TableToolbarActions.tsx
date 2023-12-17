import React, {memo, useMemo} from 'react'
import {Button, ButtonProps, Chip, Stack, Typography} from "@mui/material";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {ChildrenProps, ConditionContainer, Search} from "mui-react-common";
import {deepmerge} from "@mui/utils";
import Box from "@mui/material/Box";
import {useTranslation} from "react-i18next";
import {ButtonLink} from "security";
import {useTableSearch} from "../hooks";
import {TablaHeaderOptions} from "../interfaces";
import {FilterList} from "../../Filters/FilterList";


const defaultAction: TablaHeaderOptions = {
    filter: {
        disabled: true
    },
    search: {
        placeholder: "search"
    },
    actions: {
        create: true,
        createAction: () => {
        },
        createText: 'add'
    }
}


type TablaHeaderProps = ChildrenProps & {
    settings?: TablaHeaderOptions,
}

const searchSx = {
    flexGrow: 1
}
const directionResponsive: { [key: string]: "row" | "column" } = {
    xs: 'column',
    sm: 'row'
}


type ActionProps = Omit<ButtonProps,'action'> & {
    action?: (() => void),
}
type AddActionProps = Omit<ButtonProps,'action'> & {
    action?: (() => void) | string,
}


export const AddButtonBase = ({action, ...props}: AddActionProps) => {

    if (typeof action === 'string') { // @ts-ignore
        return <ButtonLink  {...props} to={action as string}/>;
    }

    return <Button {...props} onClick={action}/>;
}

export const AddButton = ({action, children, ...props}: AddActionProps) => {
    const {t} = useTranslation('common');

    return (<AddButtonBase variant={'contained'} startIcon={<AddOutlinedIcon/>}
                           action={action} {...props}>
        <span>{children || t('add')}</span>
    </AddButtonBase>)
}

export const ImportButton = ({action, children, ...props}: ActionProps) => {
    const {t} = useTranslation('common');

    return (<Button variant={'outlined'}
                    onClick={action}
                    startIcon={<FileUploadOutlinedIcon/>}
                    {...props}>
        <span>{children || t('import')}</span>
    </Button>)
}

export const ExportButton = ({action, children, ...props}: ActionProps) => {
    const {t} = useTranslation('common');

    return (<Button variant={'outlined'}
                    onClick={action}
                    startIcon={<FileDownloadOutlinedIcon/>}
                    {...props}>
        <span>{children || t('export')}</span>
    </Button>)
}


const TableToolbarActions = ({settings = {}, children}: TablaHeaderProps) => {
    const settingActions: TablaHeaderOptions = useMemo(() => deepmerge(defaultAction, settings), [settings]);
    const {t} = useTranslation('common');
    const {setQuery} = useTableSearch();
    return (
        <Stack direction={directionResponsive} spacing={{xs: 1, md: 2}} sx={{width: '100%'}}>
            <FilterList flexGrow={1}>
                <Box sx={searchSx}>
                    <ConditionContainer active={!settingActions?.search?.disabled}>
                        <Search placeholder={t(settingActions.search?.placeholder || 'search')}
                                size={"small"}
                                onSearch={setQuery}
                                fullWidth/>
                    </ConditionContainer>
                </Box>
            </FilterList>
            <ConditionContainer active={!settingActions.filter?.disabled}>
                <div>
                    <Button variant={'outlined'} className='responsive-text' startIcon={<FilterListOutlinedIcon/>}
                            endIcon={<Chip label={
                                <Typography
                                    sx={{
                                        fontSize: '10px',
                                        fontWeight: '600'
                                    }}
                                >
                                    5
                                </Typography>
                            } size='small' color='primary'/>}>
                        <span>{t('filter')}</span>
                    </Button>
                </div>
            </ConditionContainer>

            {
                children
            }

            <ConditionContainer active={settingActions.actions?.import}>\
                <div>
                    <ImportButton action={settingActions.actions?.importAction}/>
                </div>
            </ConditionContainer>

            <ConditionContainer active={settingActions.actions?.export}>
                <div>
                    <ExportButton action={settingActions.actions?.exportAction}/>
                </div>
            </ConditionContainer>

            <ConditionContainer active={settingActions.actions?.create}>
                <div>
                    <AddButton variant={'contained'} startIcon={<AddOutlinedIcon/>}
                               action={settingActions.actions?.createAction}>
                        <span>{t(settingActions.actions?.createText || 'add')}</span>
                    </AddButton>
                </div>
            </ConditionContainer>

        </Stack>
    );

}

export default memo(TableToolbarActions);