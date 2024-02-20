"use client";

import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const navItem = [
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
      route: "News",
      pathname: "/news",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
  ];

const Footer = () => {
  return (
    <Box className="bg-black px-2 py-20">
      <Container className="space-y-5">
        <Box
        className="w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <InstagramIcon></InstagramIcon>
          </IconButton>
          <IconButton>
            <TwitterIcon></TwitterIcon>
          </IconButton>
          <IconButton>
            <WhatsAppIcon></WhatsAppIcon>
          </IconButton>
        </Box>
        <Box className="w-full text-center">
            {navItem.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Typography variant="body2" textAlign="center" color="gray">
            @2023 The Dragon News. Design by Designer Team and Build Developer Team
          </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
