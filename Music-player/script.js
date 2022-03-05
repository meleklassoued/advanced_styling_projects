// designed by Mauricio Bucardo

// add variables :

const bgBody = [
  "#e5e7e9",
  "#ff4545",
  "#f8ded3",
  "#ffc382",
  "#f5eda6",
  "#ffcbdc",
  "#dcf3f3",
];

const body = document.body;
const player = document.querySelector(".player");
const playerHeader = player.querySelector(".player__header");
const playerControls = player.querySelector(".player__controls");
const playerPlayList = player.querySelectorAll(".player__song");
const playerSongs = player.querySelectorAll(".audio");
const playButton = player.querySelector(".play");
const nextButton = player.querySelector(".next");
const backButton = player.querySelector(".back");
const playlistButton = player.querySelector(".playlist");
const slider = player.querySelector(".slider");
const sliderContext = player.querySelector(".slider__context");
const sliderName = sliderContext.querySelector(".slider__name");
const sliderTitle = sliderContext.querySelector(".slider__title");
const sliderContent = slider.querySelector(".slider__content");
const sliderContentLength = playerPlayList.length - 1;
const sliderWidth = 100;
let left = 0;
let count = 0;
let song = playerSongs[count];
let isPlay = false;
const pauseIcon = playButton.querySelector("img[alt='pause-icon']");
const playIcon = playButton.querySelector("img[alt='play-icon']");
const progress = play.querySelector(".progres");
const progressField = progress.querySelector(".progres__filled");
let isMove = false;

/* -------------------------------------------------------------------------- */
/*                               setup Functions                              */
/* -------------------------------------------------------------------------- */


