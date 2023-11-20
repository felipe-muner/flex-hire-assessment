import { CardMedia, Typography } from "@mui/material";

interface VideoAnswersProps {
  videoAnswers: Array<string> | undefined;
}

function VideoAnswers(props: VideoAnswersProps) {
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography gutterBottom variant="h3">
        Video Answers
      </Typography>
      <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
        {props.videoAnswers?.map((videoAnswer, index) => {
          return (
            <CardMedia
              component="video"
              controls
              style={{ borderRadius: "10px" }}
              src={videoAnswer}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
export default VideoAnswers;
