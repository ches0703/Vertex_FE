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
            width: "50vw",
            height: "auto",
            outline: "none",
            display: "flex",
            backgroundColor: "#2c2c2c",
          }}
        >
          <Box sx={{ width: "100%", padding: "20px 0px"}}>
            <Typography
              variant="h4"
              sx={{
                color: "#FFFFFF",
                marginBottom: 2,
              }}
            >
              {title}
            </Typography>
            {children(onClose, title)}
          </Box>
        </Container>
      </Modal>
    </Fragment>
  );
};

export default DefaultModal;
