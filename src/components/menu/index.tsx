import { BriefcaseBusiness, Folder, House, Moon, Sun } from 'lucide-react';

import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AllThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AllThemes>('dark');

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
    <nav className={styles.menu}>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para Home'
        title='Home'
      >
        <House /> Home
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para Experiências'
        title='Experiências'
      >
        <BriefcaseBusiness /> Experiências
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para Portfolio'
        title='Portfolio'
      >
        <Folder /> Portifólio
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Mudar tema da página'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
