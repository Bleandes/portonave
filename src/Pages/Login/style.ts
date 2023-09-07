import styled from "styled-components";

const globalStyles = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export  const ChildrenComponentLogo = styled(globalStyles)`
    color: red;
    display: flex;
    flex-direction: column;
`;


export  const LogoComponent = styled.img`
    width: 30rem;
    height: 30rem; 
`;

// export const DescriptionLogo = styled.h1`
// font-size: 4.8rem;
// margin: 0;
// `

export const ChildrenComponentInputs = styled(globalStyles)`
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;


export const ContainerLogin = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerTitle = styled.div`
   margin: -14rem;
   color: #f1f1f1;
`;

export const ButtonLogin = styled.button`
    color: #f1f1f1;
    background-color: #eb1c24;
    width: 12.188rem;
    height: 2.375rem;
    border: none;
    border-radius: 20px;
    margin-top: 2rem;

    &:hover{
      background-color: #c52329;
    }

   &:active{
      background-color: #ff4d53;
    }
`