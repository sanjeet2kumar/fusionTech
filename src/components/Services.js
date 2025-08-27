import React from "react";
import styled from "styled-components";
import { FaCode, FaCloud, FaChartLine, FaUserShield } from "react-icons/fa";

const Section = styled.section`
  padding: 80px 0 40px 0;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 40px;
  color: #2673e0;
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const ServiceCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px #e0e6ed;
  padding: 36px 28px;
  width: 260px;
  text-align: center;
  transition: transform 0.15s, box-shadow 0.15s;
  &:hover {
    transform: translateY(-8px) scale(1.025);
    box-shadow: 0 6px 32px #bfd7f6;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #2673e0;
  margin-bottom: 16px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: #1743a3;
`;

const ServiceText = styled.p`
  font-size: 1rem;
  color: #444;
`;

const services = [
    {
        icon: <FaCode />,
        title: "Custom Software Development",
        text: "Tailored web and mobile apps to drive your business success."
    },
    {
        icon: <FaCloud />,
        title: "Cloud Solutions",
        text: "Migrate, scale, and optimize with robust cloud infrastructures."
    },
    {
        icon: <FaChartLine />,
        title: "IT Consulting",
        text: "Strategic guidance to maximize efficiency and ROI."
    },
    {
        icon: <FaUserShield />,
        title: "Cybersecurity",
        text: "Protect your data and systems with top-notch security practices."
    }
];

function Services() {
    return (
        <Section id="services">
            <Title>Our Services</Title>
            <ServicesGrid>
                {services.map((service, idx) => (
                    <ServiceCard key={idx}>
                        <IconWrapper>{service.icon}</IconWrapper>
                        <ServiceTitle>{service.title}</ServiceTitle>
                        <ServiceText>{service.text}</ServiceText>
                    </ServiceCard>
                ))}
            </ServicesGrid>
        </Section>
    );
}

export default Services;