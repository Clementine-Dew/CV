// RECUPERATION DIVS POUR AJOUTER EVENT ET AFFICHER DIVS CARD
const LINK_ABOUT = document.getElementById(`menu_about`);
const LINK_FORMATIONS = document.getElementById(`menu_formations`);
const LINK_EXPERIENCES = document.getElementById(`menu_experiences`);
const LINK_CONTACT = document.getElementById(`menu_contact`);

// RECUPERATION DIV PARENT DES DIVS MENU
const MENU_DIVS = document.getElementById(`menu_div`);

// RECUPERATION DIV NAME_TITLE
const NAME_TITLE = document.getElementById(`name_title`);

    //* verification
console.log(LINK_ABOUT, LINK_FORMATIONS, LINK_EXPERIENCES, LINK_CONTACT, MENU_DIVS, NAME_TITLE, );

// RECUPERATION DIVS CARD
const ABOUT = document.getElementById(`card_about`);
const FORMATIONS = document.getElementById(`card_formations`);
const EXPERIENCES = document.getElementById(`card_experiences`);
const CONTACT = document.getElementById(`card_contact`);

    //* verification
console.log(ABOUT, FORMATIONS, EXPERIENCES, CONTACT, );

// RECUPERATION MODE BTNS
const BTN_DARK = document.getElementById(`dark_mode_btn`);
const BTN_CLASSIC = document.getElementById(`classic_mode_btn`);

    //* verification
console.log(BTN_CLASSIC, BTN_DARK, );


// --------------------------------
// --------------------------------


// --- FUNCTIONS ---
// SWITCH MODE
function setMode() {
    BTN_DARK.onclick = () => {
        document.body.classList.remove(...document.body.classList);
        document.body.className = `dark_mode`;

        if (document.body.classList.contains(`dark_mode`)) {
            BTN_DARK.style.display = `none`;
            BTN_CLASSIC.style.display = `block`;
        };
    };

    BTN_CLASSIC.onclick = () => {
        document.body.classList.remove(...document.body.classList);
        document.body.className = `classic_mode`;

        if (document.body.classList.contains(`classic_mode`)) {
            BTN_CLASSIC.style.display = `none`;
            BTN_DARK.style.display = `block`;
        };
    };

};

// ADD CLASS 'HIDDEN' SUR MENU_DIVS ET NAME_TITLE
function addHiddenClass () {
    MENU_DIVS.classList.add(`hidden`);
    NAME_TITLE.classList.add(`hidden`);
};

// REMOVE CLASS 'HIDDEN' SUR MENU_DIVS ET NAME_TITLE
function removeHiddenClass () {
    MENU_DIVS.classList.remove(`hidden`);
    NAME_TITLE.classList.remove(`hidden`);
};

function createItems(container, titleText, paragraph) {
    container.innerHTML = "";

    let parent_div = document.createElement('div');
    parent_div.classList.add('parent_div');
    container.append(parent_div);

    let child_div_1 = document.createElement('div');
    child_div_1.classList.add('child_div_1');
    parent_div.append(child_div_1);

    let h1 = document.createElement('h1');
    h1.classList.add('title_div_1');
    h1.innerText = titleText; 
    child_div_1.append(h1);

    let child_div_2 = document.createElement('div');
    child_div_2.classList.add('child_div_2');
    parent_div.append(child_div_2);

    let p = document.createElement(`p`);
    p.classList.add(`p_child_div_2`);
    p.innerHTML = message;
    child_div_2.append(p);

    //* verification
    console.log(container, );

};

// --------------------------------
// --------------------------------


// ABOUT ADD EVENT AU CLICK
LINK_ABOUT.onclick = () => {
    ABOUT.classList.remove(`hidden`);

    message = `Passionnée par le développement web, j'aime apprendre en créant des projets qui me permettent de comprendre réellement ce que je fais : mini-jeux, interfaces interactives, petits outils en Django, mises en page soignées en CSS. Je suis persévérante et j'aime aller au bout d'un problème, même complexe, en abordant chaque difficulté comme une occasion d'apprendre.  Curieuse et autonome, je progresse grâce à mon envie constante de m'améliorer. J'aime concevoir des interfaces propres, cohérentes et agréables à utiliser.`;

    addHiddenClass();
    createItems(ABOUT, "A propos de moi", message);
};

