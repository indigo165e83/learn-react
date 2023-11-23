import { getImageUrl } from './utils02';

type AvatarProps = {
  person: {
    name: string;
    imageId: string;
  };
  size: number;  
}

function Avatar(props: AvatarProps) {
  const {person, size} = props
  let thumbnailSize = 's';
  if (size > 90) {
    thumbnailSize = 'b';
  }  
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Challenge02() {
  return (
    <>
      <Avatar
        size={40}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
      <Avatar
        size={120}
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
      />
    </>
  );
}
