const IMG_WIDTH = 300;
const IMG_HEIGHT = 160;
const FOLDER_PATH = "./assets/png/";
const imgs = [
    "af.png",
    "al.png",
    "dz.png",
    "ad.png",
    "ao.png",
    "aq.png",
    "ag.png",
    "ar.png",
    "am.png",
    "aw.png",
    "au.png",
    "at.png",
    "az.png",
    "bs.png",
    "bh.png",
    "bd.png",
    "bb.png",
    "by.png",
    "be.png",
    "bz.png",
    "bj.png",
    "bt.png",
    "bo.png",
    "ba.png",
    "bw.png",
    "br.png",
    "bn.png",
    "bg.png",
    "bf.png",
    "bi.png",
    "kh.png",
    "cm.png",
    "ca.png",
    "cv.png",
    "cf.png",
    "td.png",
    "cl.png",
    "cn.png",
    "co.png",
    "km.png",
    "cg.png",
    "cd.png",
    "cr.png",
    "ci.png",
    "hr.png",
    "cu.png",
    "cw.png",
    "cy.png",
    "cz.png",
    "dk.png",
    "dj.png",
    "dm.png",
    "do.png",
    "ec.png",
    "eg.png",
    "sv.png",
    "gb-eng.png",
    "gq.png",
    "er.png",
    "ee.png",
    "sz.png",
    "et.png",
    "fo.png",
    "fj.png",
    "fi.png",
    "fr.png",
    "gf.png",
    "ga.png",
    "gm.png",
    "ge.png",
    "de.png",
    "gh.png",
    "gr.png",
    "gl.png",
    "gd.png",
    "gt.png",
    "gn.png",
    "gw.png",
    "gy.png",
    "ht.png",
    "hn.png",
    "hu.png",
    "is.png",
    "in.png",
    "id.png",
    "ir.png",
    "iq.png",
    "ie.png",
    "im.png",
    "it.png",
    "jm.png",
    "jp.png",
    "jo.png",
    "kz.png",
    "ke.png",
    "ki.png",
    "kp.png",
    "kr.png",
    "kw.png",
    "kg.png",
    "la.png",
    "lv.png",
    "lb.png",
    "ls.png",
    "lr.png",
    "ly.png",
    "li.png",
    "lt.png",
    "lu.png",
    "mg.png",
    "mw.png",
    "my.png",
    "mv.png",
    "ml.png",
    "mt.png",
    "mh.png",
    "mr.png",
    "mu.png",
    "mx.png",
    "fm.png",
    "md.png",
    "mc.png",
    "mn.png",
    "me.png",
    "ma.png",
    "mz.png",
    "mm.png",
    "na.png",
    "nr.png",
    "np.png",
    "nl.png",
    "nz.png",
    "ni.png",
    "ne.png",
    "ng.png",
    "mk.png",
    "gb-nir.png",
    "no.png",
    "om.png",
    "pk.png",
    "pw.png",
    "ps.png",
    "pa.png",
    "pg.png",
    "py.png",
    "pe.png",
    "ph.png",
    "pl.png",
    "pt.png",
    "qa.png",
    "ro.png",
    "ru.png",
    "rw.png",
    "kn.png",
    "lc.png",
    "vc.png",
    "ws.png",
    "sm.png",
    "st.png",
    "sa.png",
    "gb-sct.png",
    "sn.png",
    "rs.png",
    "sc.png",
    "sl.png",
    "sg.png",
    "sk.png",
    "si.png",
    "sb.png",
    "so.png",
    "za.png",
    "ss.png",
    "es.png",
    "lk.png",
    "sd.png",
    "sr.png",
    "se.png",
    "ch.png",
    "sy.png",
    "tj.png",
    "tz.png",
    "th.png",
    "tl.png",
    "tg.png",
    "to.png",
    "tt.png",
    "tn.png",
    "tr.png",
    "tm.png",
    "tv.png",
    "ug.png",
    "ua.png",
    "ae.png",
    "gb.png",
    "us.png",
    "uy.png",
    "uz.png",
    "vu.png",
    "va.png",
    "ve.png",
    "vn.png",
    "gb-wls.png",
    "eh.png",
    "ye.png",
    "zm.png",
    "zw.png",
];
const names = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Republic of the Congo",
    "DR Congo",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "England",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Greenland",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "North Korea",
    "South Korea",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Northern Ireland",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "São Tomé and Príncipe",
    "Saudi Arabia",
    "Scotland",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Wales",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
