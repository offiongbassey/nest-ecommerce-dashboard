import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from './features/userSlice';
import { TypedUseSelectorHook, useSelector } from "react-redux";

const persistConfig = {
    key: "root",
    storage,
  };
  
const persistedReducer = persistReducer(persistConfig, userReducer);
  
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: false
        }),
        devTools: true
});
  
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;