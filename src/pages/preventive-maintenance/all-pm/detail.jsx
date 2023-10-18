import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("1");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{
          backgroundColor: "#009688",
          color: "#fff",
          padding: "1px",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          marginTop: "1px",
          "&:hover": {
            backgroundColor: "#007a66",
          },
        }}
        onClick={handleClickOpen}
      >
        Detail
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Detail
            </Typography>
          </Toolbar>
        </AppBar>
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab
              sx={{
                fontWeight: "bold",
                "&.Mui-selected": { color: "inherit" },
              }}
              label="Contoh 1"
              value="1"
            />
            <Tab
              sx={{
                fontWeight: "bold",
                "&.Mui-selected": { color: "inherit" },
              }}
              label="Contoh 3"
              value="2"
            />
            <Tab
              sx={{
                fontWeight: "bold",
                "&.Mui-selected": { color: "inherit" },
              }}
              label="Contoh 3"
              value="3"
            />
            <Tab
              sx={{
                fontWeight: "bold",
                "&.Mui-selected": { color: "inherit" },
              }}
              label="Contoh 4"
              value="4"
            />
          </TabList>
          <TabPanel value="1">
            <Box>
              <Typography>Test 1</Typography>
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box>
              <Typography>Test 2</Typography>
            </Box>
          </TabPanel>
          <TabPanel value="3">
            <Box>
              <Typography>Test 3</Typography>
            </Box>
          </TabPanel>
          <TabPanel value="4">
            <Box>
              <Typography>Test 4</Typography>
            </Box>
          </TabPanel>
        </TabContext>
      </Dialog>
    </div>
  );
}
