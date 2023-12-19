import { lazy } from "react";

const loadTermsConditions = () => import("./TermsConditions");
export const TermsConditions = lazy(loadTermsConditions);
