import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useState, useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";


const Arrow = ({ children, disabled, onClick }) => {
  return (
      <button
          className="arrow-button"
          disabled={disabled}
          onClick={onClick}
          style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              right: "1%",
              opacity: disabled ? "0" : "1",
              userSelect: "none",

              // Styling
              backgroundColor: "white",
              border: "none",
          }}>
          {children}
      </button>
  );
};

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
      <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
          <ArrowBackIosIcon />
      </Arrow>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
      <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
          <ArrowForwardIosIcon />
      </Arrow>
  );
};

const articles = [
  {
    date: "January 28, 2022",
    link: "https://cis.cornell.edu/xenophobia-meter-aims-track-anti-immigrant-hate-speech",
    previewText: "Xenophobia Meter Aims To Track Anti-Immigrant Hate Speech",
    img: "LeshedGilly.jpeg",
    hashtags: "gilly leshed",
    taglink: "https://cis.cornell.edu/keyword/gilly-leshed"
  },
  {
    date: "January 27, 2022",
    link: "https://cis.cornell.edu/claire-cardie-elected-aaas-fellow",
    previewText: "Claire Cardie elected AAAS Fellow",
    img: "Claire.jpeg",
    hashtags: "claire cardie",
    taglink: "https://cis.cornell.edu/keyword/claire-cardie"
  },
  {
    date: "January 25, 2022",
    link: "https://cis.cornell.edu/cornell-tech-professor-tells-congress-crypto-can-go-greener",
    previewText: "Cornell Tech professor tells Congress crypto can go greener",
    img: "0125_juels_0.jpeg",
    hashtags: "ari juels",
    taglink: "https://cis.cornell.edu/keyword/ari-juels"
  },
  {
    date: "January 25, 2022",
    link: "https://cis.cornell.edu/david-williamson-receives-2022-steele-prize-american-mathematical-society",
    previewText: "David Williamson Receives 2022 Steele Prize from the AMS",
    img: "Williamson.jpeg",
    hashtags: "david williamson",
    taglink: "https://cis.cornell.edu/keyword/david-williamson"
  },
  {
    date: "January 20, 2022",
    link: "https://cis.cornell.edu/artificial-echoes-and-insect-synthesizers",
    previewText: "Artificial echoes and insect synthesizers",
    img: "owen-marshall_0.jpeg",
    hashtags: "owen marshall",
    taglink: "https://cis.cornell.edu/keyword/owen-marshall"
  },
  {
    date: "January 19, 2022",
    link: "https://cis.cornell.edu/rafael-pass-wins-nsa-best-cybersecurity-research-paper-competition",
    previewText: "Rafael Pass Wins NSA Best Cybersecurity Research Paper",
    img: "220118-D-IM742-1234-1440x810.jpeg",
    hashtags: "rafael pass",
    taglink: "https://cis.cornell.edu/keyword/rafael-pass"
  },
  {
    date: "January 14, 2022",
    link: "https://cis.cornell.edu/cornell-research-algorithms-based-human-perception",
    previewText: "Cornell Research: Algorithms Based on Human Perception",
    img: "0110_robot2_0_0.jpeg",
    hashtags: "kavita bala",
    taglink: "https://cis.cornell.edu/keyword/kavita-bala"
  },
  {
    date: "January 11, 2022",
    link: "https://cis.cornell.edu/robot-assisted-feeding-focus-15m-nsf-grant",
    previewText: "Robot-assisted feeding the focus of $1.5M NSF grant",
    img: "Eye.jpeg",
    hashtags: "tapomayukh bhattacharjee",
    taglink: "https://cis.cornell.edu/keyword/tapomayukh-bhattacharjee"
  },
  {
    date: "January 4, 2022",
    link: "https://cis.cornell.edu/arxiv-hits-2m-submissions",
    previewText: "arXiv hits 2M submissions",
    img: "arXiv-growth.jpeg",
    hashtags: "arxiv",
    taglink: "https://cis.cornell.edu/keyword/arxiv"
  },
  {
    date: "December 21, 2021",
    img: "statmethod.jpeg",
    previewText: "Alternative statistical method could improve clinical trials",
    link: "https://cis.cornell.edu/alternative-statistical-method",
    hashtags: "martin wells",
    taglink: "https://cis.cornell.edu/keyword/martin-wells"
  },
]

function NewCard({date, img, previewText, link, hashtags, taglink}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`/static/articles/${img}`}
          alt="Error Loading image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {previewText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"
          onClick={() => window.open(link, "_blank")}>
          Learn More
        </Button>
        <Button size="small"
          onClick={() => window.open(taglink, "_blank")}>
          #{hashtags}
        </Button>
      </CardActions>
    </Card>
  );
}
// src/components/Home/New Featured Articles/images/0110_robot2_0_0.jpeg
const getItems = () => articles;

// const FeaturedArticles = () => {
//   return <div>Hello</div>;
// };

// export default FeaturedArticles;

export default function EventsScroll() {
  const [items] = useState(getItems);
  return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {items.map((article) => {
              // const id = article.date;
              return (
                  <NewCard
                      date = {article.date}
                      img = {article.img}
                      previewText = {article.previewText}
                      link = {article.link}
                      hashtags = {article.hashtags}
                      taglink = {article.taglink}

                  />
              );
          })}
      </ScrollMenu>
  );
}
