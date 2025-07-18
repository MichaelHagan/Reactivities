import Box from "@mui/material/Box";
import ActivityCard from "./ActivityCard";
import { useActivities } from "../../../lib/hooks/useActivities";
import { Typography } from "@mui/material";

export default function ActivityList(
) {

    const {activities, isPending} = useActivities();
  
  if (isPending) return <Typography>Loading activities...</Typography>;
  if (!activities) return <Typography>No activities found.</Typography>;
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
        />
      ))}
    </Box>
  );
}
