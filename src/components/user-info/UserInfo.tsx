import {
  Avatar,
  Badge,
  Card,
  CardContent,
  Fade,
  Grid,
  Typography,
} from "@mui/material";

export interface UserInfoProps {
  currentUser: CurrentUser;
}

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
  userSkills: UserSkill[] | undefined;
}

function UserInfo({ currentUser }: UserInfoProps) {
  const { name, avatarUrl, userSkills } = currentUser;
  return (
    <Fade in={true} timeout={500}>
      <Card>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt={name} src={avatarUrl} />
            </Grid>
            <Grid item>
              <Typography variant="h5">{name}</Typography>
            </Grid>
          </Grid>
          <div>
            {userSkills?.map((skill, index) => (
              <Fade
                in={true}
                timeout={500 + 100 * index}
                key={skill.skill?.name}
              >
                <Badge
                  badgeContent={skill.experience}
                  color="secondary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  style={{ marginRight: "10px" }} // Adjust badge style here
                >
                  <Typography
                    variant="body1"
                    style={{
                      background: "#e0e0e0", // Adjust background color here
                      padding: "5px",
                      borderRadius: "5px",
                      display: "inline-block",
                    }}
                  >
                    {skill.skill?.name}
                  </Typography>
                </Badge>
              </Fade>
            ))}
          </div>
        </CardContent>
      </Card>
    </Fade>
  );
}

export default UserInfo;
