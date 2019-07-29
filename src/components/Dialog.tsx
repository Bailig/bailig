import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import {withStyles} from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions";
import React from "react";
import styled from "styled-components";
import { IDialogContent } from "../interfaces";
import { h5, highContrastDark, highContrastLight } from "./style";

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IProps {
  open: boolean;
  handleClose: () => void;
  dialogContent: IDialogContent;
}

const StyledDialog = withStyles({
  paper: {
    backgroundColor: highContrastLight,
    borderRadius: "22px",
  },
})(Dialog);

const Title = styled.div`
  ${h5}
  color: ${highContrastDark};
  margin: 24px 0 0 24px;
`;

export default (props: IProps) => {
  return (
    <StyledDialog
      fullWidth
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => props.handleClose()}
      aria-labelledby="dialog-slide-title"
      aria-describedby="dialog-slide-description"
    >
      <Title id="dialog-slide-title">{props.dialogContent.name}</Title>
      <DialogContent>
        <DialogContentText id="dialog-slide-description">Coming soon!</DialogContentText>
      </DialogContent>
    </StyledDialog>
  );
};
