import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";

function TimeComponent({ time }) {
  return (
    <div className="flex">
      <AccessAlarmsIcon
        style={{ color: "white" }}
        className="z-10 bg-[#01796F] rounded-full"
        fontSize="large"
      />
      <span className="self-center p-1 z-10 font-bold bg-[#01796F] rounded-r-lg">
        {time}
      </span>
    </div>
  );
}

export default TimeComponent;
