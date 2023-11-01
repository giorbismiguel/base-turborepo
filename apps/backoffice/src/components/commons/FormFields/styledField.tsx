import {Theme} from "@mui/material";

export type StyledFieldProps = {
    dark?: boolean
}
export const styledField = ({
                                theme,
                                dark,
                            }: StyledFieldProps & { theme: Theme }) => dark ? (
    {
        "&:hover, & .MuiOutlinedInput-root:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main
            }
        },
        "&.MuiOutlinedInput-input,& .MuiOutlinedInput-input": {
            fontSize: 12,
            minHeight: 20,
            fontWeight: 500,
            color: theme.palette.text.primary
        },
        "&.MuiOutlinedInput-notchedOutline,& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderWidth: "1px !important"
        },
        "&.MuiInputBase-root, & .MuiInputBase-root": {
            backgroundColor: theme.palette.mode === "light" ? theme.palette.darkField
                || '#e5eaf2' : theme.palette.divider
        }
    }) : {}