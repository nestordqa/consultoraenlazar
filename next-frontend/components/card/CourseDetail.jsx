import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PortableText } from "@portabletext/react";
import { styled } from "@mui/system";
import closeIcon from "public/images/x-cerrar.svg";
import Image from "next/image";

const StyledDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    backgroundColor: "#34668b",
    fontFamily: "Noah Text",
  },
});

const StyledDialogContent = styled(DialogContent)({
  backgroundColor: "white",
  padding: "1rem",
});
const StyledDialogActions = styled(DialogActions)({
  backgroundColor: "white",
});

const StyledButton = styled(Button)({
  backgroundColor: "#ecbf48",
  color: "black",
  fontWeight: "bold",
  borderRadius: "1rem",
  padding: "0.25rem 2rem 0.25rem 2rem",
  "&:hover": {
    opacity: "0.8",
    backgroundColor: "#ecbf48",
  },
});

const StyledCloseButton = styled(Button)({
  display: "flex",
  backgroundColor: "white",
  color: "black",
  fontWeight: "bold",
  fontFamily: "Noah Text",
  borderRadius: "5rem",
  padding: "0",
  marginTop: "10px",
  marginRight: "10px",
  minWidth: "40px",
  alignSelf: "flex-end",
  "&:hover": {
    backgroundColor: "white",
  },
});
const StyledTitle = styled(DialogTitle)({
  backgroundColor: "#34668b",
  color: "white",
  fontSize: "2rem",
  fontFamily: "Noah Text",
  "&:hover": {
    backgroundColor: "#34668b",
  },
  "@media (max-width: 768px)": {
    fontSize: "1.5rem",
  },
});

const DetailsComponents = {
  block: {
    h2: ({ children }) => {
      return (
        <h2 className="py-4 px-2 text-2xl text-darkBlue border-y-[1px]">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      return (
        <h3 className="py-4 px-2 text-xl text-darkBlue border-y-[1px]">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      return (
        <h4 className="py-4 px-2 text-lg text-darkBlue border-y-[1px]">
          {children}
        </h4>
      );
    },
    h5: ({ children }) => {
      return (
        <h5 className="py-4 px-2 text-base text-darkBlue border-y-[1px]">
          {children}
        </h5>
      );
    },
    p: ({ children }) => {
      return <p className="px-2 pt-2 pb-4">{children}</p>;
    },
  },
};

export default function Details({
  handleOpenForm,
  handleClose,
  open,
  scroll,
  course,
}) {
  return (
    <div>
      <StyledDialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <StyledCloseButton variant="contained" onClick={handleClose}>
          <Image
            src={closeIcon}
            alt="Logo cerrar detalles"
            priority={true}
            width={40}
            height={40}
          />
        </StyledCloseButton>
        <StyledTitle id="scroll-dialog-title">{course.title}</StyledTitle>
        <StyledDialogContent dividers={scroll === "paper"}>
          <PortableText value={course.body} components={DetailsComponents} />
          {course.commissions !== null && course.commissions.length >= 1 ? (
            <>
              <h3 className="py-4 px-2 text-xl text-darkBlue border-y-[1px]">
                <strong>Próximas comisiones:</strong>
              </h3>
              {course.commissions.map((item) => (
                <ul key={item._id} className="py-4 px-6">
                  <li className="list-disc py-2">
                    <strong>{item.duration}</strong>
                  </li>
                  <li className="pl-4 py-1">
                    <strong>Duración: </strong>
                    {item.dates}
                  </li>
                  <li className="pl-4 py-1">
                    <strong>Modalidad de cursada: </strong>
                    {item.modality}
                  </li>
                </ul>
              ))}
            </>
          ) : null}
        </StyledDialogContent>
        <StyledDialogActions>
          <StyledButton variant="contained" onClick={handleOpenForm}>
            Consultar
          </StyledButton>
          <StyledButton variant="contained" onClick={handleClose}>
            Inscribirse
          </StyledButton>
        </StyledDialogActions>
      </StyledDialog>
    </div>
  );
}
