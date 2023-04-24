import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>てすとぺーじ</h1>
      <div>
        <Link to={`/Calc/`}>電卓</Link>
      </div>
    </>
  );
};

export default Home;