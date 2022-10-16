import styled from "styled-components"

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const footer = () => {
  return (
    <Container>
      <Left></Left>
        <Logo></Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In nisl 
          nisi scelerisque eu. Eu non diam phasellus vestibulum lorem sed risus 
          ultricies. Pellentesque sit amet porttitor eget dolor. In arcu cursus 
          euismod quis viverra nibh cras.
        </Desc>
        <SoicalContainer>

        </SoicalContainer>
      <Center></Center>
      <Right></Right>
    </Container>
  )
}

export default footer