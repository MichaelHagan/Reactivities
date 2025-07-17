import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

type Props = {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
};

export default function ActivityDetail({ activity, cancelSelectActivity, openForm }: Props) {
  return (
    <Card>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
        alt={activity.title}
      />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1">{activity.date}</Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}
      >
        <Chip label={activity.category} variant="outlined" />
        <Button color="primary" onClick={() => openForm(activity.id)}>Edit</Button>
        <Button color="inherit" onClick={cancelSelectActivity}>Cancel</Button>
      </CardActions>
    </Card>
  );
}
