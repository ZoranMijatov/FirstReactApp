import styled from "styled-components";

export const RecieptText = styled.p`
    font-size: ${props => props.IsImportantNumber ? "23px" : "18px"};
    font-weight: ${props => props.IsImportant ? "bold" : "normal"};
    color: ${props => props.IsImportant ? "#fff" : "#a9a9a9"};
    color: ${props => props.isMediumImportance ? "#fff" : "null"};
`