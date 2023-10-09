import { createSlice } from "@reduxjs/toolkit";

const translatorSlice = createSlice({
  name: "flags",
  initialState: {
    value: {
      heading: {
        en: "Here you can compute LCD and GCD",
        ru: "Здесь вы можете вычислить НОК и НОД",
        pl: "Tutaj możesz obliczyć NWW i NWD",
      },
      placeholder: {
        en: "type numbers and click enter",
        ru: "напиши числа и нажми enter",
        pl: "napisz liczbę i nacisnij enter",
      },
      add: {
        en: "add number",
        ru: "добавить число",
        pl: "dodać liczbę",
      },
      delete: {
        en: "delete last number",
        ru: "удалить последнее число",
        pl: "usunąć ostatni numer",
      },
      trash: {
        en: "delete all numbers",
        ru: "удалить все числа",
        pl: "usuń wszystkie liczby",
      },
      buttonCalculate: {
        en: "click to calculate",
        ru: "нажми чтобы вычислить",
        pl: "kliknij aby obliczyć",
      },
      promptForUser: {
        en: "you can type only integer greater then one",
        ru: "ты можешь вводить только целые числа более единицы",
        pl: "możesz wprowadzić liczbę całkowitą większą niż jedynka",
      },
      headingCheckBoxContainer: {
        en: "what do you want to solve?",
        ru: "что хочешь вычислись?",
        pl: "co chcesz obliczyć?",
      },
      textLCM: {
        en: "LCM",
        ru: "НОK",
        pl: "NWW",
      },
      textGCD: {
        en: "GCD",
        ru: "НОД",
        pl: "NWD",
      },
      primeFactorization: {
        en: "decompose the numbers into prime factors:",
        ru: "разложим числа на простые множители:",
        pl: "rozkładamy liczby na czynniki pierwsze:",
      },
      canonicalFactorization: {
        en: "create canonical factorizations for each of the given numbers:",
        ru: "создаем канонические разложения каждого из указанных чисел:",
        pl: "tworzymy rozkłady kanoniczne każdej z podanych liczb:",
      },
      bottomAnswer: {
        en: "answer:",
        ru: "ответ:",
        pl: "odpowiedź:",
      },
    },
  },
  reducers: {},
});

export default translatorSlice.reducer;
