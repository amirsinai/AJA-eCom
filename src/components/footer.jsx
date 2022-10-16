import React from "react";
import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
      <Logo>AJA</Logo>
      <Desc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. In nisl nisi
        scelerisque eu. Eu non diam phasellus vestibulum lorem sed risus
        ultricies. Pellentesque sit amet porttitor eget dolor. In arcu cursus
        euismod quis viverra nibh cras.
      </Desc>
      <SocialContainer>
        <SocialIcon color='3B5999'>
          <Facebook />
        </SocialIcon>
        <SocialIcon color='E4405F'>
          <Instagram />
        </SocialIcon>
        <SocialIcon color='55ACEE'>
          <Twitter />
        </SocialIcon>
        <SocialIcon color='E60023'>
          <Pinterest />
        </SocialIcon>
      </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
