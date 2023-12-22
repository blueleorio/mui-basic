// JobCard.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

const JobCard = ({ job }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Posted Date: {job.postedDate}
        </Typography>
        <Typography variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Location: {job.city}
        </Typography>
        <Typography variant="body2">
          {job.description}
          <br />
          {'"Skills: ' + job.skills.join(", ") + '"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
