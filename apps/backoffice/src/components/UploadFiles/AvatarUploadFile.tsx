import {ChangeEvent, memo, useRef} from 'react'
import AvatarUploadBase, {AvatarUploadBaseProps} from "components/UploadFiles/AvatarUploadBase";

type AvatarUploadProps = Omit<AvatarUploadBaseProps, 'onClick'> & {
    handleAvatarOnChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const AvatarUploadFile = ({
                              handleAvatarOnChange,
                              ...props
                          }: AvatarUploadProps) => {

    const hiddenFileInput = useRef<HTMLInputElement>(null)
    const handleUploadClick = () => {
        hiddenFileInput?.current?.click()
    }

    return (
        <>
            <AvatarUploadBase {...props} onClick={handleUploadClick}/>
            <input
                type="file"
                hidden
                ref={hiddenFileInput}
                accept="image/png, image/gif, image/jpeg"
                onChange={handleAvatarOnChange}
            />
        </>
    )
}

export default memo(AvatarUploadFile);