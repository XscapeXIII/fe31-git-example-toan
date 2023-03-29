import { createAction } from "@reduxjs/toolkit";

export const getAddToDoAction = createAction("ADD_TO_DO");
export const getEditToDoAction = createAction("EDIT_TO_DO");
export const getRemoveToDoAction = createAction("REMOVE_TO_DO");
