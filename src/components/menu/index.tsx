import {
  Menu as MenuIcon,
  X as CloseIcon,
  BriefcaseBusiness,
  Folder,
  House,
  Moon,
  Sun,
} from 'lucide-react';

import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { RouterLink } from '../routerLink';

type AllThemes = 'dark' | 'light';

export function Menu() {
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState<AllThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AllThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <Sun />,
    light: <Moon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    document.documentElement.setAttribute('data-theme', theme);
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <nav className={styles.menu}>
        <RouterLink
          href='/'
          className={styles.menuLink}
          aria-label='Ir para Home'
          title='Home'
        >
          <House /> Home
        </RouterLink>
        <RouterLink
          href='/experiencia/'
          className={styles.menuLink}
          aria-label='Ir para Experiências'
          title='Experiências'
        >
          <BriefcaseBusiness /> Experiências
        </RouterLink>
        <RouterLink
          href='/portifolio/'
          className={styles.menuLink}
          aria-label='Ir para Portfolio'
          title='Portfolio'
        >
          <Folder /> Portifólio
        </RouterLink>
        <RouterLink
          href='#'
          className={styles.menuLink}
          aria-label='Mudar tema da página'
          title='Mudar Tema'
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </RouterLink>
      </nav>

      {/* Menu mobile  */}

      <button
        className={styles.burger}
        onClick={() => setOpen(true)}
        aria-label='Abrir menu'
      >
        <MenuIcon size={24} />
      </button>

      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)} />
      )}
      <nav
        className={`${styles.drawer} ${open ? styles.open : ''}`}
        aria-hidden={!open}
      >
        <button
          className={styles.close}
          onClick={() => setOpen(false)}
          aria-label='Fechar menu'
        >
          <CloseIcon size={24} />
        </button>
        <ul className={styles.list}>
          <li>
            <RouterLink
              href='#'
              className={styles.menuLink}
              aria-label='Mudar tema da página'
              title='Mudar Tema'
              onClick={handleThemeChange}
            >
              {nextThemeIcon[theme]}
            </RouterLink>
          </li>
          <li>
            <RouterLink
              href='/'
              className={styles.menuLink}
              aria-label='Ir para Home'
              title='Home'
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              href='/experiencia/'
              className={styles.menuLink}
              aria-label='Ir para Experiências'
              title='Experiências'
            >
              Experiências
            </RouterLink>
          </li>
          <li>
            <RouterLink
              href='/portifolio/'
              className={styles.menuLink}
              aria-label='Ir para Portfolio'
              title='Portfolio'
            >
              Portifólio
            </RouterLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
