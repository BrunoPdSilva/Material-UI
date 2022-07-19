import React from "react";
import { Typography, Button, Container } from "@material-ui/core";
import { AcUnitOutlined, Send, KeyboardArrowRight } from "@material-ui/icons";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        onClick={() => console.log("You clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
        //startIcon={<Send />}
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>

      {/* Icons */}<br />
      {/* <AcUnitOutlined />
      <AcUnitOutlined color="primary" fontSize="large" />
      <AcUnitOutlined color="secondary" fontSize="small" />
      <AcUnitOutlined color="action" fontSize="small" />
      <AcUnitOutlined color="error" fontSize="small" />
      <AcUnitOutlined color="disabled" fontSize="small" /> */}

    </Container>
  );
}
