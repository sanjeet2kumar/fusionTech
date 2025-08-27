import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
    background: #f6fafd;
    color: #222;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Hero />
                <Services />
                <Testimonials />
                <Contact />
            </Container>
            <Footer />
        </>
    );
}

export default App;