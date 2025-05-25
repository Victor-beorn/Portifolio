import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import styles from './styles.module.css';


export function PerfilContato() {
  return (
    <>
      <div className={styles.links}>
        <a
          href='https://www.linkedin.com/in/victoralves-dev/'
          aria-label='Link do linkedin'
          title='linkedin'
          target='blank'
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href='https://github.com/Victor-beorn'
          aria-label='Link do github'
          title='github'
          target='blank'
          rel="noopener noreferrer"
        >
          <Github />
        </a>

        <a
          href="https://wa.me/+5531993125196?text=Olá, gostaria de marcar um entrevista"
          aria-label='Link do whatsapp'
          title='whatsapp'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaWhatsapp size={24} color='#eeeef0' />
        </a>
      </div>
      <div className={styles.contatos}>
        <div className={styles.contatoLink}>
          <Mail />
          <div>
            <p>Email</p>
            <a href='mailto:victort2938@gmail.com'> victort2938@gmail.com </a>
          </div>
        </div>
        <div className={styles.contatoLink}>
          <Phone />
          <div>
            <p>Telefone</p>
            <a href='tel:31993125196'>(31) 993125196</a>
          </div>
        </div>
      </div>
    </>
  );
}
