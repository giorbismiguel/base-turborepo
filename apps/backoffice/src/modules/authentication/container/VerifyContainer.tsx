import {useTranslation} from "react-i18next";
import {H1, HandlerError, PageLoader,ConditionContainer} from "mui-react-common";
import {ERRORS, LOGIN_ERRORS} from "modules/authentication/constants";
import type {DFLError} from "security";
import { useVerify} from "security";
import {ResendVerifyLinkForm} from "modules/authentication/components/ResendVerifyLinkForm";
import {useMemo} from "react";


interface VerifyProps {
    verifyKey: string
}

const useMapError = (error: DFLError) =>
    useMemo(() => {
        if (error.name === "BADREQUESTERROR")
            error.reference = ERRORS.ACCOUNT_CONFIRMATION_FAILED;
        return error;
    }, [error]); ///backend issue

function Verify({verifyKey}: VerifyProps) {
    const {t} = useTranslation("authentication");
    const {error, isError} = useVerify(verifyKey);
    const mappedError = useMapError(error as DFLError);

    return (
        <div>
            <div className="flex items-center justify-center flex-col mb-8">
                {!isError && <PageLoader size={60}/>}
                <H1 textAlign="center">
                    {t(!isError ? "confirmation.loading" : "confirmation.title")}
                </H1>
            </div>
            <HandlerError error={mappedError} errors={LOGIN_ERRORS}/>
            <ConditionContainer active={Boolean(error)}>
                <ResendVerifyLinkForm/>
            </ConditionContainer>
        </div>
    );
}

export default Verify;
