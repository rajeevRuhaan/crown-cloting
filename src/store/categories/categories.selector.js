import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

/* export const selectCategoriesMap = (state) => {
  console.log("selector categories fired");
  return state.categories.categories.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
}; */
