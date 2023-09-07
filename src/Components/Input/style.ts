import styled from "styled-components";

export const InputText = styled.input`
    height: 2.688rem;
    width: 19.375rem;
    border-radius: 2rem;
    border: none;
    outline: 0;
    background-color: #ececec;
    text-align: left; 
    padding: 5px 15px;
`;

export const InputCheckbox = styled.input.attrs({type: 'radio'})`
    display: flex;
    text-align: left;
    padding: 5px 15px;
`;

export const InputCheckboxText = styled.p`
    color: black;
    display: flex;
`;

export const InputSelect = styled.select`
    height: 2.688rem;
    width: 19.375rem;
    border-radius: 2rem;
    border: none;
    outline: 0;
    background-color: #ececec;
    text-align: left; 
    padding: 5px 15px;
`;

export const InputOption = styled.option`
color: black;
`;


export const ContainerCheckbox = styled.div`
    height: 2.688rem;
    width: 19.375rem;
    font-size: 1.1rem;
    display: flex;
    justify-content: start;
    margin-left: 0.4rem;
    gap: 0.8rem;
    align-items: center;
`;

export const ContainerCheckboxPai = styled.div`
    display: flex;
    flex-direction: column;
`;





export const Text = styled.p<{colorLabelDefault?: boolean;}>`
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    margin: 0;
    color: ${props => props.colorLabelDefault ? '#3d3d3d' : '#f1f1f1' };
    margin-left: 1.4rem;
`;

export const Container = styled.div<{ marginTop?: number; }>`
    margin-top: ${props => props.marginTop != undefined ? `${props.marginTop}rem` : 0};
`;