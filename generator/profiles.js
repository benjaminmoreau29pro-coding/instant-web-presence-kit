
const PROFILES = {
  consultant: {
    label: "Consultant / Coach",
    tagline: "Expertise claire. Résultats mesurables.",
    description: "J’accompagne particuliers et entreprises vers des décisions plus efficaces grâce à une expertise ciblée et orientée résultats.",
    services: [
      "Audit & diagnostic personnalisé",
      "Coaching stratégique",
      "Plan d’action sur mesure"
    ],
    about: "Consultant indépendant, j’aide mes clients à structurer leurs idées, prendre les bonnes décisions et atteindre leurs objectifs plus rapidement.",
    cta: "Planifier un appel",
    seo: "consultant indépendant, coach professionnel",
    primaryColor: "#005691",
    themeClass: "theme-professional-sharp",
  },

  freelance: {
    label: "Freelance",
    tagline: "Flexible. Fiable. Orienté résultats.",
    description: "Prestations freelance professionnelles adaptées à vos besoins, livrées rapidement et avec rigueur.",
    services: [
      "Mission ponctuelle",
      "Accompagnement long terme",
      "Support & maintenance"
    ],
    about: "Freelance expérimenté, je travaille en direct avec mes clients pour garantir qualité, transparence et efficacité.",
    cta: "Demander un devis",
    seo: "freelance services professionnels",
    primaryColor: "#FFC300",
    themeClass: "theme-dynamic-simple",
  },

  developer: {
    label: "Développeur",
    tagline: "Du code propre. Des solutions solides.",
    description: "Développement de solutions web modernes, performantes et maintenables.",
    services: [
      "Développement web",
      "Optimisation performance",
      "Maintenance & évolutions"
    ],
    about: "Développeur spécialisé dans la création de solutions fiables et évolutives, adaptées aux besoins réels.",
    cta: "Voir les services",
    seo: "développeur web freelance",
    primaryColor: "#007ACC",
    themeClass: "theme-tech-clean",
  },

  designer: {
    label: "Designer",
    tagline: "Design utile. Esthétique efficace.",
    description: "Création d’identités visuelles et d’interfaces modernes centrées utilisateur.",
    services: [
      "Identité visuelle",
      "UI/UX design",
      "Supports graphiques"
    ],
    about: "Designer passionné par la clarté, l’expérience utilisateur et l’impact visuel.",
    cta: "Découvrir les créations",
    seo: "designer freelance",
    primaryColor: "#FF3366",
    themeClass: "theme-creative-bold",
  },

  photographer: {
    label: "Photographe",
    tagline: "Des images qui racontent votre histoire.",
    description: "Photographie professionnelle pour particuliers et entreprises.",
    services: [
      "Portraits",
      "Événementiel",
      "Photos corporate"
    ],
    about: "Photographe spécialisé dans la mise en valeur de personnes, lieux et projets.",
    cta: "Voir le portfolio",
    seo: "photographe professionnel",
    primaryColor: "#6C757D",
    themeClass: "theme-minimal-gallery",
  },

  realestate: {
    label: "Agent immobilier",
    tagline: "Vendre mieux. Acheter sereinement.",
    description: "Accompagnement immobilier personnalisé pour vendre ou acheter au meilleur prix.",
    services: [
      "Estimation",
      "Vente immobilière",
      "Accompagnement acheteur"
    ],
    about: "Professionnel de l’immobilier, je sécurise chaque étape de votre projet.",
    cta: "Estimer un bien",
    seo: "agent immobilier",
    primaryColor: "#28A745",
    themeClass: "theme-trust-classic",
  },

  lawyer: {
    label: "Avocat",
    tagline: "Conseil juridique clair et efficace.",
    description: "Accompagnement juridique professionnel et confidentiel.",
    services: [
      "Conseil juridique",
      "Contentieux",
      "Rédaction d’actes"
    ],
    about: "Avocat engagé, je défends vos intérêts avec rigueur et transparence.",
    cta: "Prendre rendez-vous",
    seo: "avocat cabinet juridique",
    primaryColor: "#495057",
    themeClass: "theme-formal-reliable",
  },

  accountant: {
    label: "Comptable",
    tagline: "Gestion claire. Sérénité totale.",
    description: "Services comptables fiables pour entrepreneurs et entreprises.",
    services: [
      "Comptabilité",
      "Fiscalité",
      "Conseil financier"
    ],
    about: "Expert-comptable dédié à la simplification de votre gestion financière.",
    cta: "Contactez-moi",
    seo: "expert comptable",
    primaryColor: "#17A2B8",
    themeClass: "theme-data-clean",
  },

  coach: {
    label: "Coach personnel",
    tagline: "Avancez avec clarté et confiance.",
    description: "Coaching personnalisé pour développement personnel et professionnel.",
    services: [
      "Coaching individuel",
      "Objectifs & mindset",
      "Suivi personnalisé"
    ],
    about: "Coach certifié, j’accompagne mes clients vers des changements durables.",
    cta: "Commencer le coaching",
    seo: "coach personnel",
    primaryColor: "#FD7E14",
    themeClass: "theme-energetic-mindset",
  },

  therapist: {
    label: "Thérapeute",
    tagline: "Écoute. Bienveillance. Équilibre.",
    description: "Accompagnement thérapeutique dans un cadre sécurisé et professionnel.",
    services: [
      "Consultations individuelles",
      "Thérapie de soutien",
      "Suivi personnalisé"
    ],
    about: "Thérapeute diplômé, je vous accompagne vers un mieux-être durable.",
    cta: "Prendre rendez-vous",
    seo: "thérapeute",
    primaryColor: "#6F42C1",
    themeClass: "theme-calm-wellness",
  },

  restaurant: {
    label: "Restaurant",
    tagline: "Une expérience culinaire authentique.",
    description: "Cuisine maison, produits frais et ambiance conviviale.",
    services: [
      "Cuisine sur place",
      "Plats à emporter",
      "Événements privés"
    ],
    about: "Restaurant indépendant mettant à l’honneur la qualité et le goût.",
    cta: "Voir le menu",
    seo: "restaurant local",
    primaryColor: "#DC3545",
    themeClass: "theme-culinary-warm",
  },

  ecommerce: {
    label: "E-commerce",
    tagline: "Achetez simplement. Rapidement.",
    description: "Boutique en ligne proposant des produits sélectionnés avec soin.",
    services: [
      "Produits de qualité",
      "Paiement sécurisé",
      "Livraison rapide"
    ],
    about: "Nous proposons une expérience d’achat simple et fiable.",
    cta: "Voir la boutique",
    seo: "boutique en ligne",
    primaryColor: "#6610F2",
    themeClass: "theme-modern-shop",
  },

  trainer: {
    label: "Formateur",
    tagline: "Apprendre efficacement.",
    description: "Formations pratiques orientées compétences.",
    services: [
      "Formations en ligne",
      "Ateliers",
      "Accompagnement pédagogique"
    ],
    about: "Formateur spécialisé dans la transmission de compétences utiles.",
    cta: "Voir les formations",
    seo: "formateur professionnel",
    primaryColor: "#343A40",
    themeClass: "theme-education-bold",
  },

  marketer: {
    label: "Marketeur",
    tagline: "Visibilité. Conversion. Croissance.",
    description: "Stratégies marketing orientées résultats mesurables.",
    services: [
      "Stratégie digitale",
      "Acquisition clients",
      "Optimisation conversions"
    ],
    about: "Spécialiste marketing, j’aide les marques à croître efficacement.",
    cta: "Booster ma visibilité",
    seo: "consultant marketing",
    primaryColor: "#FF007F",
    themeClass: "theme-digital-growth",
  },

  startup: {
    label: "Startup",
    tagline: "Construire vite. Scalabilité.",
    description: "Solutions adaptées aux startups et projets innovants.",
    services: [
      "MVP",
      "Stratégie produit",
      "Accompagnement croissance"
    ],
    about: "Nous accompagnons les startups dans leur développement.",
    cta: "Lancer mon projet",
    seo: "startup services",
    primaryColor: "#00BCD4",
    themeClass: "theme-startup-mvp",
  },

  nonprofit: {
    label: "Association",
    tagline: "Agir pour une cause.",
    description: "Organisation à but non lucratif engagée pour l’impact social.",
    services: [
      "Actions solidaires",
      "Événements",
      "Collecte de dons"
    ],
    about: "Association engagée pour un monde meilleur.",
    cta: "Nous soutenir",
    seo: "association loi 1901",
    primaryColor: "#A63D40",
    themeClass: "theme-social-impact",
  },

  artist: {
    label: "Artiste",
    tagline: "Création. Expression. Identité.",
    description: "Œuvres artistiques originales et uniques.",
    services: [
      "Créations originales",
      "Commandes personnalisées",
      "Expositions"
    ],
    about: "Artiste indépendant explorant différentes formes d’expression.",
    cta: "Découvrir les œuvres",
    seo: "artiste contemporain",
    primaryColor: "#9337F9",
    themeClass: "theme-artistic-gallery",
  },

  writer: {
    label: "Rédacteur",
    tagline: "Des mots qui font sens.",
    description: "Rédaction professionnelle claire et percutante.",
    services: [
      "Rédaction web",
      "Copywriting",
      "Contenu SEO"
    ],
    about: "Rédacteur spécialisé dans la communication efficace.",
    cta: "Commander un texte",
    seo: "rédacteur web",
    primaryColor: "#795548",
    themeClass: "theme-writing-minimal",
  },

  videographer: {
    label: "Vidéaste",
    tagline: "Des vidéos qui marquent.",
    description: "Production vidéo professionnelle.",
    services: [
      "Vidéo corporate",
      "Montage",
      "Motion design"
    ],
    about: "Vidéaste passionné par le storytelling visuel.",
    cta: "Voir les vidéos",
    seo: "vidéaste freelance",
    primaryColor: "#FF5722",
    themeClass: "theme-visual-cinematic",
  },

  personalbrand: {
    label: "Personal Brand",
    tagline: "Construisez votre image.",
    description: "Site personnel pour développer votre marque personnelle.",
    services: [
      "Positionnement",
      "Image en ligne",
      "Stratégie personnelle"
    ],
    about: "Accompagnement pour construire une image forte et cohérente.",
    cta: "Développer ma marque",
    seo: "personal branding",
    primaryColor: "#E91E63",
    themeClass: "theme-brand-bold",
  },

  localbusiness: {
    label: "Commerce local",
    tagline: "Proximité. Confiance.",
    description: "Entreprise locale au service de ses clients.",
    services: [
      "Service de proximité",
      "Produits locaux",
      "Conseil client"
    ],
    about: "Commerce indépendant engagé localement.",
    cta: "Nous rendre visite",
    seo: "commerce local",
    primaryColor: "#009688",
    themeClass: "theme-local-community",
  },

  landing: {
    label: "Landing Page",
    tagline: "Un objectif. Une conversion.",
    description: "Page optimisée pour convertir.",
    services: [
      "Message clair",
      "Call to action",
      "Optimisation conversions"
    ],
    about: "Landing page conçue pour maximiser les résultats.",
    cta: "Passer à l’action",
    seo: "landing page",
    primaryColor: "#3F51B5",
    themeClass: "theme-conversion-focused",
  }
};

const FALLBACK_PROFILE = {
  tagline: "Simple. Professional. Effective.",
  description: "A clean and professional online presence, ready to use and easy to customize.",
  services: [
    "Service One",
    "Service Two",
    "Service Three"
  ],
  about: "This website was generated to give you a solid starting point.",
  cta: "Contact us",
  primaryColor: "#2563eb",
  themeClass: "theme-default",
};