import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Fade,
  Grid,
  Typography,
} from "@mui/material";

export interface JobsProps {
  jobs: {
    title: string;
    firmName: string;
    status: string;
    user: {
      avatarUrl: string;
      name: string;
      email: string;
    };
  }[];
}

type JobStatusColorsType = {
  [key: string]: string;
};

const JOB_STATUS_COLORS: JobStatusColorsType = {
  closed: "#f44336",
  deleted: "#9e9e9e",
  draft: "#ffc107",
  opened: "#4caf50",
  template: "#2196f3",
};

function Jobs(props: JobsProps) {
  const getBadgeColor = (status: string) => {
    return JOB_STATUS_COLORS[status.toLowerCase()] || "#000"; // default color if status not found
  };
  return (
    <Grid container spacing={4}>
      {props.jobs.map((job, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Fade in={true} timeout={500} style={{ marginBottom: "40px" }}>
            <Card style={{ minHeight: "340px",  background: "#eee" }} variant="outlined">
              <CardContent style={{ padding: "40px" }}>
                <Grid container alignItems="center" marginBottom={4}>
                  <Grid item xs={12}>
                    <Typography variant="h5">{job?.title}</Typography>
                    <Typography variant="h6" color={"#999"}>
                      {job?.firmName}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{ marginTop: "20px" }}>
                    <Chip
                      label={job?.status}
                      style={{
                        backgroundColor: getBadgeColor(job?.status),
                        color: "#fff",
                      }}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: "20px" }}
                    container
                    alignItems="center"
                  >
                    <Avatar src={job?.user?.avatarUrl} alt={job?.user?.name} />
                    <div style={{ marginLeft: "10px" }}>
                      <Typography variant="body1">{job?.user?.name}</Typography>
                      <Typography color={"#999"} variant="body2">
                        {job?.user?.email}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Fade>
        </Grid>
      ))}
    </Grid>
  );
}

export default Jobs;
