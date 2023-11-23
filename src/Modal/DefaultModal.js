import { Fragment } from "react";

import { Container, Box, Modal, Typography } from "@mui/material";

const DefaultModal = ({ open, onClose, title, children }) => {
  return (
    <Fragment>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            width: "40vw",
            height: "auto",
            outline: "none",
            display: "flex",
            backgroundColor: "#2c2c2c",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              variant="h4"
              sx={{
                color: "#FFFFFF",
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              {title}
            </Typography>
            {children()}
          </Box>
        </Container>
      </Modal>
    </Fragment>
  );
};

export default DefaultModal;
