import os
import re

color_map = {
    'slate-900': 'orange-950',
    'gray-900': 'orange-950',
    'slate-800': 'orange-900',
    'gray-800': 'orange-900',
    'slate-700': 'orange-800',
    'gray-700': 'orange-800',
    'slate-600': 'orange-700',
    'gray-600': 'orange-700',
    'slate-500': 'orange-600',
    'gray-500': 'orange-600',
    'slate-400': 'orange-400',
    'gray-400': 'orange-400',
    'slate-300': 'orange-300',
    'gray-300': 'orange-300',
    'slate-200': 'orange-200',
    'gray-200': 'orange-200',
    'slate-100': 'orange-100',
    'gray-100': 'orange-100',
    'slate-50': 'orange-50',
    'gray-50': 'orange-50',
    'black': 'orange-950', # replacing black with dark orange
}

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    for old, new in color_map.items():
        new_content = re.sub(rf'\b{old}\b', new, new_content)
        
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f'Updated {filepath}')

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.css'):
            process_file(os.path.join(root, file))
