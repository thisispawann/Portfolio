import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({theme }) => theme.body};
        color: ${({theme }) => theme.text};
        /* transition: all 0.5s linear; */
        font-family: 'Raleway', sans-serif;
    }
    .navbar {
        background: ${({theme }) => theme.navbar};
        /* transition: all 0.5s linear; */
        color: ${({theme }) => theme.text};
        font-family: 'Raleway', sans-serif;
    }
    .home {
        background: ${({theme }) => theme.home};
        transition: all 0.5s linear;
        color: ${({theme }) => theme.text};
        font-family: 'Raleway', sans-serif;
    }
   
    .active{
        background: ${({theme }) => theme.active};
        transition: all 0.5s linear;
        color: ${({theme }) => theme.text};
        font-family: 'Raleway', sans-serif;
    }

    .first{
        background: ${({theme }) => theme.first};
        color: ${({theme }) => theme.textColors};
        transition: all 0.5s linear;
        font-family: 'Raleway', sans-serif;
    }

    .last{
        background: ${({theme }) => theme.last};
        transition: all 0.5s linear;
        color: ${({theme }) => theme.textColor};
        transition: all 0.5s linear;
        font-family: 'Raleway', sans-serif;
    }
    .social{
        background: ${({theme }) => theme.body};
        fill: ${({theme }) => theme.social};
        transition: all 0.1s linear;
        font-family: 'Raleway', sans-serif;
    }

    .heart{
        background: ${({theme }) => theme.body};
        color: ${({theme }) => theme.heart};
        transition: all 0.5s linear;
        font-family: 'Raleway', sans-serif;
    }

    .react{
        color: ${({theme }) => theme.react};
    }
    .btn-text{
        color: ${({theme }) => theme.btntext};
    }

    .fal {
        top: 1.09rem !important;
        right: 12rem !important;
        font-size: 1.3rem !important;
        z-index: 10;
        position: fixed;
        cursor: pointer;
    }

    .camp{
        background: ${({theme }) => theme.body};
        fill: ${({theme }) => theme.camp};
        transition: all 0.5s linear;
        font-family: 'Raleway', sans-serif;
    }
`;

export const lightTheme = {
    body: '#e9ecef !important',
     navbar: '#dee2e6 !important',
    // navbar: '#ba9256 !important', 
    // navbar: 'rgb(255, 201, 41) !important',
    text: '#000 !important',
    heart:'#FF5630 !important',
    react:'#2684ff !important',
    primary: '#e9ecef !important'
};

export const darkTheme = {
    body: '#111 !important',
    navbar: '#1a1c1f !important',
    text: '#fff !important',
    textColors: '#fff',
    textColor: '#3b465a',
    social: '#6c757d !important',
    heart:'#2684ff !important',
    react:'#FF5630 !important',
    camp: 'blue !important',
    btntext: '#000 !important',
    primary: '#fff !important'
};