import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PortableText } from "@portabletext/react";

export default function Details({ handleClose, open, scroll, course }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <Button
          className="top-0 right-0 flex self-end text-2xl"
          onClick={handleClose}
        >
          X
        </Button>
        <DialogTitle id="scroll-dialog-title">{course.title}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          {/* <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
           
          </DialogContentText> */}
          <PortableText value={course.body} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Consultar</Button>
          <Button onClick={handleClose}>Inscribirse</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
