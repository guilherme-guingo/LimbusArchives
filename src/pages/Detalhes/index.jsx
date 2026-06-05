import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaArrowLeft, FaBook } from 'react-icons/fa';
import { API_URL, IMAGE_BASE_PATH } from '../../config/constants';
import { DetalhesContainer, VoltarButton, InfoSection, ImagemGrande, Textos, HeaderIdentidade, DetalheRow, Biografia } from './style';

export default function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [identidade, setIdentidade] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        const itemEncontrado = response.data.find(item => item.id === Number(id));
        setIdentidade(itemEncontrado);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <DetalhesContainer style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#d4af37' }}>Extraindo dados da identidade...</h2>
      </DetalhesContainer>
    );
  }

  if (!identidade) {
    return (
      <DetalhesContainer style={{ textAlign: 'center' }}>
        <h2>Identidade não encontrada nos registros da companhia.</h2>
        <VoltarButton onClick={() => navigate('/')}><FaArrowLeft /> Voltar para o Menu</VoltarButton>
      </DetalhesContainer>
    );
  }

  return (
    <DetalhesContainer>
      <VoltarButton onClick={() => navigate('/catalogo')}>
        <FaArrowLeft /> Voltar
      </VoltarButton>
      
      <InfoSection>
        {/* Banner Gigante na Esquerda */}
        <ImagemGrande src={`${IMAGE_BASE_PATH}/${identidade.pasta}/Banner.webp`} alt={identidade.nome} />
        
        {/* Coluna de Dados na Direita */}
        <Textos>
          
          <HeaderIdentidade>
            <img src={`${IMAGE_BASE_PATH}/${identidade.pasta}/Icon.webp`} alt="Icon" />
            <h1>{identidade.nome}</h1>
          </HeaderIdentidade>

          <DetalheRow>
            <img src={`${IMAGE_BASE_PATH}/${identidade.pasta}/Symbol.webp`} alt="Symbol" />
            <div>
              <strong>Facção</strong>
              <span>{identidade.faccao}</span>
            </div>
          </DetalheRow>

          <DetalheRow>
            <FaBook color="#d4af37" size={32} style={{ padding: '4px' }} />
            <div>
              <strong>Obra Literária</strong>
              <span>{identidade.literatura}</span>
            </div>
          </DetalheRow>

          <DetalheRow style={{ marginTop: 'auto', paddingTop: '20px' }}>
            <strong style={{ margin: 0 }}>Raridade:</strong>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(Number(identidade.raridade))].map((_, index) => (
                <FaStar key={index} color="#d4af37" size={22} />
              ))}
            </div>
          </DetalheRow>

          <Biografia>
            "{identidade.descricao}"
          </Biografia>

        </Textos>
      </InfoSection>
    </DetalhesContainer>
  );
}