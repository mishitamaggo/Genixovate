import os
import glob
import re

directory = r"c:\Users\lenovo\OneDrive\Documents\Genixovate"
html_files = glob.glob(os.path.join(directory, "*.html"))

# We want to replace the entire <ul class="nav-links"> block with a standard one
# However, we must preserve the 'active' class on the correct link.
def get_standard_nav(filename):
    basename = os.path.basename(filename)
    
    links = [
        ("index.html", "Home"),
        ("services.html", "Services"),
        ("pricing.html", "Pricing"),
        ("our-work.html", "Our Work"),
        ("how-we-build.html", "How We Build"),
        ("about.html", "About")
    ]
    
    nav_html = '            <ul class="nav-links">\n'
    for href, text in links:
        if href == basename:
            nav_html += f'                <li><a href="{href}" class="active">{text}</a></li>\n'
        else:
            nav_html += f'                <li><a href="{href}">{text}</a></li>\n'
            
    # Add the contact button
    nav_html += '                <li><a href="contact.html" class="btn btn-primary">Start a Project</a></li>\n            </ul>'
    return nav_html

footer_services_block = """                <div class="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="services.html">Brand Launch</a></li>
                        <li><a href="services.html">Brand Growth</a></li>
                        <li><a href="services.html">Brand Excellence</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                    </ul>
                </div>"""

for filepath in html_files:
    if os.path.basename(filepath) == 'brand-systems.html':
        continue # we will delete this one probably, or just skip changing it
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace nav-links block
    pattern = re.compile(r'            <ul class="nav-links">.*?            </ul>', re.DOTALL)
    new_nav = get_standard_nav(filepath)
    content = pattern.sub(new_nav, content)
    
    # Replace footer brand systems block
    # In some files it's already "Services" (like services.html), so we do a general replace:
    brand_systems_footer = re.compile(r'                <div class="footer-col">\s*<h4>Brand Systems</h4>\s*<ul>.*?</ul>\s*</div>', re.DOTALL)
    content = brand_systems_footer.sub(footer_services_block, content)
    
    # In case services.html has a slightly different footer link (View Pricing vs Pricing), just standardize:
    services_footer = re.compile(r'                <div class="footer-col">\s*<h4>Services</h4>\s*<ul>.*?</ul>\s*</div>', re.DOTALL)
    content = services_footer.sub(footer_services_block, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated navigation and footers in all HTML files.")
