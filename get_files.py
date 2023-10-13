import os
import requests
from bs4 import BeautifulSoup
from lxml import etree

FOLDER_PATH = "./assets/png/"

flags = sorted(os.listdir(FOLDER_PATH))

# print(type(flags))
# print(flags)

# For each id, make a request to the detail page
url = 'https://flagpedia.net/index'
r = requests.get(url)

# Save the HTML response and parse the DOM
soup = BeautifulSoup(r.text, 'html.parser')
dom = etree.HTML(str(soup))

flag_table_xpath = "/html/body/div[2]/main/div/ul[2]"

flag_list = dom.xpath(flag_table_xpath)[0]
print(len(list(flag_list)))

flag_files = []
flag_names = []

# for flag in flag_list:
    
#     img_name = flag[0][0].get("src").split("/")[4]
#     country_name = flag[0][1].text
    
#     answer = input(f"Do you want to keep {country_name}?\t\t")
#     if answer == "y":
#         flag_files.append(img_name)
#         flag_names.append(country_name)
#     else:
#         continue

# print(dom.xpath(flag_table_xpath)[0][0][0])

print(flag_files, "\n\n\n")
print(flag_names)

reduced_flag_names = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Republic of the Congo', 'DR Congo', 'Costa Rica', "Côte d'Ivoire", 'Croatia', 'Cuba', 'Curaçao', 'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'England', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Greenland', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Northern Ireland', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'São Tomé and Príncipe', 'Saudi Arabia', 'Scotland', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Wales', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe']
reduced_file_names = ['af.png', 'al.png', 'dz.png', 'ad.png', 'ao.png', 'aq.png', 'ag.png', 'ar.png', 'am.png', 'aw.png', 'au.png', 'at.png', 'az.png', 'bs.png', 'bh.png', 'bd.png', 'bb.png', 'by.png', 'be.png', 'bz.png', 'bj.png', 'bt.png', 'bo.png', 'ba.png', 'bw.png', 'br.png', 'bn.png', 'bg.png', 'bf.png', 'bi.png', 'kh.png', 'cm.png', 'ca.png', 'cv.png', 'cf.png', 'td.png', 'cl.png', 'cn.png', 'co.png', 'km.png', 'cg.png', 'cd.png', 'cr.png', 'ci.png', 'hr.png', 'cu.png', 'cw.png', 'cy.png', 'cz.png', 'dk.png', 'dj.png', 'dm.png', 'do.png', 'ec.png', 'eg.png', 'sv.png', 'gb-eng.png', 'gq.png', 'er.png', 'ee.png', 'sz.png', 'et.png', 'fo.png', 'fj.png', 'fi.png', 'fr.png', 'gf.png', 'ga.png', 'gm.png', 'ge.png', 'de.png', 'gh.png', 'gr.png', 'gl.png', 'gd.png', 'gt.png', 'gn.png', 'gw.png', 'gy.png', 'ht.png', 'hn.png', 'hu.png', 'is.png', 'in.png', 'id.png', 'ir.png', 'iq.png', 'ie.png', 'im.png', 'it.png', 'jm.png', 'jp.png', 'jo.png', 'kz.png', 'ke.png', 'ki.png', 'kp.png', 'kr.png', 'kw.png', 'kg.png', 'la.png', 'lv.png', 'lb.png', 'ls.png', 'lr.png', 'ly.png', 'li.png', 'lt.png', 'lu.png', 'mg.png', 'mw.png', 'my.png', 'mv.png', 'ml.png', 'mt.png', 'mh.png', 'mr.png', 'mu.png', 'mx.png', 'fm.png', 'md.png', 'mc.png', 'mn.png', 'me.png', 'ma.png', 'mz.png', 'mm.png', 'na.png', 'nr.png', 'np.png', 'nl.png', 'nz.png', 'ni.png', 'ne.png', 'ng.png', 'mk.png', 'gb-nir.png', 'no.png', 'om.png', 'pk.png', 'pw.png', 'ps.png', 'pa.png', 'pg.png', 'py.png', 'pe.png', 'ph.png', 'pl.png', 'pt.png', 'qa.png', 'ro.png', 'ru.png', 'rw.png', 'kn.png', 'lc.png', 'vc.png', 'ws.png', 'sm.png', 'st.png', 'sa.png', 'gb-sct.png', 'sn.png', 'rs.png', 'sc.png', 'sl.png', 'sg.png', 'sk.png', 'si.png', 'sb.png', 'so.png', 'za.png', 'ss.png', 'es.png', 'lk.png', 'sd.png', 'sr.png', 'se.png', 'ch.png', 'sy.png', 'tj.png', 'tz.png', 'th.png', 'tl.png', 'tg.png', 'to.png', 'tt.png', 'tn.png', 'tr.png', 'tm.png', 'tv.png', 'ug.png', 'ua.png', 'ae.png', 'gb.png', 'us.png', 'uy.png', 'uz.png', 'vu.png', 'va.png', 've.png', 'vn.png', 'gb-wls.png', 'eh.png', 'ye.png', 'zm.png', 'zw.png']

print(len(reduced_flag_names))
print(len(reduced_file_names))