import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
  closeForm: () => void;
  selectedActivity: Activity | undefined;
  editMode?: boolean;
};

export default function ActivityDashboard({
  activities,
  selectActivity,
  cancelSelectActivity,
  selectedActivity,
  editMode,
  openForm,
  closeForm,
}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={6}>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
        />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            selectedActivity={selectedActivity}
            openForm={openForm}
            cancelSelectActivity={cancelSelectActivity}
          />
        )}
        {editMode && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
          />
        )}
      </Grid>
    </Grid>
  );
}
