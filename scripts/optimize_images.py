from PIL import Image
import os
RAW = "assets/images/facebook-raw"
BRAND = "assets/images/brand"
MEDIA = "assets/images/media"
os.makedirs(MEDIA, exist_ok=True)

def save_webp(im, path, q=82):
    im.save(path, "WEBP", quality=q, method=6)

def save_png(im, path):
    im.save(path, "PNG", optimize=True)

# Logo derivatives (from 720px master)
logo = Image.open(f"{BRAND}/logo-dp.png").convert("RGB")
for size, name in [(160, "logo-dp-160.png"), (96, "logo-dp-96.png")]:
    save_png(logo.resize((size, size), Image.LANCZOS), f"{BRAND}/{name}")
for size, name in [(180, f"{BRAND}/apple-touch-icon.png"), (32, f"{BRAND}/favicon-32.png")]:
    save_png(logo.resize((size, size), Image.LANCZOS), name)

# OG image 1200x630 from cover artwork
cover = Image.open(f"{RAW}/cover_3376").convert("RGB")
w, h = cover.size
target_h = 630
scale = target_h / h
cover_scaled = cover.resize((int(w * scale), target_h), Image.LANCZOS)
cw = cover_scaled.size[0]
left = (cw - 1200) // 2
og = cover_scaled.crop((left, 0, left + 1200, target_h))
og.save(f"{BRAND}/og-image.jpg", "JPEG", quality=86, optimize=True)

# WebP media assets
g2 = Image.open(f"{RAW}/g2_738").convert("RGB")
save_webp(g2, f"{MEDIA}/education-anorectal.webp", 84)
g2.resize((480, int(480 * g2.size[1] / g2.size[0])), Image.LANCZOS).save(f"{MEDIA}/education-anorectal-480.webp", "WEBP", quality=80, method=6)
g7 = Image.open(f"{RAW}/g7_720").convert("RGB")
save_webp(g7, f"{MEDIA}/education-foods.webp", 82)
cov = Image.open(f"{RAW}/cover_3376").convert("RGB")
cov.thumbnail((1200, 10000), Image.LANCZOS)
save_webp(cov, f"{MEDIA}/cover-banner.webp", 82)

print("OUTPUTS:")
for root, _, files in os.walk(BRAND):
    for f in files:
        p = os.path.join(root, f)
        print(f"{p:55s} {os.path.getsize(p):>8,} B")
for root, _, files in os.walk(MEDIA):
    for f in files:
        p = os.path.join(root, f)
        print(f"{p:55s} {os.path.getsize(p):>8,} B")
