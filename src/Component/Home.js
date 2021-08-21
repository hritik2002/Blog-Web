import useFetch from "./useFetch";
import BlogList from "../Component/BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {blogs && (
        <div className="home">
          <BlogList blogs={blogs} title={"Blog Lists"} />
        </div>
      )}
    </div>
  );
};

export default Home;
