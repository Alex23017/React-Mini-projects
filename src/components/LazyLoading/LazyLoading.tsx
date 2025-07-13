import { useInView } from "react-intersection-observer";
import "./style.scss";

const list = [
  "https://avatars.mds.yandex.net/i?id=dc7361b95e9b0527c543cbb558a72055_l-5878560-images-thumbs&n=27&h=480&w=480",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSssU2Js36GCuDlnHjAH2sFvZRvTk0HpNqDvQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJdM8f40_j6KxfDy3vv3fJ7warWEISmy8kow&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIE6Esg3WHsUMrrMntP1IGlhBThbNrNh9SFg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYdv9oJNqhw-TfRN4LA38cLHWlyVapASIKA&s",
  "https://avatars.mds.yandex.net/i?id=dc7361b95e9b0527c543cbb558a72055_l-5878560-images-thumbs&n=27&h=480&w=480",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSssU2Js36GCuDlnHjAH2sFvZRvTk0HpNqDvQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJdM8f40_j6KxfDy3vv3fJ7warWEISmy8kow&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIE6Esg3WHsUMrrMntP1IGlhBThbNrNh9SFg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdYdv9oJNqhw-TfRN4LA38cLHWlyVapASIKA&s",
  "https://avatars.mds.yandex.net/i?id=dc7361b95e9b0527c543cbb558a72055_l-5878560-images-thumbs&n=27&h=480&w=480",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSssU2Js36GCuDlnHjAH2sFvZRvTk0HpNqDvQ&s",

];

interface IPhoto {
  name: string;
  imageUrl: string;
}

const Photo = ({ name, imageUrl }: IPhoto) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="container">
      {inView ? (
        <img className="img shadow-md shadow-black" src={imageUrl} alt="" />
      ) : (
        <div className="container_skeleton"></div>
      )}
      <h3 className=" text-2xl p-5">{name}</h3>
    </div>
  );
};

const LazyLoading = () => {
  return (
    <div className="container-photo">
      {list.map((item, i) => (
        <Photo key={i} name={`Photo number ${i + 1}`} imageUrl={item} />
      ))}
    </div>
  );
};

export default LazyLoading;
