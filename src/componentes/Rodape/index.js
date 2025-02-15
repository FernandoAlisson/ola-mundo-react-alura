import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      <p>Desenvolvido por Alura.</p>
    </footer>
  )
}

export default Rodape
