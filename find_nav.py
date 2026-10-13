with open(r'outscale-design-studio.base44.app/assets/index-CBLIxwrn.js', 'r', encoding='utf-8') as f:
    code = f.read()

import re

for keyword in ['Residential', 'Commercial', 'Services', 'Projects', 'Outscale']:
    matches = [m.start() for m in re.finditer(re.escape(keyword), code)]
    print(f'=== Keyword: {keyword} (count: {len(matches)}) ===')