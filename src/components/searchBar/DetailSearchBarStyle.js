import styled from "styled-components";
import icon_search from '../../asset/search.png';

const ButtonStyle = styled.button`
    &:hover{
        opacity:0.8;
    }
    border: none;
    background-color: transparent;
    font-size: 11px;
    color: #B5B5B5;
`;

export const StyledGreyDiv = styled.div`
    width: 500px;
    height: 74px;
    background-color: #F8F8F8;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StyledSearchBar = styled.div`
    width: 426.44px;
    height: 33.09px;
    background-color: #FFFFFF;
    background-size: 426.44px, 33.09px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledInput = styled.input`
    type: text;
    width: 380px;
    border: none;
    font-size: 12px;

    ::placeholder {
        color: #A5A5A5;
    }
`;
export const StyledSearchButton = styled(ButtonStyle)`
    width: 14.64px;
    height: 14.61px;
    background-image: url(${icon_search});
    background-size: 14.64px, 14.61px;
    margin-left: 10px;
`;