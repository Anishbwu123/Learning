import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import themeReducer from '../../../Model/Theme/themeSlice';
import logger from 'redux-logger';
import authSlice from '../Slices/authSlice';
import { DrawerSlice } from '../../../Model/Drawer/DrawerSlice';

const appReducer = combineReducers({
  theme: themeReducer,
  auth: authSlice.reducer,
  drawer: DrawerSlice.reducer
  // category: categorySlice.reducer,
  // service: serviceSlice.reducer,
  // product: productSlice.reducer,
  // post: postSlice.reducer,
  // payment: paymentSlice.reducer
});

const rootReducer: Reducer = (state: RootState, action) => {
  if (action.type === 'resetRedux/resetReduxState') {
    state = {} as RootState;
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appReducer>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
