import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './slicers/characters';
import dbReducer from './slicers/database';
import { createEpicMiddleware } from 'redux-observable';
import epic from './epic';

const epicMiddleware = createEpicMiddleware();

export default configureStore({
  reducer: {
    db: dbReducer,
    character: characterReducer
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic);
