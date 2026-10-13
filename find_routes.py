with open(r'outscale-design-studio.base44.app/assets/index-CBLIxwrn.js', 'r', encoding='utf-8') as f:
    code = f.read()

gh_pos = code.find('var gh =')
_h_pos = code.find('function _h(')
vh_pos = code.find('function vh()')
yh_pos = code.find('var yh =')

print(f'gh_pos: {gh_pos}')
print(f'_h_pos: {_h_pos}')
print(f'vh_pos: {vh_pos}')
print(f'yh_pos: {yh_pos}')

print('Section to replace:')
print(code[gh_pos:yh_pos])
