import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "store/redux/feedback/feedbackSlice"

import Button from "components/Button/Button"

import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonWithCount,
  Count,
} from "./styles"

function Feedback() {
  const dispatch = useAppDispatch()
  const likes = useAppSelector(feedbackSliceSelectors.likes)
  const dislikes = useAppSelector(feedbackSliceSelectors.dislikes)

  const onLike = () => {
    // метод like() - это actionCreator, который создает action
    console.log(feedbackSliceActions.like())
    dispatch(feedbackSliceActions.like())
  }

  const onDislike = () => {
    dispatch(feedbackSliceActions.dislike())
  }

  const resetResults = () => {
    dispatch(feedbackSliceActions.resetResults())
  }
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCount>
          <Button name="Like" onClick={onLike} />
          <Count>{likes}</Count>
        </ButtonWithCount>
        <ButtonWithCount>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislikes}</Count>
        </ButtonWithCount>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  )
}

export default Feedback
