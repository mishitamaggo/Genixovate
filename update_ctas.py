import glob
import re

files = glob.glob('*.html')

replacements = {
    'Start a Project': 'Start Conversation',
    'Send Message': 'Start Conversation',
    'Book a Discovery Call': 'Start Conversation',
    'Book Discovery Call': 'Start Conversation',
    'Schedule Strategy Session': 'Start Conversation',
    'Describe Your Needs': 'Start Conversation',
    'Start Your Brand': 'Start Conversation',
    'Build Growth Systems': 'Start Conversation',
    'Inquire for Scaling': 'Start Conversation',
    'Start Now': 'Start Conversation',
    'Try Demo': 'Try Demo', # Keep this one?
    'Buy Now': 'Buy Now', # Keep
    'Add to Service Package': 'Add to Service Package' # Keep 
}

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.content = f.read()
    
    original_content = content
    for old, new in replacements.items():
        content = content.replace(f">{old}<", f">{new}<")
        content = content.replace(f'"{old}"', f'"{new}"')
        content = content.replace(f"{old} &rarr;", f"{new} &rarr;")
        content = content.replace(f">{old} <", f">{new} <")
        # Direct string replace for these
        content = content.replace(old, new)

    if content != original_content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")

print("Done.")
