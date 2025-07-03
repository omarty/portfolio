import {
  Heading,
} from "@chakra-ui/react";import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";


const testimonialsFR = [
    {
        name: "Dr Joundy Amine",
        job: "DG Alter System",
        quote:
            "Cela fait bientôt deux ans que Mahamadou a rejoint notre équipe chez AlterSystem. Il s’est très vite intégré et a su se distinguer par son professionnalisme, sa rigueur et sa capacité à livrer des résultats de qualité. Il a toute ma confiance pour relever des défis techniques exigeants.",
        img: "./dr.jpg",
        bgColor: "#9d789b",
        linkedin: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp'
    },
    {
        name: "Mamadou Barry",
        job: "Tech Lead Alter System",
        quote:
            "Je travaille avec Mahamadou depuis bientôt deux ans chez AlterSystem, et je peux affirmer qu’il est l’un des développeurs les plus fiables que j’ai rencontrés. Il comprend vite les enjeux, propose des solutions pertinentes, et surtout, il sait faire avancer les projets dans la bonne direction, même sous pression.",
        img: "./barry.jpg",
        bgColor: "#7a81a8",
        linkedin: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp'

    },
    {
        name: "Maiga Fati",
        job: "Ingénieure Test Logiciel AXA France",
        quote:
            "J’ai collaboré avec Mahamadou dans le cadre de ses projets personnels. J’ai été agréablement surprise par la qualité de son code, bien structuré et facile à tester. Il prend toujours en compte les retours QA, ce qui rend notre collaboration fluide et efficace.",
        img: "./fati.jpg",
        bgColor: "#6d5b98",
        linkedin: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp'

    },
    {
        name: "Nouhou Idi",
        job: "Ingénieur Informatique",
        quote:
            "Je travaille avec Mahamadou sur plusieurs projets personnels. C’est un développeur impliqué, curieux, et très polyvalent. Il sait faire les bons choix techniques et ne recule jamais devant un défi. C’est un vrai plaisir de construire avec lui.",
        img: "./idi.jpg",
        bgColor: "#6d5b98",
        linkedin: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp'

    },
];

const testimonialsEN = [
    {
        name: "Dr Joundy Amine",
        job: "CEO of AlterSystem",
        quote:
            "Mahamadou joined our team at AlterSystem nearly two years ago. He quickly adapted and stood out through his professionalism, diligence, and ability to consistently deliver high-quality results. I fully trust him to handle demanding technical challenges.",
        img: "./dr.jpg",
        bgColor: "#9d789b",
        linkedin: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    },
    {
        name: "Mamadou Barry, Tech Lead at AlterSystem",
        job: "Tech Lead at AlterSystem",
        quote:
            "I've been working with Mahamadou for nearly two years now at AlterSystem, and I can confidently say he’s one of the most reliable developers I've worked with. He quickly grasps the stakes, proposes relevant solutions, and keeps projects moving in the right direction, even under pressure.",
        img: "./barry.jpg",
        bgColor: "#7a81a8",
        linkedin: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    },
    {
        name: "Maiga Fati",
        job: "Software QA Engineer at AXA France",
        quote:
            "I collaborated with Mahamadou on some of his personal projects. I was genuinely impressed by the quality of his code – clean, well-structured, and easy to test. He always takes QA feedback seriously, which makes our collaboration smooth and productive.",
        img: "./fati.jpg",
        bgColor: "#6d5b98",
        linkedin: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    },
    {
        name: "Nouhou Idi",
        job: "Software Engineer",
        quote:
            "I’ve been working with Mahamadou on several personal projects. He’s a committed, curious, and versatile developer. He makes smart technical decisions and never backs away from a challenge. Building with him is always a rewarding experience.",
        img: "./idi.jpg",
        bgColor: "#6d5b98",
        linkedin: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    },
];


const styles = {
    container: {
        padding: "3rem 1rem",
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
    },
    grid: {
        display: "flex",
        gap: "1.5rem",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    card: {
        flex: "1 1 300px",
        maxWidth: "340px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#fff",
    },
    cardUp: (color) => ({
        width: "100%",
        height: "120px",
        backgroundColor: color,
    }),
    avatar: {
        width: "110px",
        height: "110px",
        marginTop: "-60px",
        border: "3px solid #fff",
        borderRadius: "50%",
        objectFit: "cover",
    },
    body: {
        padding: "1rem",
        color: "black"
    },
    quote: {
        color: "#555",
        marginTop: "1rem",
        fontStyle: "italic",
    },
};

export default function Review() {
    const { t, i18n } = useTranslation()
    const [testimonials, setTestimonials] = useState([])
    const currentLang = i18n.language
    useEffect(() => {
        setTestimonials(currentLang === 'fr' ? testimonialsFR : testimonialsEN)
    }, [currentLang])

    return (
        <section style={styles.container}>
            <Heading fontSize={"3xl"}>{t('testimonials.title')}</Heading>
            <p style={{ maxWidth: "700px", margin: "0 auto 2rem" }}>
                {t("testimonials.description")}
            </p>
            <div style={styles.grid}>
                {testimonials.map(({ name, job, quote, img, bgColor, linkedin }, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.cardUp(bgColor)}></div>
                        <img src={img} alt={name} style={styles.avatar} />
                        <div style={styles.body}>
                            <h4 style={{ textAlign: "center", fontWeight: "500" }}>
                                {name}
                            </h4>
                            <h5>
                                {linkedin ? (
                                    <a
                                        href={linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: "#0A66C2",
                                            textDecoration: "none",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "6px",
                                        }}
                                    >
                                        {job}
                                        <FaLinkedin size={16} />
                                    </a>
                                ) : (
                                    name
                                )}
                            </h5>



                            <hr />
                            <p style={styles.quote}>
                                <span style={{ marginRight: "8px" }}>“</span>
                                {quote}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
