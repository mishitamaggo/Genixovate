from PIL import Image
import numpy as np
import sys

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # Get the background color from top-left pixel
    bg_color = data[0, 0, :3].astype(np.int32)
    
    # Calculate color distance and create alpha mask
    pixels = data[:, :, :3].astype(np.int32)
    dist = np.linalg.norm(pixels - bg_color, axis=2)
    
    # Soft thresholding for anti-aliased text
    # The background is uniform, so distance is near 0 for bg.
    # Text is dark, so distance is high.
    alpha = np.clip((dist - 15) * 5, 0, 255).astype(np.uint8)
    
    # Because there might be semi-transparent pixels, we should keep their original rgb
    # but for text where it's anti-aliased with background, we should ideally subtract background.
    # We will just invert the background with alpha channel.
    # To avoid white fringes on dark backgrounds:
    # Instead of original pixels, we can set the RGB to the darkest pixel color,
    # or just use the original RGB but with the new alpha mask.
    data[:, :, 3] = alpha
    
    Image.fromarray(data).save(output_path)
    print(f"Saved to {output_path}")

input_img = sys.argv[1]
output_img = sys.argv[2]
remove_background(input_img, output_img)
