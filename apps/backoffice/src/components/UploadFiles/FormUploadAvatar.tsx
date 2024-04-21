import {memo, useEffect, useRef, useState} from 'react'
import {useUploadImage} from "components/UploadFiles/useUploadImage";
import type { FormTextFieldProps} from "mui-react-common";
import {FormFieldControl} from "mui-react-common";
import AvatarUploadFile from "components/UploadFiles/AvatarUploadFile";
import type {ImageData} from "interfaces/images";

interface FormUploadAvatarProps {
    value: ImageData | string | undefined,
    alt?: string,
    size?: number | 'small' | 'large',
    onChange: (event: any) => void,
    loading?: boolean
}

const defaultData = {
    image: '',
    thumb: '',
}

const defaultSize = (size: string | number | undefined): number => {
    if (size === "small")
        return 90
    if (size === "large")
        return 115
    return Number(size) || 90;
}

export function UploadAvatar({value = defaultData, size, onChange, loading, alt}: FormUploadAvatarProps) {
    const [innerValue, setValue] = useState<string>()
    const {isLoading, upload, data} = useUploadImage()
    const chnage = useRef(onChange)

    useEffect(() => {
        chnage.current = onChange;
    }, [onChange])

    const reactSize = defaultSize(size);

    useEffect(() => {
        // eslint-disable-next-line no-nested-ternary
        const val = typeof value === "string" ? value : reactSize > 150 ? value?.image : value?.thumb
        
        setValue(val);
    }, [value, reactSize])

    useEffect(() => {
        if (data?.thumb) {
            let prev: any;
            setValue(prevState => {
                prev = prevState;
            
                return data?.thumb
            });

            const promise = chnage.current({target: {value: data}});
            // @ts-ignore
            if (promise?.catch) {
                // @ts-ignore
                promise.catch(_e => setValue(prev))
            }
        }
    }, [data])


    return (
        <AvatarUploadFile
            alt={alt}
            handleAvatarOnChange={upload}
            isLoading={isLoading || Boolean(loading)}
            size={reactSize}
            src={innerValue}
        />
    );
}

function FormUploadAvatar(props: FormTextFieldProps) {
    return <FormFieldControl {...props} Component={UploadAvatar}/>;
}


export default memo(FormUploadAvatar);