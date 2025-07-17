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
  submitForm: (data: Activity) => void;
  deleteActivity?: (id: string) => void;
};

export default function ActivityDashboard({
  activities,
  selectActivity,
  cancelSelectActivity,
  selectedActivity,
  editMode,
  openForm,
  closeForm,
  submitForm,
  deleteActivity,
}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={6}>
        <ActivityList
          deleteActivity={deleteActivity}
          activities={activities}
          selectActivity={selectActivity}
        />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            activity={selectedActivity}
            openForm={openForm}
            cancelSelectActivity={cancelSelectActivity}
          />
        )}
        {editMode && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
            submitForm={submitForm}
          />
        )}
      </Grid>
    </Grid>
  );
}
