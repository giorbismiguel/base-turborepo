import React, {memo} from 'react'
import PaperDetail, {PaperDetailProps} from "./PaperDetail";

type DetailContentProps = PaperDetailProps

const DetailContent = ({children, sx, ...props}: DetailContentProps) => {

    return (
        <PaperDetail {...props} sx={{flexGrow: 1,  minWidth: 0,...sx}}>
            {children}
        </PaperDetail>
    );

}

export default memo(DetailContent);
