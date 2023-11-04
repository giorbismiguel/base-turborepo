// Check for exact length of string or number
import * as Yup from 'yup';

export const REGULAR_EXPRESSION = {
    PHONE: /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
};

Yup.addMethod(Yup.string, 'phone', function (msg = 'invalidPhone') {
    return this.trim().matches(REGULAR_EXPRESSION.PHONE, {
        excludeEmptyString: true,
        message: msg
    }).max(15, msg)
});