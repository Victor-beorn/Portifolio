import FotoDePerfil from '../../assets/img/VICTOR-4.jpg'
import { PerfilContato } from '../perfilContato'

import styles from './styles.module.css'

export function Perfil () {
  return (
    <div className={styles.perfil}>
      <div>
        <img src={FotoDePerfil} alt="" />
      </div>
      <div className={styles.perfilTitle}>
        <h3>Victor Alves de Jesus</h3>
        <p>Dev Front-end</p>
      </div>
      <div>
        <PerfilContato/>
      </div>
    </div>
  )
}