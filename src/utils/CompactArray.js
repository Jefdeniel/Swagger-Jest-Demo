// export const compactArray = (array) => {
//   // Performing filtration
//   return array.filter((elm) => elm);
// };

export const compactArray = (array) => {
  return array.filter(
    (value) =>
      value !== null &&
      value !== undefined &&
      value !== false &&
      value !== 0 &&
      value !== "" &&
      value !== NaN
  );
};
