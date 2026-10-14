#!/usr/bin/env python3
"""Export the site's WebP photos from the raw originals.

    python3 tools/build-photos.py

Reads from "Festa 2025/" and assets/img/original/ (both uncommitted), writes to assets/img/photos/.
Each line below is: (filename fragment to match, output name, width, height, crop-center x, crop-center y).
Crop centers are 0–1; (0.5, 0.5) is the middle of the photo. An optional 7th value (left, top, right, bottom)
in 0–1 fractions pre-crops the source to that box first. Needs Pillow: pip3 install pillow
"""
import os, sys
from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRCS = [os.path.join(ROOT, 'Festa 2025'), os.path.join(ROOT, 'assets/img/original')]
OUT = os.path.join(ROOT, 'assets/img/photos')

PHOTOS = [
    # hero slideshow (16:9, two sizes each)
    ('strobel-99.',  'hero-ribbons-1920', 1920, 1080, .5, .55), ('strobel-99.',  'hero-ribbons-960', 960, 540, .5, .55),
    ('strobel-161.', 'hero-dancers-1920', 1920, 1080, .5, .55), ('strobel-161.', 'hero-dancers-960', 960, 540, .5, .55),
    ('strobel-154.', 'hero-grounds-1920', 1920, 1080, .5, .5),  ('strobel-154.', 'hero-grounds-960', 960, 540, .5, .5),
    # food
    ('strobel-111.', 'food-oven-1600', 1600, 900, .5, .5), ('strobel-111.', 'food-oven-960', 960, 540, .5, .5),
    ('strobel-107.', 'food-pasta-800', 800, 600, .5, .45),
    ('strobel-139.', 'food-mozzarella-800', 800, 600, .45, .5),
    ('strobel-136.', 'food-plate-800', 800, 600, .5, .5),
    # intro polaroids
    ('festa-italiana-woman', 'mangia-700', 700, 700, .5, .4),   # from the original site
    ('strobel-143.', 'salute-800', 800, 600, .5, .5),
    ('strobel-88.',  'famiglia-700', 700, 700, .5, .5),
    # activities
    ('strobel-57.',  'procession-1400', 1400, 788, .5, .5), ('strobel-57.', 'procession-800', 800, 450, .5, .5),
    ('strobel-62.',  'heritage-900', 900, 900, .5, .5),
    ('IMG_0626',     'bocce-900', 900, 900, .5, .5),
    ('2025-7_',      'idol-900', 900, 900, .5, .35),
    ('strobel-8.',   'sauce-900', 900, 900, .3, .5),
    ('IMG_0627',     'cucina-900', 900, 900, .5, .5),
    # get involved
    ('strobel-129.', 'volunteers-800', 800, 600, .5, .5),
    ('strobel-153.', 'sponsors-800', 800, 600, .5, .5),
    # ICC product art (from iccmilwaukee.com store)
    ('family-name-banner', 'banner-900', 900, 900, .5, .5, (.08, .04, .92, .64)),   # map only, no sample text
    ('family-name-banner', 'banner-full-700', 700, 933, .5, .5),   # whole banner, for the detail card
]
OG = ('strobel-99.', 1200, 630, .5, .55)  # social share image

def load(key):
    for src in SRCS:
        name = next((f for f in os.listdir(src) if key in f), None) if os.path.isdir(src) else None
        if name: return ImageOps.exif_transpose(Image.open(os.path.join(src, name))).convert('RGB')
    sys.exit(f'no file matching "{key}" in {SRCS}')

os.makedirs(OUT, exist_ok=True)
for key, out, w, h, cx, cy, *box in PHOTOS:
    path = os.path.join(OUT, out + '.webp')
    im = load(key)
    if box:
        l, t, r, b = box[0]; im = im.crop((round(im.width * l), round(im.height * t), round(im.width * r), round(im.height * b)))
    ImageOps.fit(im, (w, h), Image.LANCZOS, centering=(cx, cy)).save(path, 'WEBP', quality=76, method=6)
    print(f'{out:22s} {w}x{h} {os.path.getsize(path) // 1024}KB')
key, w, h, cx, cy = OG
ImageOps.fit(load(key), (w, h), Image.LANCZOS, centering=(cx, cy)).save(os.path.join(ROOT, 'assets/img/og-image.jpg'), quality=82, optimize=True, progressive=True)
print('og-image.jpg')
