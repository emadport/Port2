import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import styles from "./styles.module.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiTextField: {
      defaultProps: {
        color: "success",
      },
    },
  },
});

export default function MaterialUIPickers({ handleChange, label, value }) {
  return (
    <div className={styles.container}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label={label}
              inputFormat="MM/DD/YYYY"
              value={value}
              views={["year", "month", "day"]}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
}