const proceedBtn = document.getElementById("proceedBtn");
const answer = document.getElementById("answer");
const inputTextField = document.getElementById("guess");

let full_name_list = names.slice();
let session_names = [];
let session_img = [];
let currentFlag = 0;
let numFlags, filename, country_name, score, seen;

proceedBtn.addEventListener("click", progressList);
inputTextField.addEventListener("input", updateGuessTable);
document.addEventListener("DOMContentLoaded", function () {
    const subtitleElement = document.getElementById("navbar-index-subtitle");
    const urlParams = new URLSearchParams(window.location.search);
    const encodedNumFlags = urlParams.get("numFlags");
    const numFlags = decodeURIComponent(encodedNumFlags);
    subtitleElement.textContent = `Testing ${numFlags} flags...`;
});

function updateGuessTable() {
    console.log(this.value);
    let userInput = this.value.toLowerCase();

    // Iterate over names
    let possibleGuesses = [];
    for (let i = 0; i < full_name_list.length; i++) {
        const currentCountry = full_name_list[i].toLowerCase();
        currentCountry.startsWith(userInput) ? possibleGuesses.push(currentCountry) : null;
    }
    possibleGuesses.length > 5 ? possibleGuesses = possibleGuesses.slice(0, 5) : null;

    let table = document.getElementById("autocomplete");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    // Populate table
    let guess;
    for (guess of possibleGuesses) {
        let tr_elem = document.createElement("tr");
        let td_elem = document.createElement("td");

        td_elem.textContent = guess;
        td_elem.className = "suggestion";

        tr_elem.appendChild(td_elem);
        table.appendChild(tr_elem);
    }

    let suggestions = document.getElementsByClassName("suggestion");
    for (let i = 0; i < suggestions.length; i++) {
        let currentSuggestion = suggestions[i];
        currentSuggestion.addEventListener("click", function () {
            populateTextField(suggestions, i);
        });
    }
}

function populateTextField(suggestionList, index) {
    // Set input field value to selected value
    document.getElementById("guess").value = suggestionList[index].innerText;

    // Click progress button
    progressList();

    // Empty the table
    const table = document.getElementById("autocomplete");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    // Shift focus to input field
    document.getElementById("guess").focus();
}

function progressList() {
    if (inputTextField.value === "") {
        alert("You need to type a country name!");
        return;
    }
    inputTextField.value.toLowerCase() === answer.innerText.toLowerCase() ? score++ : null;
    seen++;
    inputTextField.value = null;
    currentFlag++;
    if (currentFlag >= numFlags) {
        console.log("YOU'RE DONE");
        canvas.style.display = "hidden";
        return;
    }
    filename = session_img[currentFlag];
    country_name = session_names[currentFlag];
    drawFlag(filename);
    answer.innerText = country_name;
    remainReport();

    if (seen === session_names.length) {
        let total = session_names.length;
        window.location.href =
            "score.html?numFlags=" +
            encodeURIComponent(total.toString()) +
            "&numCorrect=" +
            encodeURIComponent(score.toString());
    }
}

function remainReport() {
    document.getElementById("remnant").innerHTML =
        "only " + (session_names.length - seen) + " flags remain";
}

function drawFlag(filename) {
    const img = new Image();
    img.src = FOLDER_PATH + filename;
    img.width = IMG_WIDTH;
    img.height = IMG_HEIGHT;
    img.onload = function () {
        context.drawImage(img, 0, 0, IMG_WIDTH, IMG_HEIGHT);
    };
}

$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const encodedNumFlags = urlParams.get("numFlags");
    const numFlags = decodeURIComponent(encodedNumFlags);

    context.clearRect(0, 0, canvas.width, canvas.height);
    session_img = [];
    session_names = [];
    score = 0;
    seen = 0;

    for (let i = 0; i < numFlags; i++) {
        const randomIndex = Math.floor(Math.random() * imgs.length);
        const movingImg = imgs[randomIndex];
        const movingName = names[randomIndex];
        session_img.push(movingImg);
        session_names.push(movingName);
        imgs.splice(randomIndex, 1);
        names.splice(randomIndex, 1);
    }

    currentFlag = 0;
    filename = session_img[currentFlag];
    country_name = session_names[currentFlag];
    drawFlag(filename);
    answer.innerText = country_name;
    remainReport();
});
