import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=MuseoModerno:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: "Inter", sans-serif;
    }
    body {
        // color: #6c7983;
        // font-size: 1.2rem;
         color: #6c7983;
    font-size: 1.2rem;
    &::-webkit-scrollbar {
        width: 7px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #27ae60;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: #ededed;
    }
    }
`;
// export default GlobalStyle;

export default GlobalStyle;







