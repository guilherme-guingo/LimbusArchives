import { FaBus, FaBrain, FaCity } from 'react-icons/fa';
import {
  HomeContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  CTAButton,
  LoreSection,
  SectionTitle,
  LoreText,
  LoreGrid,
  FeatureCard
} from './style';

export default function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>Face the Sin, Save the E.G.O.</HeroTitle>
        <HeroSubtitle>
          Assuma o papel de Gerente Executivo e lidere nossos 12 Pecadores através das ruínas das Corporações Caídas na Cidade.
        </HeroSubtitle>
        <CTAButton to="/catalogo">
          Embarcar no Mephistopheles
        </CTAButton>
      </HeroSection>

      <LoreSection>
        <SectionTitle>O que é a Limbus Company?</SectionTitle>
        <LoreText>
          A Limbus Company é uma corporação de extração que opera dentro da "Cidade", uma megametrópole distópica governada por conglomerados implacáveis. Como o Gerente, seu trabalho é guiar um grupo de 12 indivíduos peculiares, conhecidos como Pecadores, a bordo do nosso ônibus com necessidades peculiares, o Mephistopheles. O objetivo principal da empresa é adentrar as filiais em ruínas da extinta Lobotomy Corporation e recuperar os misteriosos Ramos Dourados, fontes de poder incomensurável, antes que caiam em mãos erradas.
        </LoreText>

        <LoreGrid>
          <FeatureCard>
            <FaCity color="#d4af37" size={40} />
            <h3>A Cidade Impiedosa</h3>
            <p>
              Sobreviva em um mundo onde a vida humana é descartável e o lucro é a única lei. Enfrente gangues, sindicatos e monstruosidades em busca dos objetivos da Companhia.
            </p>
          </FeatureCard>

          <FeatureCard>
            <FaBus color="#d4af37" size={40} />
            <h3>O Mephistopheles</h3>
            <p>
              Nosso transporte oficial não é um ônibus comum. Ele consome matéria orgânica para abrir caminhos pelas complexas rotas e realidades distorcidas da Cidade.
            </p>
          </FeatureCard>

          <FeatureCard>
            <FaBrain color="#d4af37" size={40} />
            <h3>Identidades e E.G.O</h3>
            <p>
              Os Pecadores manifestam Identidades de realidades alternativas e empunham armamentos E.G.O extraídos de seus próprios traumas para lutar.
            </p>
          </FeatureCard>
        </LoreGrid>
      </LoreSection>
    </HomeContainer>
  );
}