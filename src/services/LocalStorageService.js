import { useEffect } from "react";

// const LocalStroageService = (storeKey, fallbackState) => {
//   const [value, setValue] = useState(
//     JSON.parse(localStorage.getItem(storeKey)) ?? fallbackState
//   );

//   useEffect(() => {
//     localStorage.setItem(storeKey, JSON.stringify(value));
//   }, [value, setValue]);
// };

// export default LocalStroageService;

export const LocalStroageService = ({ value, localStorageKey }) => {
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value, localStorageKey]);

  return;
};