// FORMATIONS ADD EVENT AU CLICK
LINK_FORMATIONS.onclick = () => {
    FORMATIONS.classList.remove(`hidden`);

    message =
        `<span style="font-size: 15px;">Mai 2026 - aujourd'hui</span> : <span style="color: var(--span-txt-color)">Web App Developper</span> | <span style="font-style: italic; font-size: 15px;">Interface 3 Schaerbeek</span> <br>
        <span style="font-size: 15px;">Avr 2026 (1 mois)</span> : <span style="color: var(--span-txt-color)">Initiation à la programmation</span> (pré-formation) | <span style="font-style: italic; font-size: 15px;">Interface 3 Schaerbeek</span> <br>
        <span style="font-size: 15px;">Oct 2025 - Dec 2025</span> : <span style="color: var(--span-txt-color)">HTML, CSS et JavaScript (certification TOSA)</span> | <span style="font-style: italic; font-size: 15px;">Bruxelles Formation</span> <br>
        <span style="font-size: 15px;">2016 - 2023</span> : Formations dans le cadre de ma fonction d'éducatrice | <span style="font-style: italic; font-size: 15px;">Schaerbeek</span> <br>
        <span style="font-size: 15px;">Sep 2012 - Juin 2014</span> : Certificat de qualification "<span style="color: var(--span-txt-color)">Agent d'éducation</span>" | <span style="font-style: italic; font-size: 15px;">INEPS Morlanwelz</span> <br>
        <span style="font-size: 15px;">Sep 2009 - Juin 2011</span> : <span style="color: var(--span-txt-color)">Institutrice primaire</span> | <span style="font-style: italic; font-size: 15px;">Condorcet Morlanwelz</span> <br>
        <span style="font-size: 15px;">Juin 2009</span> : CESS "<span style="color: var(--span-txt-color)">Histoire de l'art et littérature</span>" | <span style="font-style: italic; font-size: 15px;">Ecole du Futur Mons</span>`;

    addHiddenClass();
    createItems(FORMATIONS, "Formations", message);
};

// EXPERIENCES ADD EVENT AU CLICK
LINK_EXPERIENCES.onclick = () => {
    EXPERIENCES.classList.remove(`hidden`);

    message =
        `<span style="font-size: 15px;">Août 2022 - Août 2025</span> : <span style="color: var(--span-txt-color)">Educatrice</span> dans l'enseignement spécialisé de type 1 et 2 | <span style="font-style: italic; font-size: 15px;">Schaerbeek</span> <br>
        <span style="font-size: 15px;">Juil 2023/24/25</span> : <span style="color: var(--span-txt-color)">Educatrice</span> en plaine pour enfants à besoins spécifiques | <span style="font-style: italic; font-size: 15px;">OCS Schaerbeek</span> <br>
        <span style="font-size: 15px;">Sep 2014 - Août 2022</span> : <span style="color: var(--span-txt-color)">Educatrice</span> dans l'enseignement primaire | <span style="font-style: italic; font-size: 15px;">Schaerbeek</span> <br>
        <span style="font-size: 15px;">Sep 2014 - Août 2022</span> : <span style="color: var(--span-txt-color)">Educatrice</span> dans l'enseignement primaire | <span style="font-style: italic; font-size: 15px;">Schaerbeek</span> <br>
        <span style="font-size: 15px;">Juil - Août 2013 & Avr 2014</span> : <span style="color: var(--span-txt-color)">Educatrice</span> en centre de vacances<span style="color: var(--star-color);">*</span> | <span style="font-style: italic; font-size: 15px;">Morlanwelz</span> <br>
        <span style="font-size: 15px;">Jan 2013 - Mars 2013</span> : <span style="color: var(--span-txt-color)">Educatrice</span> en maison de repos et soins<span style="color: var(--star-color);">*</span> | <span style="font-style: italic; font-size: 15px;">"La Maison de Mariemont" Morlanwelz</span> <br>
        <br>
        <div style="text-align: center;">&bull;&bull;&bull;</div> <br>
        <span style="font-size: 15px;">Juil 2005 - Août 2007</span> : <span style="color: var(--span-txt-color)">Animatrice</span> au Patro<span style="color: var(--star-color)">**</span> | <span style="font-style: italic; font-size: 15px;">Leval-Trahegnies</span> <br>
        <br>
        <div style="text-align: end; font-size: 12px;">Stage<span style="color: var(--star-color);">*</span> | Bénévolat<span style="color: var(--star-color);">**</span></div>`;

    addHiddenClass();
    createItems(EXPERIENCES, "Expériences", message);
};

