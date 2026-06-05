import styled from 'styled-components';

export const DetalhesContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 30px;
  background-color: #1a1a1a;
  border: 1px solid #d4af37;
  border-radius: 8px;
  color: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
`;

export const VoltarButton = styled.button`
  background-color: transparent;
  color: #d4af37;
  border: 1px solid #d4af37;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 24px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(212, 175, 55, 0.1);
    transform: translateX(-5px);
  }
`;

export const InfoSection = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImagemGrande = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(0,0,0,0.8);
  border: 1px solid #333333;
`;

export const Textos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;

export const HeaderIdentidade = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #333333;
  padding-bottom: 16px;

  img {
    width: 75px;
    height: 75px;
    border-radius: 8px;
    border: 2px solid #d4af37;
  }

  h1 {
    color: #d4af37;
    margin: 0;
    font-size: 2.2rem;
    line-height: 1.2;
  }
`;

export const DetalheRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.1rem;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  strong {
    color: #d4af37;
    display: block;
    margin-bottom: 4px;
  }
  
  span {
    color: #cccccc;
  }
`;

export const Biografia = styled.p`
  background-color: #2b2b2b;
  padding: 20px;
  border-left: 4px solid #d4af37;
  border-radius: 4px;
  line-height: 1.6;
  font-size: 1.1rem;
  color: #e0e0e0;
  margin-top: 10px;
  font-style: italic;
`;