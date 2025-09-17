import styled from "@emotion/styled"

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  min-width: 400px;
  max-width: 1000px;
  height: fit-content;
  border: 1px solid black;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
`

export const ButtonControl = styled.div`
  min-width: 100px;
  max-width: 100px;
`

export const Count = styled.p`
  font-size: 40px;
  font-weight: bold;
`
