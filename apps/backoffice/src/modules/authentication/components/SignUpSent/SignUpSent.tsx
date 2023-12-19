import React, { memo } from "react";
import useResendConfirmationForm from "modules/authentication/hooks/useResendConfirmationForm";
import { SentState } from "modules/authentication/components/SentState";

type SignUpSentProps = {
  email: string;
};

const SignUpSent = ({ email }: SignUpSentProps) => {
  const { mutateAsync, isLoading, error } = useResendConfirmationForm();

  const handleSend = () => mutateAsync({ identifier: email });

  return (
    <SentState
      message="authentication:successSignUp"
      buttonText="resend"
      error={error}
      isLoading={isLoading}
      email={email}
      action={handleSend}
    />
  );
};

export default memo(SignUpSent);
