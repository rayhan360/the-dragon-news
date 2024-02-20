import Image from "next/image";
import sideImage from "@/assets/side-top-news.png";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import SidebarNewsCard from "./SidebarNewsCard";
import sideBottomNews from "@/assets/side-bottom-img.png"

const Sidebar = () => {
  return (
    <Box>
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sideImage} width={800} alt="sideImage" />
          </CardMedia>
          <CardContent>
            <p className="bg-red-500 w-[100px] px-2 text-white mb-2 rounded-lg">
              Technology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom>
              By Md. Redoan Ahammad - Mar 23, 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Divider />

      <Stack my={3} columnGap={2}>
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
        <SidebarNewsCard />
      </Stack>

      <Box>
        <Image
          src={sideBottomNews}
          height={400}
          width={350}
          alt="rectangle world image"
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
