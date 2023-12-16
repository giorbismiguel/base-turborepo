import React, {memo} from "react";
import {SentState} from "modules/authentication/components/SentState";


interface RecoveryPasswordSentProps {
    email: string,
    reset: () => void,
    isLoading: boolean,
}
function RecoveryPasswordSent({email, reset, isLoading}: RecoveryPasswordSentProps) {
    return (
        <SentState
            action={reset}
            buttonText="newLink"
            email={email}
            error={null}
            isLoading={isLoading}
            message="authentication:recovery.sentSubtext"
        />
    );
}

export default memo(RecoveryPasswordSent);
