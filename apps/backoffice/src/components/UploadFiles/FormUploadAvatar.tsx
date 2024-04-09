import {memo, useEffect, useRef, useState} from 'react'
import {useUploadImage} from "components/UploadFiles/useUploadImage";
import {FormFieldControl, FormTextFieldProps} from "@dfl/mui-react-common";
import AvatarUploadFile from "components/UploadFiles/AvatarUploadFile";
import {ImageData} from "interfaces/images";

type FormUploadAvatarProps = {
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

export const UploadAvatar = ({value = defaultData, size, onChange, loading, alt}: FormUploadAvatarProps) => {
    const [innerValue, setValue] = useState<string>()
    const {isLoading, upload, data} = useUploadImage()
    const chnage = useRef(onChange)

    useEffect(() => {
        chnage.current = onChange;
    }, [onChange])

    const reactSize = defaultSize(size);

    useEffect(() => {
        setValue(typeof value === "string" ? value : reactSize > 150 ? value?.image : value?.thumb);
    }, [value, reactSize])

    useEffect(() => {
        if (data?.thumb) {
            let prev: any;
            setValue(prevState => {
                prev = prevState;
                return data?.thumb
            });
            const promise = chnage.current?.({target: {value: data}});
            if (promise?.catch) {
                promise.catch(e => setValue(prev))
            }
        }
    }, [data])


    return (
        <AvatarUploadFile
            alt={alt}
            src={innerValue}
            size={reactSize}
            isLoading={isLoading || Boolean(loading)}
            handleAvatarOnChange={upload}
        />
    );
}

const FormUploadAvatar = (props: FormTextFieldProps) => {
    return <FormFieldControl {...props} Component={UploadAvatar}/>;
};


export default memo(FormUploadAvatar);