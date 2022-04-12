import { useState, useEffect } from "react";

function Api() {
  const [loading, setLoading] = useState(true);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMenus(json.data.movies);
        setLoading(false);
      });
  }, []);

  console.log(menus);

  return (
    <div>
      {loading ? null : (
        <div>
          {menus.map((menu) => (
            <div key={menu.id}>{menu.title}</div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Api;
