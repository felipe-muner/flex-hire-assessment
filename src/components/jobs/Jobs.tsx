import {
  Avatar,
  Card,
  CardContent,
  Fade,
  Grid,
  Typography,
} from "@mui/material";
import { UserSkills } from "../user-skills";
import { VideoAnswers } from "../video-answers";

export interface Skill {
  readonly name: string | null | undefined;
}

export interface UserSkill {
  readonly skill: Skill | null | undefined;
  readonly experience: number | null | undefined;
}

export interface CurrentUser {
  name: string;
  avatarUrl: string;
  videoAnswers: string[] | undefined;
  userSkills: UserSkill[] | undefined;
}

export interface UserInfoProps {
  currentUser: CurrentUser;
}

function Jobs(props: UserInfoProps) {
  const { name, avatarUrl, userSkills, videoAnswers } = props.currentUser;
  return (
    <Fade in={true} timeout={500}>
      <Card>
        <CardContent>
          <Grid container spacing={2} alignItems="center" marginBottom={4}>
            <Grid item>
              <Avatar alt={name} src={avatarUrl} />
            </Grid>
            <Grid item>
              <Typography variant="h5">{name}</Typography>
            </Grid>
          </Grid>          
          <UserSkills userSkills={userSkills} />
          <VideoAnswers videoAnswers={videoAnswers} />
        </CardContent>
      </Card>
    </Fade>
  );
}

export default Jobs;
