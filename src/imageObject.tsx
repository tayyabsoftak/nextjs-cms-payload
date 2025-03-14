export const getImageUrl = (image: any) => {
  if (typeof image === 'string') {
    return image
  } else if (image && typeof image === 'object' && image.url) {
    return image.url
  }
}
