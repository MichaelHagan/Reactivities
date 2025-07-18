import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";

export default function ActivityDashboard() {
  
  return (
    <Grid container spacing={3}>
      <Grid size={6}>
        <ActivityList />
      </Grid>
      <Grid size={5}>
      Activity filters and other components can go here.
      </Grid>
    </Grid>
  );
}
