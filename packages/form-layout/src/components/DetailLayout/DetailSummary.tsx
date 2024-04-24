import React, {memo} from 'react'
import PaperDetail, {PaperDetailProps} from "./PaperDetail";

type SummaryProps = PaperDetailProps & {
    width?: number | {
        md: number | string
        lg: number | string
        xl: number | string
    }
}

const DetailSummary = ({width = 320, children, sx, ...props}: SummaryProps) => {
    const widthStyle = typeof width === 'object' ? width : {md: width};
    return (
        <PaperDetail {...props} sx={{width: widthStyle, minWidth: widthStyle, ...sx}}>
            {children}
        </PaperDetail>
    );

}

export default memo(DetailSummary);
