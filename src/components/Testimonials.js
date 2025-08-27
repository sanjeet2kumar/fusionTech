import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #f0f6fc;
  padding: 70px 0 50px 0;
  margin-top: 50px;
  border-radius: 24px;
`;

const Title = styled.h2`
  color: #2673e0;
  text-align: center;
  margin-bottom: 38px;
`;

const TestimonialsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: center;
`;

const TestimonialCard = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 10px #e0e6ed;
  padding: 30px 26px;
  width: 330px;
  text-align: left;
`;

const Quote = styled.p`
  font-style: italic;
  color: #444a;
  margin-bottom: 24px;
`;

const Author = styled.p`
  font-weight: bold;
  color: #1743a3;
`;

const testimonials = [
    {
        quote: "Their team delivered our project ahead of schedule and exceeded our expectations.",
        author: "— Alex Turner, FinTech Startup"
    },
    {
        quote: "Professional, communicative, and innovative. Highly recommended consultancy!",
        author: "— Priya Singh, Retail Solutions"
    },
    {
        quote: "Helped us migrate to the cloud seamlessly. Our operations are faster and more secure.",
        author: "— Miguel Santos, Logistics Inc."
    }
];

function Testimonials() {
    return (
        <Section id="testimonials">
            <Title>What Our Clients Say</Title>
            <TestimonialsGrid>
                {testimonials.map((t, idx) => (
                    <TestimonialCard key={idx}>
                        <Quote>“{t.quote}”</Quote>
                        <Author>{t.author}</Author>
                    </TestimonialCard>
                ))}
            </TestimonialsGrid>
        </Section>
    );
}

export default Testimonials;