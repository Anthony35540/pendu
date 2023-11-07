    let tous=[
        'chat', 'chien', 'oiseau', 'fleur', 'arbre', 'maison', 'voiture', 'vélo', 'ordinateur', 'téléphone',
        'soleil', 'lune', 'étoile', 'plage', 'montagne', 'foret', 'rivière', 'lac', 'ville', 'pays',
        'musique', 'film', 'livre', 'peinture', 'photo', 'sculpture', 'danse', 'théatre', 'poème', 'roman',
        'pizza', 'pates', 'hamburger', 'sandwich', 'salade', 'fruit', 'légume', 'fromage', 'yaourt', 'glace',
        'football', 'basketball', 'tennis', 'natation', 'cyclisme', 'course', 'escalade', 'surf', 'ski', 'snowboard',
        'famille', 'amour', 'amitié', 'bonheur', 'santé', 'argent', 'travail', 'vacances', 'voyage', 'aventure',
        'école', 'université', 'professeur', 'élève', 'cours', 'examen', 'diplôme', 'apprentissage', 'éducation', 'connaissance',
        'bateau', 'avion', 'train', 'bus', 'métro', 'taxi', 'moto', 'vélo', 'marche', 'course',
        'mer', 'océan', 'plage', 'île', 'pont', 'voilier', 'navire', 'port', 'phare',
        'art', 'culture', 'histoire', 'peintre', 'musicien', 'écrivain', 'acteur', 'théatre', 'cinéma', 'livre',
        'cuisine', 'recette', 'restaurant', 'plat', 'repas', 'boisson', 'vin', 'bière', 'café', 'thé',
        'hôpital', 'médecin', 'infirmière', 'maladie', 'santé', 'médicament', 'pharmacie', 'chirurgie', 'opération', 'blessure',
        'politique', 'gouvernement', 'élection', 'démocratie', 'président', 'parlement', 'loi', 'justice', 'justice', 'droits',
        'fete', 'célébration', 'anniversaire', 'mariage', 'divorce', 'carnaval', 'noël', 'nouvel an', 'halloween',
        'temps', 'météo', 'saison', 'printemps', 'été', 'automne', 'hiver', 'chaleur', 'froid', 'pluie',
        'couleur', 'rouge', 'vert', 'bleu', 'jaune', 'rose', 'violet', 'orange', 'gris', 'noir', 'blanc', 'délicieux', 'sourire', 'chance', 'étoile', 'réussite', 'aventure', 'bonjour', 'papillon', 'arc-en-ciel',
        'plaisir', 'fantastique', 'arcade', 'arène', 'courage', 'travailleur', 'plume', 'belle', 'bliss', 'chanceux',
        'calme', 'capable', 'captivant', 'calin', 'confiant', 'coopératif', 'créatif', 'curieux', 'déterminé', 'éblouissant',
        'efficace', 'énergique', 'enthousiaste', 'épatant', 'étonnant', 'excellent', 'extraordinaire', 'fabuleux', 'fidèle', 'formidable',
        'gentil', 'généreux', 'glorieux', 'harmonieux', 'héroïque', 'illustre', 'impressionnant', 'inoubliable', 'joyeux', 'magnifique',
        'majestueux', 'méritant', 'miraculeux', 'méritant', 'parfait', 'passionnant', 'performant', 'plaisant', 'pouvoir', 'précieux',
        'productif', 'ravissant', 'réaliste', 'rayonnant', 'remarquable', 'renouveau', 'respecté', 'sage', 'satisfaisant', 'splendide',
        'superbe', 'talentueux', 'travail', 'triomphal', 'unique', 'valorisé', 'victoire', 'visionnaire', 'vivifiant', 'volontaire', 'Aventure', 'Fantaisie', 'Intrigant', 'Expérience', 'Charme', 'Merveille', 'Exploration', 'Énigme', 'Magie', 'Créativité',
        'Inspiration', 'Passion', 'Liberté', 'Voyage', 'Mystère', 'Émotion', 'Sagesse', 'Tranquillité', 'Harmonie', 'Amusement',
        'Musique', 'Art', 'Nature', 'Ciel', 'Étoile', 'Bonheur', 'Amour', 'Rire', 'Soleil', 'Lune',
        'Océan', 'Montagne', 'Foret', 'Rivière', 'Cascade', 'Paysage', 'Découverte', 'Amitié', 'Paix', 'Esprit',
        'Aventure', 'Reve', 'Météo', 'Tendresse', 'Couleur', 'Paradis', 'Nuit', 'Maison', 'Famille', 'Bisou',
        'Trésor', 'Complicité', 'Sourire', 'Calme', 'Parfum', 'Douceur', 'Bouquet', 'Histoire', 'Rendez-vous', 'Amitié',
        'Douceur', 'Bisous', 'Espoir', 'Passion', 'Reverie', 'Réalité', 'Calin', 'Sincérité', 'Tendresse', 'Compagnon',
        'Vie', 'Magique', 'Célèbre', 'Magnifique', 'Spectacle', 'Joie', 'Couleur', 'Plaisir', 'Sentiment',
        'Tendre', 'Instant', 'Histoire', 'Lumière', 'Saveur', 'Bonheur', 'Sourire', 'Vacances', 'Rires', 'Évasion',
        'Papillon', 'Rendez-vous', 'Coup de foudre', 'Rever', 'Éternité', 'Liberté', 'Bonheur', 'Pouvoir', 'Étoile', 'Symphonie',
        'Voyage', 'Coucher de soleil', 'Nouvelle', 'Rencontre', 'Romance', 'Bonheur', 'Bijou', 'Diamant', 'Bisou', 'Tendre',
        'Insouciance', 'Espoir', 'Éternité', 'Conte'
];
let enfant=[
    "chat", "chien", "fleur", "arbre", "soleil", "lune", "étoile", "oiseau", "poisson", "papillon",
    "arcenciel", "ours", "poupée", "voiture", "train", "bateau", "ballon", "gateau", "bonbon", "glace",
    "plage", "jardin", "montagne", "rivière", "foret", "nuage", "cœur", "famille", "ami", "école", "livre",
    "crayon", "pinceau", "musique", "danse", "rire", "sourire", "bonjour", "merci", "silvousplaît",
    "excusezmoi", "pomme", "banane", "orange", "fraise", "raisin", "pastèque", "pain", "fromage", "yaourt", "pizza",
    "spaghetti", "hamburger", "frites", "sandwich", "chocolat", "céréales", "jus", "eau", "famille", "maman",
    "papa", "frère", "sœur", "bébé", "grandmère", "grandpère", "maison", "chambre", "cuisine", "salledebains",
    "jouet", "jeu", "peluche", "avion", "train", "voiture", "bicyclette", "ballon", "poupée", "robot", "chateau",
    "parc", "zoo", "cirque", "plage", "montagne", "lac", "île", "pays", "ville", "école", "crayon", "livre",
    "papier", "ciseaux", "règle", "gomme", "calculatrice", "ordinateur", "télévision", "téléphone", "musique",
    "chanson", "danse", "spectacle", "théatre", "cirque", "magie", "peinture", "dessin", "arcenciel", "nuage",
    "pluie", "vent", "neige", "printemps", "été", "automne", "hiver", "jour", "nuit", "matin", "soir", "étoile",
    "lune", "planète", "astronaute", "aventure", "trésor", "dragon", "sirène", "princesse", "superhéros", "monstre",
    "pirate", "magicien", "conte", "reve", "cauchemar", "voyage", "exploration", "découverte", "courage", "amitié",
    "amour", "joie", "bonheur", "rire", "sourire", "pleurer", "peur", "colère", "tristesse", "mystère", "énigme",
    "aventure", "imagination", "créativité", "fantaisie", "conte", "magie", "mystère", "reve", "cauchemar",
    "exploration", "découverte", "aventurier", "explorateur", "archéologue", "pilote", "pompiers", "médecin",
    "infirmière", "policier", "voleur", "roi", "reine", "prince", "princesse", "chevalier", "dragon", "sorcière",
    "magicien", "fée", "elfe", "lutin", "géant", "robot", "monstre", "pirate", "vampire","baguette", "chateau", "fée", "elfe", "lutin", "géant", "robot", "monstre", "pirate", "vampire",
    "sorcière", "sorcellerie", "baguette", "épée", "bouclier", "trésor", "magie", "sortilège", "balai", "grenouille",
    "singe", "lion", "tigre", "éléphant", "girafe", "pingouin", "hippopotame", "panda", "koala", "kangourou", "sauterelle",
    "fourmi", "abeille", "papillon", "coccinelle", "escargot", "tortue", "déguisement", "masque", "cape", "épée",
    "bouclier", "superpouvoir", "téléportation", "invisibilité", "voler", "bataille", "épique", "galaxie", "univers",
    "extraterrestre", "robot", "puzzle", "énigme", "carte", "trésor", "avion", "bateau", "train", "randonnée", "cartoon",
    "hélicoptère", "ballon", "magasin", "travail", "voyage", "cuisine", "jardinage", "vélo", "montgolfière", "ballon",
    "atelier", "fabrication", "spectacle", "performance", "scène", "acteur", "actrice", "rôle", "comédie", "dessin",
    "illustration", "peinture", "sculpture","théatre", "musée", "zoo", "aquarium", "plongée", "carnaval",
    "fete", "spectacle", "jongleur", "clown", "acrobate", "magicien", "équilibriste", "funambule", "tigre", "dompteur",
    "trapéziste", "spectateur", "applaudissement", "décoration", "gateau", "anniversaire", "cadeau", "surprise",
    "manège", 
    "marionnette", "marionnettiste",
];
let musique = [
    "musique", "chanson", "mélodie", "harmonie", "rythme", "partition", "accord", "instrument", "guitare", "piano", "violon", "trompette", "batterie", "flûte", "saxophone", "clarinette", "tambour", "opéra", "jazz", "rock", "pop", "classique", "rap", "hip-hop", "country", "folk", "reggae", "blues", "soul", "funk", "disco", "électronique", "alternative", "chef", "soliste", "chorale", "concert", "festival", "scène", "auditorium", "studio", "producteur", "enregistrement", "mixage", "mastering", "accordéon", "orgue", "basse", "tuba", "flûte", "trombone", "pianiste", "guitariste", "chanteur", "compositeur", "parolier", "interprète", "douzième", "gamme", "piste", "harpe", "orgue électrique", "clavecin", "contrebasse", "rave", "sonate", "quatuor", "crescendo", "diminuendo", "adagio", "andante", "allegro", "tempo", "mesure", "sol", "la", "bémol", "dièse", "boucle", "sample", "beat", "synthétiseur", "effets", "reverb", "distorsion", "slide", "breakdown", "groove", "riff", "compas", "harmonica", "baryton", "soprano", "alto", "ténor", "coda", "refrain", "couplet", "bridge", "fan", "mélomane", "virtuose", "solfège", "composition",  "enregistrement", "album", "danse","concerto", "symphonie", "métal", "folklore", "bande", "film", "acoustique", "électrique", "monde", "folklore", "traditionnelle", "contemporaine", "expérimentale", "jouer", "interpréter", "composer", "faire", "aimer", "danse", "spectacle", "artiste", "compositeur", "arrangement", "disque", "orchestre", "flûte traversière","baryton","fan","violoniste","playlist", "jouer", "scène", "musicien", "mélodique", "instruments", "percussion", "piano", "divertissement", "divertissement", "disque", "écouter", "morceau", "auditeur", "parole", "rhapsodie", "harmonique", "son", "éducation", "spectacle", "folklorique", "récital", "fanatique", "billet", "enthousiasme", "interlude",
    "solennel", "tambourin", "concerto", "clavecin", "récitatif", "ténor", "choral", "entendre", "sérénade", "solennellement", "amoureux", "musicien", "acoustique", "pousser", "note", "tonalité", "opérette", "liturgique", "magnifique", "fanfare", "symphonique", "scénario", "inspiration", "accompagnement", "battre", "résine", "glockenspiel", "flûtiste", "tambourinaire", "chorale", "karaoké", "violoncelle", "sourd", "soi-disant", "communauté", "harmonique", "divertissant", "musical", 
    "divertissement", "festif", "festivités", "plaisir", "chorégraphie","folk", "pays", "mélodique", "synthétiseur", "audible", "sensation", "basse", "tuba","clarinette", "saxophoniste", "art", "culture", "inspirer","flûte de Pan","auditeur", "chanteur", "artiste", "compositeur", "improviser", "accordéoniste", "symphonique", "rétro", "gramophone", "mélodieuse", "électronique", "ballade", "soprano","lyrique", "bariton", "rockeur", "rythmique", "lyrique", "écho", "trompettiste", "fugue", "prélude", "musicalité", "stylisé", "choeur", "ballade", "tonique", "percussionniste","répétition", "hymne", "pique", "pret", "cassette", "microphone", "écouteurs", "silence", "mélodramatique", "genre", "rock", "enchaînement", "glissando", "flûtiste", "violoniste", "tambourin", "concerto", "pianissimo", "fortissimo", "piano", "percussion", "partition", "quintette", "mélodie", "rythmique", "accord", "tambourin", "sonorité", "choriste", "fanfare", "percussion", "orchestre", "partition", "soprano", "baryton", "ténor", "alto", "accord mineur", "accord majeur", "partition de piano", "guitare électrique", "harmonie jazz", "batteur","contrebasse","fan",  "vinyle", "tube", "musique de fond", "concert en plein air", "partie de danse", "mouvement musical", "artiste indépendant", " classique", "électronique","pop", "jazz", "country", " blues", "musique hip-hop", "reggae", "métal", "alternative", "expérimentale","folk","soul","funk","disco",
];
let Films_Series = [
   "action", "aventure", "sciencefiction", "comédie", "drame", "horreur", "fantaisie", "animation", "superhéros", "magie", "espionnage", "mystère", "thriller", "fantôme", "zombie", "vampire", "monstre", "policier", "détective", "crime", "gangster", "western", "guerre", "historique", "romance", "musical", "biographie", "documentaire", "réalisateur", "acteur", "actrice", "scénario", "effets spéciaux", "costumes", "maquillage", "bandeoriginale", "cinéma", "télévision", "série", "épisode", "suspense", "intrigue", "action", "aventure", "espionnage", "superhéros", "sciencefiction", "animation", "fantaisie", "horreur", "thriller", "comédie", "drame", "romance", "musical", "biographie", "documentaire", "western", "guerre", "historique", "animation", "film", "série", "acteur", "actrice", "réalisateur", "scénariste", "caméra", "casting", "distribution", "montage", "effets spéciaux", "bande-annonce", "oscars", "cérémonie", "suspense", "intrigue", "critique", 
   "adaptation", "scène", "décor", "costumes", "maquillage", "effets spéciaux", "bandeoriginale", "cinéma", "télévision", "épisode", "finale", "émission", "spectacle", "prime", "realityshow", "télécommande", "diffusion", "écran", "programme", "animation", "musique", "émission", "documentaire", "public", "spectateur", "acteur", "actrice", "rôle", "casting", "distribution", "scénariste", "scénario", "adaptation", "production", "réalisateur", "réalisation", "caméra", "tournage", "montage", "effets spéciaux", "costumes", "maquillage", "bandeoriginale", "scène", "décor", "oscar", "cérémonie", "nomination", "prix", "cinéaste", "star", "starlette", "écran", "projecteur", "celluloïd", "pellicule", "bobine", "production", "écran", "programme", "télévision", "télédiffusion", "spectateur", "téléspectateur", "émission", "spectacle", "prime", "realityshow", "télécommande", "diffusion", "écran", "programme", "animation", "musique", "émission", "documentaire", "public", "spectateur", "acteur", "actrice", "rôle", "casting", "distribution", "scénariste", "scénario", "adaptation", "production", "réalisateur", "réalisation", "caméra", "tournage", "montage", "effets spéciaux", "costumes", "maquillage", "bandeoriginale", "scène", "décor", "oscar", "cérémonie", "nomination", "prix", "cinéaste", "star", "starlette", "écran", "projecteur", "celluloïd", "pellicule", "bobine", "production", "écran", "programme", "télévision", "télédiffusion", "spectateur", "téléspectateur", "émission", "spectacle", "prime", "realityshow", "télécommande", "diffusion", "écran", "programme", "animation",
    "musique", "émission", "documentaire", "public", "spectateur"
];
let vacances = [
    "plage", "soleil", "mer", "montagne", "camping", "randonnée", "aventure", "détente", 
    "exotique", "découverte", "excursion", "exploration", "voyage", "destination", "sable", "bronzer", "baignade", "surf", "plongée", "île", "nature", "paysage", "hôtel", "villa", "tourisme", "culture", "tradition", "culinaire", "dépaysement", "détente", "relaxation", "farniente", "escape", "vacancier", "touriste", "routard", "guide", "carte", "avion", "train", "voiture", "croisière", "bagage", "valise", "excursion", "itinéraire", "découverte", "exploration", "souvenir", "plaisir", "joie", "bonheur", "aventure", "évasion", "échappée", "loisirs", "repos", "village", "ville", "bord de mer", "station balnéaire", "ski", "snowboard", "patinage", "motoneige", "ambiance", "célébration", "fete", "festival", "carnaval", "danse", "musique", "gastronomie", "plaisirs", "excursion", "activité", "pays", "frontière", "joyeux", "vif", "éclatant", "excitant", "amusement", "réjouissance", "récréation", "jeu", "délice", "allégresse", "agrément", "satisfaction", "béatitude", "tranquillité", "relaxation", "décontraction", "congé", "repos", "répit", "échappatoire", "asile", "courderecréation", "rangement", "décharge", "décompression", "pause", "récréation"
];
let pays = [
    "Afghanistan", "Albanie", "Algérie", "Allemagne", "Andorre", "Angola", "Argentine", "Arménie", "Australie", "Autriche", "Azerbaïdjan", "Bahamas", "Bahreïn", "Bangladesh", "Barbade", "Bélarus", "Belgique", "Belize", "Bénin", "Bhoutan", "Birmanie", "Bolivie", "Botswana", "Brésil", "Brunéi", "Bulgarie","Burundi", "Cambodge", "Cameroun", "Canada","Chili","Chine", "Chypre","Colombie","Comores", "Congo","Croatie", "Cuba", "Danemark", "Djibouti", "Dominique", "Égypte","Équateur", "Érythrée", "Espagne", "Estonie", "Eswatini", "usa", "Éthiopie", "Fidji", "Finlande", "France", "Gabon", "Gambie", "Géorgie", "Ghana", "Grèce", "Grenade", "Guatémala", "Guinée","Guyana", "Haïti", "Honduras", "Hongrie", "Inde", "Indonésie", "Irak", "Iran", "Irlande", "Islande", "Israël", "Italie", "Jamaïque", "Japon", "Jordanie", "Kazakhstan", "Kenya", "Kiribati", "Koweït", "Laos", "Lesotho", "Lettonie", "Liban", "Liberia", "Libye", "Liechtenstein", "Lituanie", "Luxembourg","Madagascar", "Malaisie", "Malawi", "Maldives", "Mali", "Malte", "Maroc", "Marshall", "Maurice", "Mauritanie", "Mexique", "Micronésie", "Moldavie", "Monaco", "Mongolie", "Monténégro", "Mozambique", "Namibie", "Nauru", "Népal", "Nicaragua", "Niger", "Nigéria", "Norvège","Oman", "Ouganda", "Ouzbékistan", "Pakistan", "Palaos", "Panama", "Paraguay", "PaysBas", "Pérou", "Philippines", "Pologne", "Portugal", "Qatar","Roumanie", "RoyaumeUni", "Russie", "Rwanda","Salomon", "Salvador", "Samoa","Sénégal", "Serbie", "Seychelles","Singapour", "Slovaquie", "Slovénie", "Somalie", "Soudan", "SoudanDuSud", "SriLanka", "Suède", "Suisse", "Suriname", "Syrie", "Tadjikistan", "Tanzanie", "Tchad", "Thaïlande","Togo", "Tonga","Tunisie", "Turkménistan", "Turquie", "Tuvalu", "Ukraine", "Uruguay", "Vanuatu", "Vatican", "Venezuela", "Vietnam", "Yémen", "Zambie", "Zimbabwe"
];
var disney = [
    "Mickey", "Minnie", "Donald", "Goofy", "Pluto", "Cinderella",  "Ariel", "Simba", "Aladdin", "Elsa", "Buzz Lightyear", "Woody", "Mulan", "Pocahontas", "Hercules", "Tarzan", "Rapunzel", "Eeyore", "Tiana", "Belle", "Beast", "Dumbo", "Timon", "Pumbaa", "Nemo", "Dory", "Moana", "Remy", "Cruella de Vil", "Scar", "Jafar", "Ursula", "Maleficent", "Gaston", "Hades","Jasmine", "Aurora", "Peter Pan", "Mater","Remy", "Winnie the Pooh", "Tigger", "Eeyore", "Piglet"
  ];
  
