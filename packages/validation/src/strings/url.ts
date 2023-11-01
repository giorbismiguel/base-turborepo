// Check for exact length of string or number
import * as Yup from 'yup';

export const DOMAIN_NAME = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+/;


Yup.addMethod(Yup.string, 'domainName', function (msg = 'invalidDomain') {
    return this.trim().matches(DOMAIN_NAME, msg)
});
