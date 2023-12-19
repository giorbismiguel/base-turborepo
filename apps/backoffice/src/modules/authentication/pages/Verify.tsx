import { memo } from "react";
import { useParams } from "react-router";
import VerifyContainer from "modules/authentication/container/VerifyContainer";

function Verify() {
  const params = useParams();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return <VerifyContainer verifyKey={params.key!} />;
}

export default memo(Verify);
