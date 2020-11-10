import styled from "styled-components"

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || 'auto'};
  margin: 0 auto;
`

