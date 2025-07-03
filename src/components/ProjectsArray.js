import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';


const parseProjects = (mdContent) => {
  const projects = [];
  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const name = line.substr(3).trim();

      // Lire la description sur plusieurs lignes
      const descriptionLines = [];
      while (
        lines[++i] &&
        !lines[i].startsWith("- Images:") &&
        !lines[i].startsWith("- Tags:") &&
        !lines[i].startsWith("- Badges:") &&
        !lines[i].startsWith("- Buttons:") &&
        !lines[i].startsWith("## ")
      ) {
        descriptionLines.push(lines[i].trim());
      }
      const description = descriptionLines.join(" ");

      // Lire les images
      let images = [];
      if (lines[i] && lines[i].startsWith("- Images:")) {
        while (lines[++i] && lines[i].trim().startsWith("- ![")) {
          const imageMatch = lines[i].match(/!\[(.*?)\]\((.*?)\)/);
          if (imageMatch) {
            images.push(imageMatch[2]);
          }
        }
      }

      // Lire les images non précédées de - Images:
      while (lines[i] && lines[i].trim().startsWith("- ![")) {
        const imageMatch = lines[i].match(/!\[(.*?)\]\((.*?)\)/);
        if (imageMatch) {
          images.push(imageMatch[2]);
        }
        i++;
      }

      // Lire les tags
      let tags = [];
      if (lines[i] && lines[i].startsWith("- Tags:")) {
        tags = lines[i].split(":")[1].split(",").map((tag) => tag.trim());
      }

      const badges = [];
      const buttons = [];

      // Lire les badges
      while (lines[++i] && lines[i].startsWith("- Badges:") === false) { }
      while (lines[i + 1] && lines[i + 1].startsWith("  - ")) {
        const badgeLine = lines[++i].substr(4).split("[");
        const badgeName = badgeLine[0].trim();
        const badgeColor = badgeLine[1]?.split("]")[0]?.trim();
        if (badgeName && badgeColor) {
          badges.push({ text: badgeName, colorScheme: badgeColor });
        }
      }

      // Lire les boutons
      while (lines[i + 1] && !lines[i + 1].startsWith("- Buttons:")) i++;
      if (lines[i + 1] && lines[i + 1].startsWith("- Buttons:")) i++;
      while (lines[i + 1] && lines[i + 1].startsWith("  - ")) {
        const buttonLine = lines[++i].substr(4).split("[");
        const buttonText = buttonLine[0].trim();
        const buttonHref = buttonLine[1]?.split("]")[0]?.trim();
        if (buttonText && buttonHref) {
          buttons.push({ text: buttonText, href: buttonHref });
        }
      }

      projects.push({
        name,
        description,
        images,
        tags,
        badges,
        buttons,
      });
    }
  }

  return projects;
};




const ProjectsArray = () => {
  const [projects, setProjects] = useState([]);
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  useEffect(() => {
    fetch(`/content/${currentLang}/Projects.md`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setProjects(parseProjects(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, [currentLang]);

  return projects;
};

export default ProjectsArray;
