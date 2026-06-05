import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: #1a1a1a;
  min-height: 100vh;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  color: #d4af37;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 0 10px 0;
`;

export const Subtitle = styled.p`
  color: #a0a0a0;
  font-size: 1.1rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;