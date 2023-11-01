import {lazy} from "react";

const loadLogin = () => import("./Login");
export const Login = lazy(loadLogin);

const loadSignUp = () => import("./SignUp");
export const SignUp = lazy(loadSignUp);


const loadVerify = () => import("./Verify");
export const Verify = lazy(loadVerify);

const loadRecoveryInit = () => import("./RecoveryInit");
export const RecoveryInit = lazy(loadRecoveryInit);

const loadRecoveryFinish = () => import("./RecoveryFinish");
export const RecoveryFinish = lazy(loadRecoveryFinish);
