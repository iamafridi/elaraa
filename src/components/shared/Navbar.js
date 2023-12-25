"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { IconButton, Stack } from "@mui/material";

// icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import Link from "next/link";

const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Category",
    pathname: "/category",
  },
  {
    route: "Latest",
    pathname: "/latest",
  },
  {
    route: "About Us",
    pathname: "/about",
  },
  {
    route: "Contact ",
    pathname: "/contact",
  },
];

function Navbar() {
  return (
    <AppBar position="static" className="bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* logo */}
          <h3 className="font-bold italic">ELARA</h3>

          {/* middle container  */}
          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>

          {/* icons */}

          <Box>
            <Stack direction="row" sx={{
                "& svg":{
                    color:"white"
                },
            }}>
              <IconButton>
                <FacebookOutlinedIcon />
              </IconButton>
              <IconButton>
                <EmailTwoToneIcon />
              </IconButton>
              <IconButton>
                <LoginSharpIcon />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
