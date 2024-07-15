import SyncIcon from "@mui/icons-material/Sync";

function LoadingButton({ buttonColor }) {
  return (
    <>
      <SyncIcon style={{ color: buttonColor }} />
      <span className="text-lg text-white">Loading...</span>
    </>
  );
}

export default LoadingButton;
