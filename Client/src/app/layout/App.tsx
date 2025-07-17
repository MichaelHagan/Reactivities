import {
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashbooard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5001/api/activities")
      .then((response) => setActivities(response.data))
      .catch((error) => console.error("Error fetching activities:", error));
  }, []);

  const handleSelectActivity = (id: string) => {
    setEditMode(false);
    setSelectedActivity(activities.find(x => x.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelectActivity()
    setEditMode(true);
  }

  const handleFormClose = () => {
    setEditMode(false);
  };

  const handleSubmitForm = (data: Activity) => {
    if (data.id) {
      setActivities(activities.map(activity => activity.id === data.id ? data : activity));
    } else {
      data.id = (activities.length + 1).toString();
      setActivities([...activities, data]);
    }
    setEditMode(false);
    setSelectedActivity(undefined);
  };

  const handleDelete = (id: string) => {
    setActivities(activities.filter(activity => activity.id !== id));
    if (selectedActivity?.id === id) {
      setSelectedActivity(undefined);
      setEditMode(false);
    }
  };

  return (
    <Box  sx={{bgcolor: "#eeeeee"}}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard activities={activities} 
        selectActivity={handleSelectActivity}
        cancelSelectActivity={handleCancelSelectActivity}
        selectedActivity={selectedActivity}
        editMode={editMode}
        openForm={handleOpenForm}
        closeForm={handleFormClose}
        submitForm={handleSubmitForm}
        deleteActivity={handleDelete}
        />
      </Container>
    </Box>
  );
}

export default App;
