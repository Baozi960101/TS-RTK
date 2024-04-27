import { configureStore } from '@reduxjs/toolkit'
import { homeApi } from 'services/homeServices'
import friendReducer from 'slice/friendsSlice'
// ...
export const store = configureStore({
  reducer: {
    friendReducer,
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store