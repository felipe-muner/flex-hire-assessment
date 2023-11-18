interface VideoAnswersProps {
  videoAnswers: Array<string> | undefined;
}

function VideoAnswers(props: VideoAnswersProps) {
  return (
    <div>
      <h1>Video Answers</h1>
      <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
        {props.videoAnswers?.map((videoAnswer, index) => {
          return (
            <div>
              <h3>Video {index + 1}</h3>
              <video src={videoAnswer} controls />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default VideoAnswers;
