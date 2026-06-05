import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  background-color: #1a1a1a;
  color: #ffffff;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 20px;
  background: linear-gradient(to bottom, #0d0d0d, #1a1a1a);
  border-bottom: 1px solid #333333;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  color: #d4af37;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 15px;
  line-height: 1.2;
  max-width: 900px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.2rem;
  color: #a0a0a0;
  font-weight: 300;
  margin-bottom: 50px;
  max-width: 600px;
  line-height: 1.6;
`;

export const CTAButton = styled(Link)`
  background-color: #d4af37;
  color: #1a1a1a;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px 48px;
  border-radius: 4px;
  border: 2px solid #d4af37;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: #d4af37;
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
  }
`;

export const LoreSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #d4af37;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

export const LoreText = styled.p`
  font-size: 1.2rem;
  color: #cccccc;
  line-height: 1.8;
  margin-bottom: 60px;
  text-align: justify;
`;

export const LoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

export const FeatureCard = styled.div`
  background-color: #2b2b2b;
  padding: 30px;
  border-radius: 8px;
  border-top: 4px solid #d4af37;
  text-align: left;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 15px 0;
  }

  p {
    color: #a0a0a0;
    line-height: 1.6;
    margin: 0;
  }
`;