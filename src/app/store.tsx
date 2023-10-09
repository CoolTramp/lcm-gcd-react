import { configureStore } from "@reduxjs/toolkit";
import currendLanguageReducer from "../features/currentLanguage";
import allLangugesReducer from "../features/allLanguges";
import translatorReducer from "../features/translatorSlice";
import inputUserErrorReducer from "../features/inputUserError";
import primeFactorsReducer from "../features/answers/primeFactors";
import canonicalReducer from "../features/answers/canonicalString";
import lcmString from "../features/answers/lcmString";
import gcdString from "../features/answers/gcdString";
import gcdAnswerReducer from "../features/answers/gcdAnswer";
import lcmAnswerReducer from "../features/answers/lcmAnswer";
import checkboxLCMReducer from "../features/userCheckbox/checkboxLCM";
import checkboxGCDReducer from "../features/userCheckbox/checkboxGCD";

import userNumbersReducer from "../features/userNumbers";

export const store = configureStore({
  reducer: {
    currentLanguage: currendLanguageReducer,
    allLanguges: allLangugesReducer,
    translator: translatorReducer,
    userNumbers: userNumbersReducer,
    inputUserError: inputUserErrorReducer,
    primeFactors: primeFactorsReducer,
    canonical: canonicalReducer,
    lcm: lcmString,
    gcd: gcdString,
    lcmAnswer: lcmAnswerReducer,
    gcdAnswer: gcdAnswerReducer,
    checkboxGCD: checkboxGCDReducer,
    checkboxLCM: checkboxLCMReducer,
  },
});
