// Check for exact length of string or number
import * as Yup from 'yup';

export const scorePassword = (pass?: string, _variations = {}) => {
  let score = 0;
  if (!pass || !pass.trim())
    return score;

  // award every unique letter until 5 repetitions
  const letters = {};
  for (let i = 0; i < pass.length; i++) {
    // @ts-ignore
    letters[pass[i]] = (letters[pass[i]] || 0) + 1;
    // @ts-ignore
    score += 5.0 / letters[pass[i]];
  }

  const extraVariations = Object.keys(_variations).reduce((obj, key) => {
    // @ts-ignore
    obj[key] = _variations[key].test(pass);
    return obj;
  }, {});

  // bonus points for mixing it up
  let variations = {
    digits: /\d/.test(pass),
    lower: /[a-z]/.test(pass),
    upper: /[A-Z]/.test(pass),
    nonWords: /\W/.test(pass),
    ...extraVariations
  };

  let variationCount = 0;
  for (let check in variations) {
    // @ts-ignore
    variationCount += (variations[check] === true) ? 1 : 0;
  }
  score += (variationCount - 1) * 10;

  return parseInt(String(score));
};


Yup.addMethod(Yup.string, 'password', function(checkValue, msg = 'passwordStrength') {
  return this.test({
    name: 'password',
    message: msg,
    test: value => scorePassword(value) > checkValue
  });
});