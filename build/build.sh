#!/bin/sh
# page.html -> 1024x1024 screenshot -> PNG. Usage: sh build.sh <out.png>
set -e
cd "$(dirname "$0")"
OUT=${1:-cand.png}
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
node render.mjs page.html
W=$(cygpath -w "$PWD/page.html")
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --dump-dom "file:///$W" 2>/dev/null | grep -o '<title>[^<]*</title>'
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1024,1024 --screenshot="$(cygpath -w "$PWD/raw.png")" "file:///$W" 2>/dev/null
python -I -c "
import sys,os
from PIL import Image
im=Image.open('raw.png').convert('RGB')
assert im.size==(1024,1024), im.size
q=im.quantize(colors=int(os.environ.get('QUANT','192')), method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE) if os.environ.get('QUANT','192')!='0' else im
q.save(sys.argv[1], optimize=True)
im.resize((300,300), Image.LANCZOS).save('small300.png')
print('png', sys.argv[1], os.path.getsize(sys.argv[1]), 'bytes')
" "$OUT"
