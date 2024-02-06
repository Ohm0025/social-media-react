import { useNavigate } from "react-router-dom";

const useProfileIcon = () => {
  const navigate = useNavigate();

  const clickToOther = (userId: number) => {
    let encodeUserId = encodeURIComponent(userId);
    navigate("/final-project/profile/" + encodeUserId);
  };
  return {
    clickToOther,
  };
};

export default useProfileIcon;
