import Button from "components/Button/Button";

import { type FeedbackProps } from "./types";
import {
  FeedbackWrapper,
  FeedbackControl,
  Count,
  ButtonwithcountContainer,
} from "./styles";

function Feedback({
  like,
  dislike,
  onDislike,
  onLike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonwithcountContainer>
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonwithcountContainer>
        <ButtonwithcountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonwithcountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
