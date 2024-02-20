import LatestNews from "@/components/ui/LatestNews/LatestNews";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <div className="my-5">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews></LatestNews>
        </Grid>
        <Grid item xs={4}>
          <Sidebar></Sidebar>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
