import React from "react";
import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from "@mui/icons-material";
import styled from "styled-components";
import TPLogo from "../img/tabLogo.png"

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

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
      <Logo>
      <img
        alt= "Logo"
        src={TPLogo}
        width="60px"
        height="50px"
        className="d-inline-block align-left"
          />
      </Logo>
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
      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Sale</ListItem>
          <ListItem>Costumes</ListItem>
          <ListItem>Masks</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 647 Winchester Court Ellenwood, GA 30294
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 1-888-447-5594
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> Jasonwashere@gmail.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
