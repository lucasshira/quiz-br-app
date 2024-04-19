import Estatistica from '@/components/Estatistica';
import styles from '../styles/Resultado.module.css';
import Botao from '@/components/Botao';
import { useRouter } from 'next/router';

const Resultado = () => {
  const router = useRouter();

  const total = +router.query.total!
  const certas = +router.query.certas!
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Estatistica texto='Perguntas' valor={total} />
        <Estatistica texto='Certas' valor={certas} corFundo='#9CD2A4'  />
        <Estatistica texto='Percentual' valor={`${percentual}%`} 
          corFundo={
            percentual >= 80 ? '#18fd3ae1' :
            percentual >= 50 ? '#FFC300' :
            percentual >= 30 ? '#FF5733' :
            '#F0112F'
          }
        />
      </div>
      <Botao href='/' texto='Tentar novamente' />
    </div>
  );
};

export default Resultado;