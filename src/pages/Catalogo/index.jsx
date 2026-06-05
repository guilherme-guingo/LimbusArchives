import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import { PageContainer, Header, Title, Subtitle, GridContainer } from './style';
import { API_URL } from '../../config/constants';

export default function Catalogo() {
  const [identidades, setIdentidades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setIdentidades(response.data);
        } else {
          console.error("Erro: O Vite não retornou o JSON corretamente. Verifique se o arquivo está na pasta correta. Retorno:", response.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Falha ao buscar os dados:", error);
        setLoading(false);
      });
  }, []);

  return (
    <PageContainer>
      <Header>
        <Title>Limbus Company</Title>
        <Subtitle>Gerenciamento de Identidades</Subtitle>
      </Header>

      {loading ? (
        <h2 style={{ color: '#d4af37', textAlign: 'center' }}>Sincronizando com a Limbus Company...</h2>
      ) : (
        <GridContainer>
          {identidades.map((identidade) => (
            <Card
              key={identidade.id}
              id={identidade.id}
              nome={identidade.nome}
              faccao={identidade.faccao}
              raridade={identidade.raridade}
              pasta={identidade.pasta}
            />
          ))}
        </GridContainer>
      )}
    </PageContainer>
  );
}