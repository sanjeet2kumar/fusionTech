import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 0;
`;

const Title = styled.h2`
  text-align: center;
  color: #2673e0;
`;

const Form = styled.form`
  max-width: 480px;
  margin: 32px auto 0 auto;
  background: #fff;
  padding: 34px 26px;
  border-radius: 16px;
  box-shadow: 0 2px 16px #e0e6ed;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1.5px solid #a9c3e6;
  border-radius: 7px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1.5px solid #a9c3e6;
  border-radius: 7px;
  font-size: 1rem;
  height: 90px;
`;

const Button = styled.button`
  padding: 13px 0;
  background: #2673e0;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.18s;
  &:hover {
    background: #1743a3;
  }
`;

const SuccessMsg = styled.p`
  color: #2673e0;
  text-align: center;
  font-weight: 600;
`;

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <Section id="contact">
            <Title>Contact Us</Title>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Textarea placeholder="How can we help you?" required />
                <Button type="submit">Send Message</Button>
                {submitted && <SuccessMsg>Thank you! We'll be in touch soon.</SuccessMsg>}
            </Form>
        </Section>
    );
}

export default Contact;