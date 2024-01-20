import { Backdrop, CircularProgress } from "@mui/material";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const BackDropLoading = ({ open }: Props) => {
  return (
    <Backdrop
      sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      //   onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackDropLoading;
