import s from "./ErrorView.module.css";
import ErrorIcon from "@mui/icons-material/Error";

import Typography from "@mui/material/Typography";
export default function NotFoundView() {
  return (
    <main role="alert" className={s.main}>
      <ErrorIcon color="primary" className={s.img} />
      <Typography color="primary" variant="h3">
        Page not found
      </Typography>
    </main>
  );
}
