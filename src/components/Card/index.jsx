import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { CardContainer, CardImage, CardInfo, Nome, Faccao, Raridade, ActionButton, DetailsButton } from './style';
import { IMAGE_BASE_PATH } from '../../config/constants';

export default function Card({ id, nome, faccao, raridade, pasta }) {
  const [equipado, setEquipado] = useState(false);
  const navigate = useNavigate();

  const handleEquipar = () => setEquipado(!equipado);
  const handleDetalhes = () => navigate(`/identidade/${id}`);

const imagePath = `${IMAGE_BASE_PATH}/${pasta}/Banner.webp`;


  return (
    <CardContainer>
      <CardImage src={imagePath} alt={nome} />
      <CardInfo>
        <Faccao>{faccao}</Faccao>
        <Nome>{nome}</Nome>
        <Raridade>{[...Array(raridade)].map((_, index) => (
            <FaStar key={index} color="#d4af37" size={14} style={{ marginRight: '2px' }} />
          ))}</Raridade>
        
        <ActionButton $equipado={equipado} onClick={handleEquipar}>
          {equipado ? 'Recolher Identidade' : 'Despachar Identidade'}
        </ActionButton>
        
        <DetailsButton onClick={handleDetalhes}>
          Ver Detalhes
        </DetailsButton>
      </CardInfo>
    </CardContainer>
  );
}