// import { useEffect, useState } from "react";

// export default function useLocalStorage(key, defaultValue) {
//   const [value, setValue] = useState(() => {
//     const storedValue = localStorage.getItem(key);
//     if (storedValue) {
//       return JSON.parse(storedValue);
//     }

//     return defaultValue;
//   });

//   useEffect(() => {
//     if (value === undefined) {
//       return;
//     } else {
//       localStorage.setItem(key, JSON.stringify(value));
//     }
//   }, [value, setValue]);
// }
