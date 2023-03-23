// Globals
const IMG_WIDTH = 300;
const IMG_HEIGHT = 160;
const FOLDER_PATH = "./assets/png/"
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var proceedBtn = document.getElementById('proceedBtn');
proceedBtn.addEventListener("click", progressList)
var answer = document.getElementById("answer");
var imgs = ['af.png', 'ax.png', 'al.png', 'dz.png', 'as.png', 'ad.png', 'ao.png', 
            'ai.png', 'aq.png', 'ag.png', 'ar.png', 'am.png', 'aw.png', 'au.png', 
            'at.png', 'az.png', 'bs.png', 'bh.png', 'bd.png', 'bb.png', 'by.png', 
            'be.png', 'bz.png', 'bj.png', 'bm.png', 'bt.png', 'bo.png', 'ba.png', 
            'bw.png', 'bv.png', 'br.png', 'io.png', 'bn.png', 'bg.png', 'bf.png', 
            'bi.png', 'kh.png', 'cm.png', 'ca.png', 'cv.png', 'bq.png', 'ky.png', 
            'cf.png', 'td.png', 'cl.png', 'cn.png', 'cx.png', 'cc.png', 'co.png', 
            'km.png', 'cg.png', 'cd.png', 'ck.png', 'cr.png', 'ci.png', 'hr.png', 
            'cu.png', 'cw.png', 'cy.png', 'cz.png', 'dk.png', 'dj.png', 'dm.png', 
            'do.png', 'ec.png', 'eg.png', 'sv.png', 'gb-eng.png', 'gq.png', 'er.png', 
            'ee.png', 'sz.png', 'et.png', 'fk.png', 'fo.png', 'fj.png', 'fi.png', 
            'fr.png', 'gf.png', 'pf.png', 'tf.png', 'ga.png', 'gm.png', 'ge.png', 
            'de.png', 'gh.png', 'gi.png', 'gr.png', 'gl.png', 'gd.png', 'gp.png', 
            'gu.png', 'gt.png', 'gg.png', 'gn.png', 'gw.png', 'gy.png', 'ht.png', 
            'hm.png', 'hn.png', 'hk.png', 'hu.png', 'is.png', 'in.png', 'id.png', 
            'ir.png', 'iq.png', 'ie.png', 'im.png', 'il.png', 'it.png', 'jm.png', 
            'jp.png', 'je.png', 'jo.png', 'kz.png', 'ke.png', 'ki.png', 'kp.png', 
            'kr.png', 'xk.png', 'kw.png', 'kg.png', 'la.png', 'lv.png', 'lb.png', 
            'ls.png', 'lr.png', 'ly.png', 'li.png', 'lt.png', 'lu.png', 'mo.png', 
            'mg.png', 'mw.png', 'my.png', 'mv.png', 'ml.png', 'mt.png', 'mh.png', 
            'mq.png', 'mr.png', 'mu.png', 'yt.png', 'mx.png', 'fm.png', 'md.png', 
            'mc.png', 'mn.png', 'me.png', 'ms.png', 'ma.png', 'mz.png', 'mm.png', 
            'na.png', 'nr.png', 'np.png', 'nl.png', 'nc.png', 'nz.png', 'ni.png', 
            'ne.png', 'ng.png', 'nu.png', 'nf.png', 'mk.png', 'gb-nir.png', 'mp.png', 
            'no.png', 'om.png', 'pk.png', 'pw.png', 'ps.png', 'pa.png', 'pg.png', 
            'py.png', 'pe.png', 'ph.png', 'pn.png', 'pl.png', 'pt.png', 'pr.png', 
            'qa.png', 're.png', 'ro.png', 'ru.png', 'rw.png', 'bl.png', 'sh.png', 
            'kn.png', 'lc.png', 'mf.png', 'pm.png', 'vc.png', 'ws.png', 'sm.png', 
            'st.png', 'sa.png', 'gb-sct.png', 'sn.png', 'rs.png', 'sc.png', 'sl.png', 
            'sg.png', 'sx.png', 'sk.png', 'si.png', 'sb.png', 'so.png', 'za.png', 
            'gs.png', 'ss.png', 'es.png', 'lk.png', 'sd.png', 'sr.png', 'sj.png', 
            'se.png', 'ch.png', 'sy.png', 'tw.png', 'tj.png', 'tz.png', 'th.png', 
            'tl.png', 'tg.png', 'tk.png', 'to.png', 'tt.png', 'tn.png', 'tr.png', 
            'tm.png', 'tc.png', 'tv.png', 'ug.png', 'ua.png', 'ae.png', 'gb.png', 
            'us.png', 'um.png', 'uy.png', 'uz.png', 'vu.png', 'va.png', 've.png', 
            'vn.png', 'vg.png', 'vi.png', 'gb-wls.png', 'wf.png', 'eh.png', 'ye.png', 
            'zm.png', 'zw.png'];
