import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Collapse,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import img1 from "../assets/images/Mask group.png";
import img2 from "../assets/images/Mask group (1).png";
import adobe from "../assets/images/adobe 1.png";
import figma from "../assets/images/figma 1.png";
import crome from "../assets/images/chrome 1.png";
import folder from "../assets/images/Vector.png";
import js from "../assets/images/javascript 1.png";
import styled from "@emotion/styled";

const StyledList = styled(List)({
  maxHeight: "450px",
  overflowY: "auto",
  width: "100%",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none",
  "scrollbar-width": "none",
});

function ChatMedia() {
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  return (
    <div>
      <StyledList>
        <List>
          <ListItemButton onClick={handleClick}>
            <ListItemText
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                ".MuiTypography-body1": {
                  fontSize: "14px",
                  fontFamily: "Plus Jakarta Sans",
                  color: "#2A3547",
                  fontWeight:"700"
                },
                "& .MuiTypography-body2": {
                  fontSize: "14px",
                  fontFamily: "Plus Jakarta Sans",
                  color: "#7C8FAC",
                  fontWeight:"600"
                },
              }}
              primary="Media"
              secondary="(2)"
            />
            {open ? (
              <ExpandLess sx={{ color: "#7C8FAC" }} />
            ) : (
              <ExpandMore sx={{ color: "#7C8FAC" }} />
            )}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ImageList
                sx={{
                  marginLeft: "10px",
                }}
                cols={2}
                rowHeight={100}
              >
                <ImageListItem>
                  <img className="mediaImg" src={img1} />
                </ImageListItem>
                <ImageListItem>
                  <img className="mediaImg" src={img2} />
                </ImageListItem>
              </ImageList>
            </List>
          </Collapse>
        </List>
        <List>
          <ListItemButton onClick={handleClick1}>
            <ListItemText
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                ".MuiTypography-body1": {
                  fontSize: "14px",
                  fontFamily: "Plus Jakarta Sans",
                  color: "#2A3547",
                  fontWeight:"700"
                },
                "& .MuiTypography-body2": {
                  fontSize: "14px",
                  fontFamily: "Plus Jakarta Sans",
                  color: "#7C8FAC",
                  fontWeight:"600"
            
                },
              }}
              primary="Files"
              secondary="(5)"
            />
            {open1 ? (
              <ExpandLess sx={{ color: "#7C8FAC" }} />
            ) : (
              <ExpandMore sx={{ color: "#7C8FAC" }} />
            )}
          </ListItemButton>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem className="listItem" button>
                <ListItemIcon>
                  <img className="filesImg" src={adobe} alt="Adobe" />
                </ListItemIcon>
                <ListItemText
                  primary="service-task.pdf"
                  secondary="2MB 2Dec2022"
                  sx={{
                    ".MuiTypography-body1": {
                      fontSize: "14px",
                      fontFamily: "Plus Jakarta Sans",
                      color: "#2A3547",
                      fontWeight:"700"
                    },
                    "& .MuiTypography-body2": {
                      fontSize: "14px",
                      fontFamily: "Plus Jakarta Sans",
                      color: "#7C8FAC",
                      fontWeight:"500"
                    },
                  }}
                ></ListItemText>
              </ListItem>
              <ListItem className="listItem" button>
                <ListItemIcon>
                  <img className="filesImg" src={figma} alt="figma" />
                </ListItemIcon>
                <ListItemText
                  primary="homepage-design.fig"
                  secondary="2MB 2Dec2022"
                  sx={{
                    ".MuiTypography-body1": {
                      fontSize: "14px",
                      fontFamily: "Plus Jakarta Sans",
                      color: "#2A3547",
                      fontWeight:"700"
                    },
                    "& .MuiTypography-body2": {
                      fontSize: "14px",
                      fontFamily: "Plus Jakarta Sans",
                      color: "#7C8FAC",
                      fontWeight:"500"
                    },
                  }}
                ></ListItemText>
              </ListItem>
              <ListItem className="listItem" button>
                <ListItemIcon>
                  <img className="filesImg" src={crome} alt="crome" />
                </ListItemIcon>
                <ListItemText
                  primary="about-us.html"
                  secondary="2MB 2Dec2022"
                  sx={{
                    ".MuiTypography-body1": {
                      fontSize: "14px",
                      fontFamily: "Plus Jakarta Sans",
                      color: "#2A3547",
                      fontWeight:"700"
                    },
                    "& .MuiTypography-body2": {
                      fontSize: "14px",
                      fontFamily: "Plus Jakarta Sans",
                      color: "#7C8FAC",
                      fontWeight:"500"
                    },
                  }}
                ></ListItemText>
              </ListItem>
              <ListItem className="listItem" button>
                <ListItemIcon>
                  <img className="filesImg" src={folder} alt="folder" />
                </ListItemIcon>
                <ListItemText
                  primary="work-project.zip"
                  secondary="2MB 2Dec2022"
                  sx={{
                    ".MuiTypography-body1": {
                      fontSize: "14px",
                      fontFamily: "Plus Jakarta Sans",
                      color: "#2A3547",
                      fontWeight:"700"
                    },
                    "& .MuiTypography-body2": {
                      fontSize: "14px",
                      fontFamily: "Plus Jakarta Sans",
                      color: "#7C8FAC",
                      fontWeight:"500"
                    },
                  }}
                ></ListItemText>
              </ListItem>
              <ListItem className="listItem" button>
                <ListItemIcon>
                  <img className="filesImg" src={js} alt="js" />
                </ListItemIcon>
                <ListItemText
                  primary="custom.js"
                  secondary="2MB 2Dec2022"
                  sx={{
                    ".MuiTypography-body1": {
                      fontSize: "14px",
                      fontFamily: "Plus Jakarta Sans",
                      color: "#2A3547",
                      fontWeight:"700"
                    },
                    "& .MuiTypography-body2": {
                      fontSize: "14px",
                      fontFamily: "Plus Jakarta Sans",
                      color: "#7C8FAC",
                      fontWeight:"500"
                    },
                  }}
                ></ListItemText>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </StyledList>
    </div>
  );
}
export default ChatMedia;
