import styles from '../styles/Botao.module.css'
import Link from 'next/link';

interface BotaoProps {
  href?: string
  texto: string
  onClick?: (e: any) => void
}

const Botao = (props: BotaoProps) => {

  function renderizarBotao() {
    return (
      <button className={styles.botao} onClick={props.onClick}> {props.texto}</button>
    )
  }

  return props.href ? (
    <Link href={props.href}>
      {renderizarBotao()}
    </Link>
  ) : renderizarBotao();
}

export default Botao;