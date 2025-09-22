import { createAppSlice } from "store/createAppSlice"

import { FeedbackInitialState } from "./types"

const feedbackInitialState: FeedbackInitialState = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    like: create.reducer((state: FeedbackInitialState) => {
      state.likes = state.likes + 1
    }),
    dislike: create.reducer((state: FeedbackInitialState) => {
      state.dislikes = state.dislikes + 1
    }),
    // resetResults: create.reducer((state: FeedbackInitialState) => {
    //   state.dislikes = 0
    //   state.likes = 0
    // }),
    resetResults: create.reducer(() => feedbackInitialState),
  }),
  selectors: {
    likes: (state: FeedbackInitialState) => {
      return state.likes
    },
    dislikes: (state: FeedbackInitialState) => {
      return state.dislikes
    },
  },
})

export const feedbackSliceActions = feedbackSlice.actions

export const feedbackSliceSelectors = feedbackSlice.selectors
