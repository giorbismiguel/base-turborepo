import React, { memo } from 'react'
import { DeleteIconWithTooltip } from '../Icons';
import DeleteDialogAction from './DeleteDialogAction';

type DeleteActionProps = {
    onDelete?: () => void,
    isLoading?: boolean,
    error?: any,
    errors?: any,
    isOpen: boolean,
    onClose: () => void
    onOpen: () => void,
    title?: string,
    confirmation?: string,
}

const DeleteAction = ({
    isOpen,
    onClose,
    onOpen,
    error,
    errors,
    title,
    confirmation,
    isLoading,
    onDelete
}: DeleteActionProps) => {

    return (
        <>
            <DeleteIconWithTooltip onClick={onOpen} />
            
            <DeleteDialogAction open={isOpen}
                error={error}
                errors={errors}
                title={title}
                confirmation={confirmation}
                onClose={onClose}
                isLoading={isLoading}
                onDelete={onDelete}
            />
        </>
    );

}

export default memo(DeleteAction);