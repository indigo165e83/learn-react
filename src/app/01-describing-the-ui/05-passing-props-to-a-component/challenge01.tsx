import { getImageUrl } from './utils'
import Profile from './profile'

export default function Challenge01() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        name={"Maria Skłodowska-Curie"}
        imageId={"szV5sdG"}
        imageSize={"70"}
        profession={"physicist and chemist"}
        awards={["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]}
        discovered={"polonium (element)"}
      />
      <Profile 
        name={"Katsuko Saruhashi"}
        imageId={"YfeOqp2"}
        imageSize={"70"}
        profession={"geochemist"}
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discovered={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}
