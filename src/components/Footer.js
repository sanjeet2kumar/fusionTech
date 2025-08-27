import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #1743a3;
  color: #fff;
  text-align: center;
  padding: 36px 0 22px 0;
  margin-top: 42px;
`;

function Footer() {
    return (
        <FooterWrapper>
            &copy; {new Date().getFullYear()} Your Consultancy. All rights reserved.
        </FooterWrapper>
    );
}

export default Footer;