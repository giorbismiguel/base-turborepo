import React, {memo, useEffect, useMemo, useState} from 'react'
import TextField from "@mui/material/TextField";
import {FilterProps} from "../../types";
import {debounce} from "@mui/material";


const TextFilter = ({title, value = '', onChange, filter}: FilterProps) => {
    const [textValue, setTextValue] = useState<string>(value as string || '');

    useEffect(() => {
        setTextValue(value as string || '');
    }, [value])

    const update = useMemo(() => {
        return debounce(onChange, 400);
    }, [onChange])

    const handleChange = ({target: {value}}: any) => {
        setTextValue(value);
        update(value);
    };

    return (
        <TextField value={textValue}
                   onChange={handleChange}
                   label={title}
                   type={"search"}
                   size={'small'}
                   placeholder={filter.placeholder}/>
    );

}

export default memo(TextFilter);