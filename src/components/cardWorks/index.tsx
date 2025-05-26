import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Codesandbox } from 'lucide-react';
import { Title } from '../title';

import SiteAquarium from '../../assets/img/sites/aquarium.png';
import LpBhled from '../../assets/img/sites/lp-bh-led.jpg';
import SiteMaria from '../../assets/img/sites/maria-chaves.png';
import SitePortal from '../../assets/img/sites/meu-portal.png';
import SiteBeneficio from '../../assets/img/sites/site1.jpg';
import SiteLelo from '../../assets/img/sites/site-lelo-trato.png';
import SitePlenitus from '../../assets/img/sites/plenitus.png';
import LpPomodoro from '../../assets/img/sites/pomodoro.png';

import styles from './styles.module.css';

const categories = ['ALL', 'Sites', 'Landing Pages'];

const projects = [
  {
    id: 1,
    title: 'Aquarium Tech',
    link: 'https://aquariumtech.com.br',
    category: 'Sites',
    image: SiteAquarium,
    company: 'Site',
  },
  {
    id: 2,
    title: 'BH Led',
    link: 'https://www.bhled.com.br',
    category: 'Landing Pages',
    image: LpBhled,
    company: 'Landing Page',
  },
  {
    id: 3,
    title: 'Maria Chaves',
    link: 'https://mariachavescorretora.com.br',
    category: 'Sites',
    image: SiteMaria,
    company: 'Site',
  },
  {
    id: 4,
    title: 'Meu Portal do Corretor',
    link: 'https://meuportaldocorretor.com.br/index.php',
    category: 'Sites',
    image: SitePortal,
    company: 'Site',
  },
  {
    id: 5,
    title: 'Plenitus',
    link: 'https://plenituscard.com.br',
    category: 'Sites',
    image: SitePlenitus,
    company: 'Site',
  },
  {
    id: 6,
    title: 'Benefício intelectual',
    link: 'https://beneficiointelectual.com.br',
    category: 'Sites',
    image: SiteBeneficio,
    company: 'Site',
  },
  {
    id: 7,
    title: 'Lelo Trato',
    link: 'https://lelotrato.com.br/index.php',
    category: 'Sites',
    image: SiteLelo,
    company: 'Site',
  },
  {
    id: 8,
    title: 'Cronometro Pomodoro',
    link: 'https://cronometro-pomodoro-iota.vercel.app',
    category: 'Landing Pages',
    image: LpPomodoro,
    company: 'Single page',
  },
];

export function CardWorks() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredProjects =
    selectedCategory === 'ALL'
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  return (
    <div>
      <Title title='Portifólio' icon={<Codesandbox />} />

      <div className={styles.filters}>
        {categories.map(category => (
          <button
            key={category}
            className={selectedCategory === category ? styles.active : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className={styles.grid}>
        <AnimatePresence>
          {filteredProjects.map(project => (
            <a href={project.link} target='_blank' key={project.id}>
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
                className={styles.card}
              >
                <div className={styles.zoomWrapper}>
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.company}</p>
              </motion.div>
            </a>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
