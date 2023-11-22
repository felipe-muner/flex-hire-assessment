import { CardMedia, Tooltip, Typography } from "@mui/material";
import { Answer } from "../user-info/UserInfo";
import { truncateString } from "../../utils";

interface VideoAnswersProps {
  answers: Answer[] | undefined;
}

function VideoAnswers(props: VideoAnswersProps) {
  return (
    <div style={{ marginTop: "80px", marginBottom: "40px" }}>
      <Typography gutterBottom variant="h4">
        Video Answers
      </Typography>
      <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
        {props.answers?.map(({ url, questionTitle }, index) => {
          return (
            <div key={index}>
              <CardMedia
                component="video"
                src={url}
                controls
                style={{ width: "500px", borderRadius: "10px" }}
              />
              <Tooltip title={questionTitle} placement="bottom">
                <Typography gutterBottom variant="h6">
                  {truncateString({ str: questionTitle, num: 45 })}
                </Typography>
              </Tooltip>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default VideoAnswers;
