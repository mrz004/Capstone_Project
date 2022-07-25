import requests
from bs4 import BeautifulSoup
import pandas as pd
from matplotlib import legend, pyplot as plt

url = 'https://www.worldometers.info/coronavirus/'
# url = 'https://exceltable.com/en/charts-in-excel/draw-charts-in-excel'
page = requests.get(url)

soup = BeautifulSoup(page.text, 'lxml')

table1 = soup.find_all('table')[1]

for row in table1.find_all('tr'):
    for cell in row.find_all('td'):
        print(cell.text, end="\t")
    print()

# plt.plot([10, 50, 65, 100], [10, 25, 35, 50])
# plt.title("My graph")
# plt.xlabel("x axis")
# plt.ylabel(" y axis")
# plt.show()
