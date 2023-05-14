import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactConfigure = { key: 'contacts', storage, blacklist: ['filter'] };
const rootReducer = combineReducers({
  contacts: persistReducer(contactConfigure, contactsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