let words = tous;
//let words = ['maison','lola','chien','chat','poison',]
let used_words = [];
let nb_errors = 0;
let base = document.getElementById("base");
let poteau = document.getElementById("poteau");
let transversale = document.getElementById("transversale");
let angle = document.getElementById("angle");
let corde = document.getElementById("corde");
let tete = document.getElementById("tete");
let Corp = document.getElementById("corp");
let brasDroit = document.getElementById("bras_droit");
let brasGauche = document.getElementById("bras_gauche");
let jambeDroit = document.getElementById("jambe_droit");
let jambeGauche = document.getElementById("jambe_gauche");
let resultat = document.getElementById("result");
let correction = document.getElementById("correction");
let play = document.getElementById('generate');
let setting = document.getElementById('setting');
let submit = document.getElementById('submit');
let closeSetting = document.getElementById('close_setting');
let userSetting = document.getElementById('user_setting');
let selectCategorie = document.getElementById('select');
let keybordActif = true;

//fonction appelé avec le onclick() dans le html pour récuperer la valeur du menu deroulant et charger le tableau de mot qui correspond 

function selectOption() {
    //console.log("submit ok !");
    if (selectCategorie.value === "tous"){
        //si tous, concat() permet de regrouper tout les tableaux de mots entre eux
        words=tous.concat(enfant,musique,Films_Series,vacances,pays);
        //console.log(words);
    }else if(selectCategorie.value === "enfant"){
        words=enfant;
        // console.log(words);
    }else if(selectCategorie.value === "musique"){
        words=musique;
        // console.log(words);
    }else if(selectCategorie.value === "Films_Series"){
        words=Films_Series;
        // console.log(words);
    }else if(selectCategorie.value === "vancances"){
        words=vacances;
        // console.log(words);
    }else if(selectCategorie.value === "pays"){
        words=pays;
        // console.log(words);
    }else if(selectCategorie.value === "disney"){
        words=disney;
        // console.log(words);
    }
}
//constante qui stocke les parties de l'image du pendu 
const elementsToDisplay = [
    base, poteau, transversale, angle, corde, tete, Corp, brasDroit, brasGauche, jambeDroit, jambeGauche
];
correction.style.display=("none");
function get_random_word() {
    if (words.length == 0) {
        // Il ne me reste plus de mots à trouver... Je réinitialise le tableau words
        words = [...used_words];
        used_words = [];
    }
    let random_index = Math.trunc(Math.random() * words.length)
    let word = words[random_index]
    used_words.push(word)
    words.splice(random_index, 1)
    return word
}
function select_a_word() {
    document.body.removeEventListener('keyup', search_if_letter_is_in_word)
    document.body.addEventListener('keyup', search_if_letter_is_in_word);
    //on stock le mot généré aleatoirement dans la variable word
    let word = get_random_word();
    document.querySelector("#result").innerHTML = '';
    // console.warn(word)
    for (letter of word) {
        const newSpan = document.createElement("span");
        newSpan.classList.add('letter','rotate-letter');
        newSpan.setAttribute('data-letter', letter.toLowerCase());
        newSpan.setAttribute('contenteditable','true'); // Rend le span éditable
        resultat.appendChild(newSpan);
    }
    //console.log(word);
    //la variable correction affiche le mot en cours
    correction.innerHTML= word;
    //on affiche plus le bouton jouer quand le  mot est généré
    play.style.display="none";
}
play.addEventListener('click', select_a_word)
let nb_letters_found = 0;
let letters_already_pressed = [];
const search_if_letter_is_in_word = (event) => {
    let letter_pressed = event.key.toLowerCase();
    let cells = document.querySelectorAll('.letter');
    // Je vérifie que ce n'est pas une lettre déjà recherchée au préalable.
    if (!letters_already_pressed.includes(letter_pressed)) {
        letters_already_pressed.push(letter_pressed)
        let found = false;
        for (let cell of cells) {
            if (cell.getAttribute('data-letter') == letter_pressed) {
                cell.innerHTML = letter_pressed
                found = true
                nb_letters_found++;
            }
        }
        if (!found) {
            nb_errors++
            if (nb_errors >= 1 && nb_errors <= elementsToDisplay.length) {
                for (let i = 0; i < nb_errors; i++) {
                    elementsToDisplay[i].classList.remove("hidden");
                    elementsToDisplay[i].classList.add("visible");
                }
                //si on est a 11 eurreurs, la partie est terminé, on affiche la correctionle bouton jouer et on supprime l'affichage des lettres à trouver 
                if (nb_errors === 11) {
                    //document.querySelector('#nb_errors').innerText = " Perdu !";
                    resultat.style.display = "none";
                    correction.style.display = "block";
                    play.style.display="inline-block";
                }
            }
        }
    }
   // console.log(nb_letters_found, "VS", cells.length)
   //si toutes les lettres sont trouvés
    if (nb_letters_found == cells.length && nb_errors < 11){
       // console.warn("Vous avez gagné !!!");
        document.querySelector('#nb_errors').innerText = "Gagné !";
       
        // Supprimer l'écouteur d'événements de clavier pour arrêter la saisie
        document.body.removeEventListener('keyup', search_if_letter_is_in_word);
        play.style.display="inline-block";
    }
}
//fonction qui désactive le clavier 
function desactiverKeybord(){
    //on initialise la variable à faux 
    keybordActif = false;
    // Désactive le clavier
    document.body.removeEventListener('keyup', search_if_letter_is_in_word);
    // Réactive le clavier après 1 seconde
    setTimeout(function () {
        document.body.addEventListener('keyup', search_if_letter_is_in_word);
    }, 1000);
}
play.addEventListener('click', jouer )
    function jouer(){
        //si clavier est actif on desactive le clavier le temps de l'annimation des lettres( variable à vrai)
        if (keybordActif) {
             desactiverKeybord() ;
        }
        if (correction.style.display="block"){
            correction.style.display="none";
            resultat.style.display="flex";
            nb_errors=0;
            if (nb_errors == 0){
                elementsToDisplay.forEach((element) => {
                    element.classList.remove("visible");
                    element.classList.add("hidden");
                });
            }
            document.querySelector('#nb_errors').innerText = "";
            nb_letters_found = 0;
            letters_already_pressed = [];
        }
        if (letters_already_pressed < 0) {
            letters_already_pressed=[];
            //console.log(letters_already_pressed); 
        }
    }
//affichage de la popup de réglage du jeux
function displaySetting(){
    console.log("clik ok ✅");
    if (userSetting.classList.contains("user_setting_open")){
        userSetting.classList.remove("user_setting_open");
        userSetting.classList.add("user_setting_close");
    }else{
        userSetting.classList.remove("user_setting_close");
        userSetting.classList.add("user_setting_open");
    }
}

//les commandes qui ouvre et ferme la popup de reglage
setting.addEventListener("click",displaySetting );
closeSetting.addEventListener("click",displaySetting );
submit.addEventListener("click",displaySetting );