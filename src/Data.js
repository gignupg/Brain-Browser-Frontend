import { originalTextSample } from './deck/DeckHelper';

export const vocab = [
    {
        Expression: "pei",
        Phrase: "¿eso es un pei?",
        Translation: "joint",
        Tags: ""
    },
    {
        Expression: "mazo",
        Phrase: "Oye, ¿tú te acuerdas de Rubén? -Eh...sí, pero... hace mazo, ¿no? -Bueno, tampoco tanto",
        Translation: "a lot, much, big amount, huge, long",
        Tags: ""
    },
    {
        Expression: "pillarse por alguien, dar el coñazo a alguien",
        Phrase: "-Bueno, a ver, que dejéis el temita y me déis el dinero, eh que tengo que pagar. -Mira, ya te pillarás, ya tú algún día por alguien y entonces serás tú la que nos dé el coñazo a nosotras -Mira que lo dudo -Ya, ya",
        Translation: "to fall for someone, tomber amoureux, sich verlieben",
        Tags: ""
    },
    {
        Expression: "piti",
        Phrase: "Oye, ¿tienes otro piti? Que me he quedado sin.",
        Translation: "pitillo",
        Tags: "abreviación"
    },
    {
        Expression: "pastis",
        Phrase: "¡Pues por lo de las pastis, tonta! -¿Qué pasa?",
        Translation: "pastillas",
        Tags: "abreviación"
    },
    {
        Expression: "rayarse",
        Phrase: "-Mamá, que son las 11, no te rayes.",
        Translation: "no le des más vueltas, don't overthink it, don't get mad",
        Tags: ""
    }
];

export const deckArr = [
    "VGHS - S1 E5",
    "Skam - T2 E1 C2 - Yo no noto nada",
    "Errores",
    "Youglish - Français",
    "HTML & Javascript",
    "React",
    "Le Fantôme de Merde - Partie 2",
    "Skam - T2 E1 C1 - El fiestón de Hugo"
];

export const sampleDeck = {
    name: "Skam - T2 E1 C1 - El fiestón de Hugo",
    tags: ["skam", "español", "movistar", "t2", "e1", "c1", "youtube"],
    note: "Link to the video: https://www.youtube.com/watch?v=-1SPBHZqf50",
    originalText: originalTextSample,
    cardLayout: ""
};

export const defaultLayout = ["", "", "Tags"];

export const sampleLayout = ["Expression","Phrase", "Translation", "Reminds me of", "Tags"];