import { useSelector } from "react-redux";

export default function translator(element: string) {
  const currentLanguage = useSelector(
    (state: any) => state.currentLanguage.value
  );
  const placeholder = useSelector(
    (state: any) => state.translator.value[element][currentLanguage]
  );
  return placeholder;
}
