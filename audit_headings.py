import os
import glob
from bs4 import BeautifulSoup

def analyze_headings():
    html_files = glob.glob('*.html')
    for filepath in html_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')

        print(f"\n--- {filepath} ---")
        h1s = soup.find_all('h1')
        print(f"Total H1s: {len(h1s)}")
        for h1 in h1s:
            print(f"  H1: {h1.text.strip()[:50]}")

        # Let's just find all headers to see the flow
        headers = soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
        print(f"Header Structure:")
        for h in headers:
            tag = h.name
            text = h.text.strip()[:60].replace('\n', ' ')
            indent = "  " * (int(tag[1]) - 1)
            print(f"{indent}<{tag}> {text}")

if __name__ == '__main__':
    analyze_headings()
