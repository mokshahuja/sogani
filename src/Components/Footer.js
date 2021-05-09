import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Sogani Eye World Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="80%">
        <Typography variant="body1">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              Opp. Central Bank of India, Jay Ambay Nagar, Near Gopalpura
              Flyover,main Tonk Road, Jaipur
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flex: 0.2,
              }}
            >
              <a
                href="https://www.facebook.com/Sogani-Eye-World-105865778341303/"
                style={{ textDecoration: "none" }}
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/s.e.world/"
                style={{ textDecoration: "none" }}
              >
                <InstagramIcon />
              </a>
              <a
                href="mailto:prashant22jain@gmail.com"
                style={{ textDecoration: "none" }}
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
