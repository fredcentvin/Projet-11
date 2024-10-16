import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../redux/Reducer"

export const store = configureStore({
    reducer: rootReducer,
}
)
