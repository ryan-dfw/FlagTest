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

for flag in flag_list:
    print(f"Processing: {flag}")
    
    img_name = flag[0][0].get("src").split("/")[4]
    print(img_name)
    flag_files.append(img_name)
    
    country_name = flag[0][1].text
    print(country_name)
    flag_names.append(country_name)

# print(dom.xpath(flag_table_xpath)[0][0][0])

print(flag_files, "\n\n\n")
print(flag_names)