// CONTACT ADD EVENT AU CLICK
LINK_CONTACT.onclick = () => {
    CONTACT.classList.remove(`hidden`);

    message = `<form id="contact_container">
                    <div class="raw">
                        <div id="name_container" class="column_form">
                            <label for="name">Prénom</label>
                            <input type="text" name="name" id="name">
                        </div>
                        <div id="mail_container" class="column_form">
                            <label for="mail">Adresse e-mail</label>
                            <input type="mail" name="mail" id="mail">
                        </div>
                    </div>
                    <textarea name="cv_message" id="cv_message"></textarea>
                    <br>
                    <button type="submit" id="submit_btn">MAILTO:me</button>
                </form>
                <div class="icon_links">
                    <span class="github_icon">
                        <a href="https://github.com/Clementine-Dew" target="_blank">
                            <img src="./assets/icons/github.png" alt="icon github pour accéder à mon compte Github" height="40px;">
                        </a>
                    </span>
                    <span class="codeberg_icon">
                        <a href="https://codeberg.org/Clem_Dew" target="_blank">
                            <img src="./assets/icons/montagnes.png" alt="icon montagne pour accéder à mon compte Codeberg" height="40px;">
                        </a>
                    </span>
                    <span class="linkedin_icon">
                        <a href="https://www.linkedin.com/in/clementine-dewerchin-323311192/" target="_blank">
                            <img src="./assets/icons/linkedin.png" alt="icon linkedin pour accéder à mon compte Linkedin" height="40px;">
                        </a>
                    </span>
                </div>`;

    addHiddenClass();
    createItems(CONTACT, "Contact", message);
    
    // RECUPERATION DU FORM
    const FORM = document.getElementById(`contact_container`);

    // ADD EVENT FORM
    FORM.onsubmit = (event) => {
        event.preventDefault();

        const USER_NAME = document.getElementById(`name`).value;
        const USER_MAIL = document.getElementById(`mail`).value;
        const USER_MESSAGE = document.getElementById(`cv_message`).value;

        //* verification
        console.log(USER_NAME, USER_MAIL, USER_MESSAGE, );

        window.location.href = `mailto:clementine.dewerchin@mailfence.com?subject=Contact depuis CV&body=Nom: ${USER_NAME}%0AEmail: ${USER_MAIL}%0AMessage: ${USER_MESSAGE}`;

    };
};


// ADD EVENT AU POINTERDOWN
document.onpointerdown = (event) => {
    if (ABOUT.contains(event.target)) {
        return;
    };

    if (FORMATIONS.contains(event.target)) {
        return;
    };

    if (EXPERIENCES.contains(event.target)) {
        return;
    };

    if (CONTACT.contains(event.target)) {
        return;
    };

    // VIDER CONTAINER AU POINTERDOWN
    ABOUT.innerText = ``;
    FORMATIONS.innerText = ``;
    EXPERIENCES.innerText = ``;
    CONTACT.innerText = ``;

    // ADD 'HIDDEN' CLASS
    ABOUT.classList.add(`hidden`);
    FORMATIONS.classList.add(`hidden`);
    EXPERIENCES.classList.add(`hidden`);
    CONTACT.classList.add(`hidden`);

    removeHiddenClass();
};

setMode();

