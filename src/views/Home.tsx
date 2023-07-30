import { Button } from "antd";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Home = memo(() => {
  const navigate = useNavigate();
  function handleToUse() {
    if (localStorage.getItem("token")) {
      navigate("/manage/list");
    } else navigate("/login");
  }
  return (
    <div className="bg-[url('/wjx-banner-pc.jpg')] bg-cover bg-center w-full h-[929px] text-center">
      <Button type="primary" onClick={handleToUse}>
        开始使用
      </Button>
    </div>
  );
});

export default Home;
