import { Badge, Fade, Typography } from "@mui/material";
import { UserSkill } from "../user-info/UserInfo";

interface UserSkillsProps {
  userSkills: UserSkill[] | undefined;
}

function UserSkills(props: UserSkillsProps) {
  return (
    <div style={{ marginTop: "60px" }}>
      <Typography style={{ marginBottom: "20px" }} variant="h4">
        Skills
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          rowGap: "12px",
          maxWidth: "400px",
        }}
      >
        {props.userSkills
          ?.sort((a, b) =>
            (a.experience || 0) >= (b.experience || 0) ? -1 : 1
          )
          ?.map((skill, index) => (
            <Fade in={true} timeout={500 + 100 * index} key={skill.skill?.name}>
              <Badge
                badgeContent={skill.experience}
                color="info"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
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
    </div>
  );
}
export default UserSkills;
