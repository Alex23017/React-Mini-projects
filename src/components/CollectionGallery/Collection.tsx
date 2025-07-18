interface ICollection {
  images: string;
  name: string;
}

export const Collection = ({ images, name }: ICollection) => {
  return (
    <div className="collection shadow-md shadow-black ">
      <img className="collection__big shadow-md shadow-black " src={images[0]} alt="Item" />
      <div className="collection__bottom ">
        <img className="collection__mini shadow-md shadow-black  " src={images[1]} alt="Item" />
        <img className="collection__mini shadow-md shadow-black " src={images[2]} alt="Item" />
        <img className="collection__mini shadow-md shadow-black " src={images[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  );
};
