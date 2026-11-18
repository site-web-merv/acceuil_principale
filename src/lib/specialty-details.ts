import radiologie from "@/assets/radiologie-examen.jpg";
import laboratoire from "@/assets/laboratoire-analyses.jpg";
import pharmacie from "@/assets/pharmacie-conseil.jpg";
import chirurgie from "@/assets/chirurgie-consultation.jpg";
import urologie from "@/assets/urologie-consultation.jpg";
import orthopedie from "@/assets/orthopedie-examen.jpg";
import rhumatologie from "@/assets/rhumatologie-examen.jpg";

type Detail = {
  image: string;
  imageAlt: string;
  title: string;
  intro: string;
  descriptions: string[];
  preparation: string[];
  steps: string[];
  faq: { question: string; answer: string }[];
};

export const specialtyDetails: Record<string, Detail> = {
  radiologie: {
    image: radiologie, imageAlt: "Examen échographique — illustration du service de radiologie",
    title: "Une image plus précise de votre santé",
    intro: "L’imagerie médicale aide votre médecin à comprendre vos symptômes et à orienter votre prise en charge. Radiographies et échographies explorent les os, les articulations et les organes selon la prescription.",
    descriptions: ["Un examen d’imagerie pour explorer une zone du corps selon l’indication du médecin.", "Une exploration par ultrasons des organes abdominaux, sans rayons X.", "Une évaluation des os et articulations, notamment après un traumatisme ou en cas de douleur."],
    preparation: ["Apportez votre ordonnance et vos anciens examens d’imagerie.", "Signalez toute grossesse connue ou possible avant une radiographie.", "Demandez les consignes de préparation : certains examens nécessitent un jeûne ou une vessie pleine."],
    steps: ["Vérification de la prescription et des consignes de préparation.", "Installation et réalisation des images adaptées à votre examen.", "Interprétation des images et transmission du compte rendu selon les modalités du service."],
    faq: [{ question: "Faut-il une ordonnance ?", answer: "Une prescription permet de préciser la région à examiner et l’indication. Contactez le service pour connaître les documents nécessaires à votre examen." }, { question: "Une échographie est-elle douloureuse ?", answer: "L’échographie utilise une sonde et du gel sur la peau. Elle est généralement indolore ; une pression sur une zone sensible peut être inconfortable." }],
  },
  laboratoire: {
    image: laboratoire, imageAlt: "Analyse de prélèvements — illustration du laboratoire",
    title: "Des analyses pour mieux comprendre votre santé",
    intro: "Les analyses biologiques participent au diagnostic et au suivi de nombreuses maladies. Le choix des examens et leur interprétation tiennent compte de votre situation et de l’avis de votre médecin.",
    descriptions: ["Un ensemble d’analyses sanguines dont le contenu est précisé sur votre prescription.", "Une analyse d’urine pouvant contribuer à rechercher une infection ou à surveiller certains troubles.", "Un test de dépistage du paludisme dont le résultat doit être interprété avec vos symptômes.", "Des analyses pour évaluer certains marqueurs du fonctionnement du foie."],
    preparation: ["Apportez votre ordonnance et vos résultats précédents.", "Vérifiez auprès du laboratoire si vos analyses nécessitent d’être à jeun.", "Signalez vos traitements ; ne les interrompez pas sans avis médical."],
    steps: ["Accueil et vérification des analyses prescrites.", "Prélèvement ou recueil de l’échantillon selon les consignes.", "Analyse, validation et remise des résultats selon l’examen demandé."],
    faq: [{ question: "Dois-je venir à jeun ?", answer: "Cela dépend des analyses. Vérifiez les consignes avec le laboratoire avant votre venue plutôt que de modifier vos habitudes ou vos traitements." }, { question: "Comment recevoir mes résultats ?", answer: "Les modalités et délais dépendent de l’analyse. Demandez au laboratoire comment organiser la remise de vos résultats et leur éventuel envoi via WhatsApp." }],
  },
  pharmacie: {
    image: pharmacie, imageAlt: "Conseil pharmaceutique — illustration de la pharmacie",
    title: "Un conseil pour chaque traitement",
    intro: "Le conseil pharmaceutique vous aide à comprendre votre ordonnance, les modalités de prise et les précautions d’utilisation. Il ne remplace pas la consultation médicale lorsqu’un diagnostic est nécessaire.",
    descriptions: ["Délivrance selon votre prescription, avec explication des modalités de prise.", "Orientation vers des produits adaptés lorsque la situation relève du conseil pharmaceutique.", "Échange sur la bonne utilisation des médicaments et les précautions à respecter."],
    preparation: ["Présentez votre ordonnance si votre médicament en nécessite une.", "Indiquez vos allergies, vos traitements actuels et une éventuelle grossesse.", "Gardez les emballages ou une liste des médicaments que vous utilisez."],
    steps: ["Échange sur votre demande et vérification de votre ordonnance.", "Vérification de la disponibilité et des précautions d’utilisation.", "Conseils sur la prise, la conservation et le suivi de votre traitement."],
    faq: [{ question: "Puis-je obtenir un médicament sans ordonnance ?", answer: "Certains médicaments peuvent être délivrés sans ordonnance, d’autres exigent une prescription. Le pharmacien vous oriente selon le produit et votre situation." }, { question: "Que faire en cas d’effet indésirable ?", answer: "Contactez un professionnel de santé. Si vous présentez une difficulté à respirer, un gonflement du visage ou un malaise important, consultez en urgence." }],
  },
  chirurgie: {
    image: chirurgie, imageAlt: "Consultation préopératoire — illustration du service de chirurgie",
    title: "Comprendre votre intervention, préparer votre suivi",
    intro: "La consultation chirurgicale permet d’évaluer votre situation et de discuter les options de traitement. Une intervention n’est envisagée qu’après une évaluation médicale et une information sur ses bénéfices, ses risques et les alternatives.",
    descriptions: ["Évaluation de votre situation, explication de l’intervention envisagée et préparation adaptée.", "Actes sélectionnés selon une évaluation médicale, avec consignes de retour à domicile.", "Contrôle de la cicatrisation, suivi des suites et adaptation des soins si nécessaire."],
    preparation: ["Apportez vos examens, comptes rendus et la liste de vos traitements.", "Signalez vos allergies et vos antécédents médicaux ou chirurgicaux.", "Suivez uniquement les consignes de jeûne et de traitement données par l’équipe médicale."],
    steps: ["Consultation et discussion des options de traitement.", "Préparation de l’intervention et évaluation anesthésique si nécessaire.", "Suivi après l’intervention et explication des signes qui doivent alerter."],
    faq: [{ question: "La consultation implique-t-elle une opération ?", answer: "Non. Elle sert à déterminer si un traitement chirurgical est approprié et à présenter les alternatives possibles." }, { question: "Comment préparer mon retour à domicile ?", answer: "Les consignes dépendent de l’acte et de l’anesthésie. Demandez à l’équipe si un accompagnant, des soins ou un arrêt d’activité sont nécessaires." }],
  },
  urologie: {
    image: urologie, imageAlt: "Consultation urologique — illustration du service d’urologie",
    title: "Une écoute attentive, une prise en charge ciblée",
    intro: "L’urologie s’intéresse aux reins, à la vessie et aux voies urinaires, ainsi qu’à la santé reproductive masculine. La consultation permet d’explorer les troubles urinaires et de proposer un bilan adapté.",
    descriptions: ["Évaluation spécialisée et préparation lorsqu’une intervention est envisagée.", "Exploration de la prostate par ultrasons selon l’indication médicale.", "Évaluation dont les examens sont choisis en fonction de vos symptômes et de votre prescription."],
    preparation: ["Apportez vos analyses d’urine, échographies et comptes rendus antérieurs.", "Notez vos symptômes, leur durée et vos traitements actuels.", "Pour une échographie, vérifiez les consignes concernant la vessie auprès du service."],
    steps: ["Échange confidentiel sur vos symptômes et vos antécédents.", "Examen clinique et prescription d’examens complémentaires si nécessaire.", "Discussion des résultats, du traitement et du suivi adapté."],
    faq: [{ question: "Quand consulter un urologue ?", answer: "Des difficultés à uriner, des infections répétées ou des douleurs urinaires justifient un avis médical. Une impossibilité d’uriner ou une douleur intense avec fièvre nécessite une évaluation urgente." }, { question: "La consultation concerne-t-elle uniquement les hommes ?", answer: "Non. Les troubles des reins, de la vessie et des voies urinaires peuvent concerner les femmes comme les hommes." }],
  },
  "chirurgie-orthopedique": {
    image: orthopedie, imageAlt: "Examen du genou — illustration du service d’orthopédie",
    title: "Retrouver le mouvement au quotidien",
    intro: "L’orthopédie prend en charge les affections des os, des articulations, des muscles et des tendons. L’évaluation aide à choisir entre traitement médical, immobilisation, rééducation ou intervention selon votre situation.",
    descriptions: ["Évaluation des douleurs, traumatismes et limitations de mobilité.", "Immobilisation adaptée à la lésion, après examen et selon l’indication médicale.", "Traitement local proposé dans certaines situations après discussion des précautions.", "Accompagnement de la récupération fonctionnelle selon le protocole prescrit."],
    preparation: ["Apportez vos radiographies, scanners ou IRM et leurs comptes rendus.", "Précisez les circonstances du traumatisme et l’évolution de la douleur.", "Signalez vos traitements, notamment les anticoagulants, et vos allergies."],
    steps: ["Examen de la mobilité, de la douleur et des images disponibles.", "Choix d’une prise en charge adaptée à la lésion.", "Organisation du suivi et de la récupération fonctionnelle."],
    faq: [{ question: "Une fracture nécessite-t-elle toujours une opération ?", answer: "Non. La localisation, le déplacement et la stabilité de la fracture orientent le choix entre immobilisation et chirurgie." }, { question: "Quand reprendre une activité sportive ?", answer: "La reprise dépend de la lésion et de la récupération. Suivez l’avis du médecin ou du professionnel chargé de votre rééducation." }],
  },
  rhumatologie: {
    image: rhumatologie, imageAlt: "Examen des articulations de la main — illustration du service de rhumatologie",
    title: "Mieux vivre avec vos articulations",
    intro: "La rhumatologie explore les douleurs et les maladies des articulations, des os et des muscles. Le suivi vise à comprendre l’origine des symptômes, à préserver la mobilité et à adapter le traitement à votre quotidien.",
    descriptions: ["Évaluation des douleurs articulaires, de la raideur et des limitations dans la vie quotidienne.", "Examen clinique et bilan complémentaire choisi selon votre situation.", "Prise en charge individualisée, avec suivi et conseils adaptés à la maladie diagnostiquée."],
    preparation: ["Apportez vos bilans sanguins et vos examens d’imagerie précédents.", "Notez les articulations douloureuses et la durée de la raideur au réveil.", "Préparez la liste de vos médicaments et des traitements déjà essayés."],
    steps: ["Échange sur vos douleurs et leur retentissement quotidien.", "Examen des articulations et bilan complémentaire si nécessaire.", "Proposition d’un traitement et organisation du suivi."],
    faq: [{ question: "Arthrose et arthrite sont-elles identiques ?", answer: "Non. L’arthrose et les maladies inflammatoires des articulations ont des mécanismes différents. Un examen médical permet d’orienter le diagnostic." }, { question: "Faut-il arrêter toute activité physique ?", answer: "Pas systématiquement. Une activité adaptée peut être utile ; le choix et l’intensité dépendent de votre état et de l’avis de votre soignant." }],
  },
};