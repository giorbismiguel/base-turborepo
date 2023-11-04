import React,{memo, ReactNode, useMemo} from 'react'
import Timeline from '@mui/lab/Timeline';
import MuiTimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import MuiTimelineDot from '@mui/lab/TimelineDot';
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";


export const TimelineItem = styled(MuiTimelineItem)(() => ({
    '&:before': {
        display: 'none'
    }
}));
export const TimelineDot = styled(MuiTimelineDot)(() => ({
    border: 'none',
    svg: {
        fontSize: 19,
        // marginTop:'-50%'
    }
}));

export type ProcessItem = {
    title: ReactNode
    description: ReactNode
    icon: ReactNode
}

export type ProcessTimeLineProps = {
    process: ProcessItem[],
    np?: boolean,
}

const ProcessTimeLine = ({process, np}: ProcessTimeLineProps) => {
    const style = useMemo(() => np ? {paddingX: 0} : {}, [np])
    return (
        <Timeline sx={style}>
            {
                process?.map((p, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot variant={"outlined"} color={'primary'}>
                                {p.icon}
                            </TimelineDot>
                            {(index + 1) !== process.length && <TimelineConnector sx={{width: '1px'}}/>}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h4" mb={1}>
                                {p.title}
                            </Typography>
                            {p.description && <Typography mb={2}> {p.description}</Typography>}
                        </TimelineContent>
                    </TimelineItem>
                ))
            }
        </Timeline>
    );

}

export default memo(ProcessTimeLine);