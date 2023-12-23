import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {REHYDRATE, PERSIST, REGISTER, persistReducer, persistStore} from 'redux-persist';
import rootReducer from './rootReducer';

const persistConfig = {key: 'root', storage: AsyncStorage}; //ADD PROPERTY whitelist: ['REDUCER YOU WANT TO ONLY STORE']
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: {rootReducer: persistedReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
