import {
  Avatar,
  Card,
  CardContent,
  Fade,
  Grid,
  Typography,
} from "@mui/material";
// import { UserSkills } from "../user-skills";
// import { VideoAnswers } from "../video-answers";


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

function Jobs(props: JobsProps) {
  return (
    <Fade in={true} timeout={500}>
      <Card>
        <CardContent>
          <Grid container spacing={2} alignItems="center" marginBottom={4}>
            <Grid item></Grid>
            <Grid item>
              <Typography variant="h5">{"@TODO: render each job"}</Typography>
            </Grid>
          </Grid>
          {/* <UserSkills userSkills={userSkills} />
          <VideoAnswers answers={answers} /> */}
        </CardContent>
      </Card>
    </Fade>
  );
}

export default Jobs;
