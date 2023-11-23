export function getImageUrl(
  person: {
    name: string;
    imageId: string;
  }, 
  size: string
  ) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
