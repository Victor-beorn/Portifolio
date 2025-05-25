import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from './styles.module.css'

const categories = ["ALL", "Sites", "Landing Pages"];

const projects = [
  {
    id: 1,
    title: "Photo App UI/UX",
    category: "Sites",
    image: "/img/photoapp.jpg",
    company: "Bokeh network",
  },
  {
    id: 2,
    title: "Mobile App Design",
    category: "Landing Pages",
    image: "/img/mobileapp.jpg",
    company: "Tech Innovators Inc.",
  },
  // ... outros projetos
];

export function CardWorks() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Filtro */}
      <div className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid animada */}
      <div className={styles.grid}>
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className={styles.card}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.company}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
