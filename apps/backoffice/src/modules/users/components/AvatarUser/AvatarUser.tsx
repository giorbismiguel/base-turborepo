import { memo, useMemo } from 'react'
import { InterfaceUser } from "modules/users/interfaces/IUser";
import { UploadAvatar } from "components/UploadFiles/FormUploadAvatar";
import { ImageData } from "interfaces";
import { useUpdateUser } from "modules/users/hooks/useUpdateUser";

type AvatarUserProps = {
    user: InterfaceUser
}

const AvatarUser = ({ user }: AvatarUserProps) => {
    const { mutateAsync, isLoading } = useUpdateUser(user);

    const avatar: ImageData = useMemo(() => {
        return {
            thumb: user?.avatar || '',
            image: user?.avatarOriginal || ''
        }
    }, [user?.avatar, user?.avatarOriginal]);

    const handleUpdateAvatar = ({ target: { value } }: { target: { value: ImageData } }) => {
        return mutateAsync({
            avatar: value.thumb,
            avatarOriginal: value.image
        })
    }

    return (
        <div>
            <UploadAvatar value={avatar} onChange={handleUpdateAvatar} loading={isLoading} />
        </div>
    );

}

export default memo(AvatarUser);