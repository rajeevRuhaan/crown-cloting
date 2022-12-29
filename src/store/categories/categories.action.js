import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE } from "./categories.types";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  );
export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);
export const fetchCategoriesAsync = () => async (dispatch) => {
  console.log("fetchcategories async fired ");
  dispatch(fetchCategoriesStart());
  console.log("fetchcategoriesstart fired ");

  try {
    const categoriesArray = await getCategoriesAndDocuments("categories");

    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
