import { createSelector, createSlice } from '@reduxjs/toolkit';
import { take, unionBy } from 'lodash-es';
import { dbIdSelector } from './database';

const DEFAULT_LIST_STATE = {
  isLoading: false,
  fetchingMore: false,
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
      const { isClearing, isReFetch } = action.payload;
      const oldState = state.list;
      const oldData = isReFetch ? [] : isClearing ? take(oldState?.data, 20) : oldState.data;
      state.list = {
        ...oldState,
        data: oldData,
        isLoading: isClearing || isReFetch,
        fetchingMore: !isClearing && !isReFetch
      };
    },
    listSuccess: (state, action) => {
      const { data, meta } = action.payload;
      const characters = data || [];
      const oldMaterials = state.list?.data || [];
      state.list = {
        ...state.list,
        data: unionBy(oldMaterials, characters, 'id'),
        meta,
        isLoading: false,
        fetchingMore: false,
        hasError: false
      };
    },
    listError: (state, action) => {
      const { meta, error } = action.payload;
      state.list = {
        ...state.list,
        meta,
        isLoading: false,
        fetchingMore: false,
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
