import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function TopBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "1%",
        paddingBottom: "1%",
        width : "100%",
        height : "100%"
      }}
    >
      <div
        style={{
          width: "2%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingLeft: "1%",
        }}
      >
        <img src="src/assets/logo.png" alt="Logo" style={{ height: 40 }} />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PlayCircleIcon sx={{ color: "white", fontSize: 40 }} />
      </div>
      <div
        style={{
          width: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingRight: "1%",
        }}
      >
        <AccountCircleIcon sx={{ color: "white", fontSize: 40 }} />
      </div>
    </div>
  );
}
