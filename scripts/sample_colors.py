from PIL import Image
import collections
im = Image.open("assets/images/brand/logo-dp.png").convert("RGB")
im.thumbnail((256, 256))
counts = collections.Counter(im.getdata())
print("TOP COLORS (hex, share):")
total = sum(counts.values())
for (r, g, b), n in counts.most_common(18):
    if n / total > 0.001:
        print(f"#{r:02X}{g:02X}{b:02X}  {100*n/total:.2f}%")
