import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, DialogActions } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};
type Props = {
  isOpen: boolean;
  handleClose: () => void;
  questionTag: string;
  questionDetail: string;
  cb: () => void;
};

export default function ConFirmModal({
  isOpen,
  handleClose,
  questionTag,
  questionDetail,
  cb,
}: Props) {
  const handleCancel = () => {
    handleClose();
  };
  const handleOk = () => {
    handleClose();
    cb();
    // navigate("/orderHx");
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {questionTag}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {questionDetail}
        </Typography>
        <DialogActions>
          <Button autoFocus onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Box>
    </Modal>
  );
}