var names = ['Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa',
            'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 
            'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 
            'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 
            'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 
            'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 
            'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 
            'Canada', 'Cape Verde', 'Caribbean Netherlands', 'Cayman Islands', 'Central African Republic', 
            'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos Islands', 'Colombia', 'Comoros', 
            'Republic of the Congo', 'DR Congo', 'Cook Islands', 'Costa Rica', "Côte d'Ivoire", 
            'Croatia', 'Cuba', 'Curaçao', 'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 
            'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'England', 'Equatorial Guinea', 
            'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 
            'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern and Antarctic Lands', 
            'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 
            'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 
            'Heard Island and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 
            'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 
            'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kosovo', 
            'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 
            'Lithuania', 'Luxembourg', 'Macau', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 
            'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 
            'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 
            'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 
            'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'North Macedonia', 'Northern Ireland', 
            'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 
            'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 
            'Puerto Rico', 'Qatar', 'Réunion', 'Romania', 'Russia', 'Rwanda', 'Saint Barthélemy', 
            'Saint Helena, Ascension and Tristan da Cunha', 'Saint Kitts and Nevis', 'Saint Lucia', 
            'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 
            'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Scotland', 'Senegal', 'Serbia', 'Seychelles', 
            'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 
            'South Africa', 'South Georgia', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 
            'Svalbard and Jan Mayen', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 
            'Thailand', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 
            'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 
            'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 
            'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'British Virgin Islands', 'United States Virgin Islands', 
            'Wales', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];

var session_names = [];
var session_img = [];
var numFlags;

var filename; 
var country_name;
var inputTextField = document.getElementById("guess");
inputTextField.addEventListener('input', updateGuessTable)

var score, seen;


var currentFlag = 0;

function updateGuessTable(evt) {
    console.log(this.value);
    var userInput = this.value.toLowerCase();

    // Iterate over names
    var possibleGuesses = []

    for (let i = 0; i < session_names.length; i++) {

        // See if countryname starts with userInput
        currentCountry = session_names[i].toLowerCase();

        if (currentCountry.startsWith(userInput)) {
            possibleGuesses.push(currentCountry);
        } 
    }

    

    // if the length of the list is > 5 guesses, reduce the size of the list to five
    if (possibleGuesses.length > 5) {
        possibleGuesses = possibleGuesses.slice(0, 5);
    }
    console.log("possibleGuesses DOWN TO 5: " + possibleGuesses)




    // Loop over all elem in possibleGuesses
    // for (var i = possibleGuesses.length - 1; i >= 0; i--) {
    //     console.log("i: " + i + ", value: " + possibleGuesses[i]);
    // }

    // Clear all <tr> elements out of the <table>
    var table = document.getElementById("autocomplete");

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    

    // for (guess of possibleGuesses) {
        
    // }


    // var possibleGuess1 = possibleGuesses[0]
    // var possibleGuess2 = possibleGuesses[1]
    // var possibleGuess3 = possibleGuesses[2]
    // var possibleGuess4 = possibleGuesses[3]
    // var possibleGuess5 = possibleGuesses[4]
}

function progressList() {

    if (inputTextField.value == "") {
        alert("You need to type a country name!");
        return 
    }

    console.clear()
    console.log("button press");
    console.log("1: " + inputTextField.value);
    console.log("2: " + answer.innerText);
    if (inputTextField.value.toLowerCase() == answer.innerText.toLowerCase()) {
        console.log("you're smart")
        score++
    } else {
        console.log("you dumb idiot")
    }
    seen++
    console.log("your score is " + score + "; you've seen " + seen + " flags so far.");
    
    // should clear the text value
    inputTextField.value = null

    currentFlag++;
    if (currentFlag >= numFlags) {
        console.log("YOU'RE DONE")
        canvas.style.display = "hidden";
        // GO TO NEXT PAGE
        return 
    }
    filename = session_img[currentFlag];
    country_name = session_names[currentFlag];
    drawFlag(filename);
    answer.innerText = country_name;
}
function drawFlag(filename) {
    // Place image on the canvas
    var img = new Image();
    img.src = FOLDER_PATH + filename
    img.width = IMG_WIDTH;
    img.height = IMG_HEIGHT;
    img.onload = function() {
        context.drawImage(img, 0, 0, IMG_WIDTH, IMG_HEIGHT);
    }    
}

$(document).ready(function(){
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    session_img = [];
    session_names = [];
    score = 0;
    seen = 0;

    // import data from imgs, names, into per-session randomized list to iterate thru later
    numFlags = imgs.length;
    for (let i = 0; i < numFlags; i++) {
        const randomIndex = Math.floor(Math.random() * imgs.length);
        const movingImg = imgs[randomIndex];
        const movingName = names[randomIndex];
        // append to the list which is session_img the current movingImg
        session_img.push(movingImg);
        session_names.push(movingName);
        //remove the used ones
        imgs.splice(randomIndex, 1);
        names.splice(randomIndex, 1);        
    }

    console.log("session_img: " + session_img.length);
    console.log("session_names: " + session_names.length);

    currentFlag = 0;

    filename = session_img[currentFlag]
    country_name = session_names[currentFlag]

    drawFlag(filename)
    // console.log("Drawing " + filename)
    answer.innerText = country_name;

});