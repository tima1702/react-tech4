
// Тут Ничего Нету, не смотри сюда
// import { useEffect, useState } from 'react';
//
// export default function (key, defaultValue) {
//   let prevValue = defaultValue;
//
//   try {
//     const storageValue = localStorage.getItem(key);
//     if (storageValue) {
//       prevValue = JSON.parse(storageValue);
//     }
//   } catch (e) {
//   }
//
//   const [value, setValue] = useState(prevValue);
//
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [value]);
//
//   return [value, setValue];
// }
