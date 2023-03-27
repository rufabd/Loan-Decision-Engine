import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#1484cd",
          color: "white",
          marginTop: "20px",
          fontWeight: "bold",
        }}
        onClick={handleClickOpen}
      >
        Read before starting
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"How we decide to approve your loan?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            1. We check your profile from external registries according to your
            personal code <br />
            <span style={{ marginLeft: "20px" }}>
              1.1 If you already have <strong>debt</strong>, your request will
              be directly <strong>rejected</strong>
            </span>
            <br />
            <br />
            2. In case of having <strong>no</strong> debt, your credit score
            will be evaluated. <br /> <br />
            3. If your credit score is <strong>more</strong> than 1, then the
            maximum amount for the entered period will be offered (
            <strong>bigger than entered amount</strong>, maximum offer can be
            <strong> €10000</strong> regardles your credit score). <br /> <br />
            4. If you have credit score <strong>lower</strong> than 1, then the
            maximum amount for the given period will be offered (
            <strong>less than entered amount</strong>, minimum offer can be
            <strong> €2000</strong>) <br /> <br />
            5. If not suitable amount found for the given period (less than
            €2000), then we will try to offer{" "}
            <strong>
              €2000 with as closest as possible period to the requested period
            </strong>{" "}
            <br /> <br />
            6. If not any offer is possible (by decreasing amount and increasing
            period), your request will be <strong>rejected.</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>I understand</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
