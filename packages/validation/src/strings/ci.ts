import * as Yup from 'yup';

export const isCubaCI = (value = ''): boolean => {
    if (value.length === 11 && value.match(/^\d{11}$/)) {
        const month = Number(value.substring(2, 4));
        const day = Number(value.substring(4, 6));
        if (month > 12 || month < 1)
            return false
        if (day > 31 || day < 1)
            return false
        return true;
    }
    return false;
}

Yup.addMethod(Yup.string, 'cubaCi', function (msg = 'invalidCi') {
    return this.test({
        name: 'cubaCi',
        message: msg,
        test: value => isCubaCI(value)
    },);
});