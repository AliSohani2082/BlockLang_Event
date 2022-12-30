import React from "react";
import { Paper, Box, Typography } from "@mui/material";

interface EventBlockProps {
  isActive: Boolean;
  title: String;
  children?: React.ReactNode;
}

const EventBlock = (props: EventBlockProps) => {
  const { isActive, title, children, ...other } = props;
  return (
    <Paper sx={{ width: "300px" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifycontent: "space-between",
          padding: 3,
        }}
      >
        <Typography>{title}</Typography>
      </Box>
      <Box sx={{ width: "100%", height: "100%" }}>
        
      </Box>
    </Paper>
  );
};

export default EventBlock;
