import { getImageUrl } from './utils';

type Profile = {
  imageId: string;
  name: string;
  profession: string;
  awards: string[];
  discovered: string;
  imageSize: string;
}

export default function Profile(props: Profile) {
  const { imageId, name, profession, awards, discovered, imageSize } = props
  return (
    <section className="profile">
    <h2>{name}</h2>
    <img
      className="avatar"
      src={getImageUrl(imageId)}
      alt={name}
      width={imageSize}
      height={imageSize}
    />
    <ul>
      <li>
        <b>Profession: </b> 
        {profession}
      </li>
      <li>
        <b>Awards: {awards.length} </b>
        ({awards.join(',')})
      </li>
      <li>
        <b>Discovered: </b>
        {discovered}
      </li>
    </ul>
  </section>
  );
}
