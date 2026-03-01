import os
import glob
import re

html_files = glob.glob('*.html')

navbar_logo_old = r'<a\s+href="index\.html"\s+class="logo">Genixovate\.</a>'
navbar_logo_new = r'<a href="index.html" class="logo" style="display: flex; align-items: center; text-decoration: none;"><img src="assets/logo.png" alt="Genixovate" style="height: 36px; width: auto;"></a>'

footer_logo_old = r'<span\s+class="logo"[^>]*>Genixovate\.</span>'
footer_logo_new = r'<img src="assets/logo.png" alt="Genixovate Logo" class="logo" style="height: 48px; width: auto; margin-bottom: 20px; display: block; filter: brightness(0) invert(1);">'

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update navbar
    content = re.sub(navbar_logo_old, navbar_logo_new, content)
    
    # Update footer
    content = re.sub(footer_logo_old, footer_logo_new, content)

    # Add favicon if not present
    if 'rel="icon"' not in content:
        content = content.replace("</head>", "    <link rel=\"icon\" type=\"image/png\" href=\"assets/favicon.png\">\n</head>")
        
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
print(f"Updated {len(html_files)} HTML files.")

js_files = glob.glob('*.js')

for file_path in js_files:
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        content = re.sub(navbar_logo_old, navbar_logo_new, content)
        content = re.sub(footer_logo_old, footer_logo_new, content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

print(f"Updated {len(js_files)} JS files.")
