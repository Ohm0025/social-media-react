import { useNavigate } from "react-router-dom";

const HomeUserBtn = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-6">
      <button
        className="text-[16px] sm:text-[26px]"
        onClick={() => navigate("/")}>
        <i className="fa-solid fa-home"></i>
      </button>
      <button
        className="text-[16px] sm:text-[26px]"
        onClick={() => navigate("/friend")}>
        <i className="fa-solid fa-user-group"></i>
      </button>
    </div>
  );
};

export default HomeUserBtn;
