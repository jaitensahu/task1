import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  typography: {
    fontFamily: ["outfit", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#00003EE8", // Your custom color
    },
    // You can add more custom colors here
    custom: {
      main: "#00003EE8",
    },
  },
});

export default Theme;
