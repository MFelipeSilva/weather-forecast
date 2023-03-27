import { createStore, Store } from "redux";

import { rootReducer } from "./rootReducer";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store: Store = createStore(rootReducer);
