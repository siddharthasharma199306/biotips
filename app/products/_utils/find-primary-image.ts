const findPrimaryImage = (images: string[]): string => {
  if (!images || images.length === 0) {
    return "products/FALLBACK-IMAGES/fallback-primary-product-image.png";
  }

  // Assuming the first image is the primary image
  return images[0];
};

export default findPrimaryImage;
