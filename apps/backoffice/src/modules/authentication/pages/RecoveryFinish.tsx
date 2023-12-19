import { memo } from "react";
import { useParams } from "react-router";
import ResetPasswordContainer from "../container/ResetPasswordContainer";

function RecoveryFinish() {
  const params = useParams();

  return <ResetPasswordContainer verifyKey={params.key!} />;
}

export default memo(RecoveryFinish);
