import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #2b2b2b;
  border: 1px solid #d4af37;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
`;

export const Nome = styled.h3`
  color: #ffffff;
  font-size: 1.1rem;
  margin: 0;
`;

export const Faccao = styled.span`
  color: #d4af37;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const Raridade = styled.span`
  color: #a0a0a0;
  font-size: 0.8rem;
`;

export const ActionButton = styled.button`
  margin-top: auto;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => props.$equipado ? '#d4af37' : 'transparent'};
  color: ${props => props.$equipado ? '#1a1a1a' : '#d4af37'};
  border: 1px solid #d4af37;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$equipado ? '#b39024' : 'rgba(212, 175, 55, 0.1)'};
  }
`;

export const DetailsButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  background-color: #333333;
  color: #ffffff;
  transition: all 0.2s;

  &:hover {
    background-color: #4a4a4a;
  }
`;