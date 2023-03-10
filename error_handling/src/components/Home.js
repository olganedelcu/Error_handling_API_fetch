import { useEffect, useState } from "react";
import BlogList from "./BlogList.js";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://github.com/olganedelcu/Error_handling_API_fetch/blob/cab808a8e8e9a5b1e2ab6981e8459160d2d0fd4f/error_handling/data/db.json')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          console.log(data);
          setIsPending(false);
        })
        .catch(error => {
            console.log(error.message);
        })
    }, 1000);
  }, []);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
