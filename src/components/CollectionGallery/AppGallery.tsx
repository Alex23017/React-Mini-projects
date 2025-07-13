import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Collection } from "./Collection";
import "./index.scss";

interface IGallery {
  name: string;
  photos: string;
}

function AppGallery() {
  const [categoriesId, setCategoriesId] = useState(0);
  const [page, setPage] = useState(1);
  const [collection, setCollection] = useState<IGallery[]>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const category = categoriesId ? `category=${categoriesId}` : "";

    fetch(`https://68623a8296f0cc4e34b8cece.mockapi.io/gallery?page=${page}&limit=3&${category}`)
      .then((response) => response.json())
      .then((json) => setCollection(json))
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoriesId, page]);

  useEffect(() => {
    if (location.pathname === "/gallery") {
      setOpen(true);
    }
  }, [location]);

  const categories = ["Горы", "Море", "Архитектура", "Города"];

  return (
    <div className="container-gallery">
      <div className="App-gallery ">
        <div className="container-menu">
          <h1 className="title-gallery">Моя коллекция фотографий</h1>
          <div className="top"></div>
          <ul className="tags">
            {isLoading ? (
              <h3 className="title-loading" style={{ marginRight: "20px" }}>
                Загрузка изображений...
              </h3>
            ) : (
              categories.map((item, index) => (
                <li
                  key={item}
                  onClick={() => setCategoriesId(index)}
                  className={`${categoriesId === index ? "active shadow-md shadow-black" : ""}`}>
                  {item}
                </li>
              ))
            )}
          </ul>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            placeholder="Поиск по названию"
          />
        </div>
        {open && (
          <div className="content">
            {collection
              .filter((obj) => {
                return obj.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((obj, index) => (
                <Collection key={index} name={obj.name} images={obj.photos} />
              ))}
          </div>
        )}

        {open && (
          <ul className="pagination">
            {[...Array(3)].map((_, i) => (
              <li key={i} onClick={() => setPage(i + 1)} className={page === i + 1 ? "active" : ""}>
                {i + 1}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AppGallery;
