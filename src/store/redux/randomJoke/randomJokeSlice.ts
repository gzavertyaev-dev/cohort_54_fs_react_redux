import axios from "axios"
import { v4 } from "uuid"

import { createAppSlice } from "store/createAppSlice"

import { RandomJoke, RandomJokeSliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const randomJokeInitialState: RandomJokeSliceState = {
  jokes: [],
  error: undefined,
  isFetching: false,
}

export const randomJokeSlice = createAppSlice({
  name: "RANDOM_JOKE",
  initialState: randomJokeInitialState,
  reducers: create => ({
    getRandomJokes: create.asyncThunk(
      async (dataFromComponent: any, { rejectWithValue }) => {
        console.log(dataFromComponent)
        // Пример как делать POST запрос
        // const response = await axios.post(
        //   "https://official-joke-api.appspot.com/random_joke",
        //   dataFromComponent,
        // )

        try {
          const response = await axios.get(
            "https://official-joke-api.appspot.com/random_joke",
          )

          return response
        } catch (error) {
          console.log(error)
          return rejectWithValue(error)
        }
        // Без обрабоки try ctacht
        // const response = await axios.post(
        //   "https://official-joke-api.appspot.com/random_joke",
        //   dataFromComponent,
        // )

        // return response
      },
      {
        pending: (state: RandomJokeSliceState) => {
          state.error = undefined
          state.isFetching = true
        },
        fulfilled: (state: RandomJokeSliceState, action) => {
          console.log(action)
          state.isFetching = false
          if (action.payload) {
            const jokeData = action.payload.data
            console.log(action)
            state.jokes = [
              ...state.jokes,
              { joke: `${jokeData.setup} ${jokeData.punchline}`, id: v4() },
            ]
          }
        },
        rejected: (state: RandomJokeSliceState, action: any) => {
          console.log(action)
          if (action.payload) {
            state.isFetching = false
            state.error = action.payload.message
          } else {
            state.error = "Some Networl Error"
          }
        },
      },
    ),
    deleteJoke: create.reducer(
      (state: RandomJokeSliceState, action: PayloadAction<string>) => {
        console.log(action.payload)
        state.jokes = state.jokes.filter((joke: RandomJoke) => {
          return joke.id !== action.payload
        })
      },
    ),
    deleteAllJokes: create.reducer(() => randomJokeInitialState),
  }),
  selectors: {
    jokesData: (state: RandomJokeSliceState) => state,
  },
})

export const randomJokesActions = randomJokeSlice.actions

export const randomJokesSelectors = randomJokeSlice.selectors
