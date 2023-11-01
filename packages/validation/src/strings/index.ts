// Check for exact length of string or number
import * as Yup from 'yup';
import './phone';
import './ci';
import './url';

Yup.addMethod(Yup.string, 'name', function (msg = 'invalidValue') {
    return this.matches(/^[A-Za-z| |ñ|Ñ|À-ÿ]*$/, {excludeEmptyString: true, message: msg});
});


Yup.addMethod(Yup.string, 'password', function (msg = 'passwordStrength') {
    return this.min(6, msg);
});