import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import { FavoriteOutlined, Share } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(2),
  },
  media: { height: "40vh" },
}));

function Post() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.datocms-assets.com/17507/1606815832-mvp-construire-mesurer-apprendre1.jpg?fit=max&fm=webp&q=60&w=736"
            title="My post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {" "}
              Why MVP is important ?
            </Typography>
            <Typography variant="body2">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
              distinctio odio eligendi, eius, in enim ipsum amet nihil nemo
              minima molestias aliquid sint deleniti necessitatibus laudantium
              doloremque assumenda maiores illo Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Reiciendis autem enim, ab
              accusantium tempore architecto dolore sunt animi saepe dignissimos
              exercitationem. Veniam, ipsum aperiam a pariatur rem delectus
              corporis iusto.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <FavoriteOutlined />
            </Button>
            <Button size="small" color="primary">
              <Share />
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Container>
  );
}

export default Post;
