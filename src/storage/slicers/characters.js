import { createSelector, createSlice } from '@reduxjs/toolkit';
import { dbIdSelector } from './database';

const DEFAULT_LIST_STATE = {
  isLoading: false,
  hasError: false,
  data: [],
  meta: {}
};

const initialState = {
  list: DEFAULT_LIST_STATE
};

// slicer
const NAME = 'Character';
export const CharacterSlice = createSlice({
  name: NAME,
  initialState,
  reducers: {
    listFetch: (state, action) => {
      const oldState = state.list;
      state.list = {
        ...oldState,
        data: [],
        isLoading: true,
      };
    },
    listSuccess: (state, action) => {
      const { data, meta } = action.payload;
      const characters = data || [];
      state.list = {
        ...state.list,
        data: characters,
        meta,
        isLoading: false,
        hasError: false
      };
    },
    listError: (state, action) => {
      const { meta, error } = action.payload;
      state.list = {
        ...state.list,
        meta,
        isLoading: false,
        hasError: true,
        error
      };
    },
    detailFetch: (state, action) => {
      state.currentId = action.payload;
    }
  }
});

// selectors
export const characterListStateSelector = createSelector(
  (state) => [state.character],
  ([character]) => character?.list || DEFAULT_LIST_STATE
);

export const characterListSelector = createSelector(
  (state) => [state.character],
  ([character]) => character?.list?.data || []
);

export const characterDetailSelector = (state, id) => dbIdSelector(state, { modelName: 'character', id }) || {};

// actions
export const {
  listFetch,
  listSuccess,
  listError,
  detailFetch,
} = CharacterSlice.actions;

export default CharacterSlice.reducer;
