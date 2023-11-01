import {memo} from "react";
import {useParams} from "react-router";
import VerifyContainer from "modules/authentication/container/VerifyContainer";

const Verify = () => {
  let params = useParams();

  return <VerifyContainer verifyKey={params.key as string}></VerifyContainer>;
};

export default memo(Verify);
