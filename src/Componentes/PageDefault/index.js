import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled from 'styled-components';

const Main = styled.main`
    background: black;
    color:white;
    flex: 1;
    top:0;
    padding-top: 0;
    padding-left: 4%;
    padding-right: 4%;
    height: 100%;
`;
export default function PageDefault ({children}) {
    return(
        <>
            <Menu style={{backgroundColor: 'red' }}/>
            <Main> {children} </Main>
            <Footer/>
        </>
    );
}