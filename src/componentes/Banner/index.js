import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou o Fernando, aluno de
          front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.imagens}
          alt="Imagem de fundo"
          src={circuloColorido}
          aria-hidden={true}
        />

        <img className={styles.minhaFoto} alt="Minha foto" src={minhaFoto} />
      </div>
    </div>
  )
}

export default Banner
