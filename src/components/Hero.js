import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  padding: 90px 0 70px 0;
  background: linear-gradient(120deg, #2673e0 55%, #9dd7fa 100%);
  color: #fff;
  border-radius: 0 0 35px 35px;
  box-shadow: 0 4px 20px rgba(38, 115, 224, 0.08);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 0 20px 0;
`;

const SubTitle = styled.p`
  font-size: 1.4rem;
  margin: 0 0 35px 0;
  opacity: 0.95;
`;

const CTA = styled.a`
  padding: 15px 38px;
  background: #fff;
  color: #2673e0;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 25px;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(38, 115, 224, 0.13);
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #f8fafd;
    color: #1743a3;
  }
`;

function Hero() {
    return (
        <HeroSection>
            <Title>Your Trusted Consultancy for Software Solutions</Title>
            <SubTitle>
                Empowering businesses with innovative, reliable, and scalable software tailored to your needs.
            </SubTitle>
            <CTA href="#contact">Get in Touch</CTA>
        </HeroSection>
    );
}

export default Hero;