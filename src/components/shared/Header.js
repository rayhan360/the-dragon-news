import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImg from "@/assets/TheDragonNews.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
    const currentDate = getCurrentDate()
  return (
    <Box className="w-full my-6">
      <Container className="space-y-2">
        <Image src={headingImg} alt="heading Image" className="mx-auto"/>
        <Typography variant="body2" textAlign="center" color="gray">
          Journalism Without fair and favor
        </Typography>
        <Typography variant="body2" textAlign="center" color="gray">
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
