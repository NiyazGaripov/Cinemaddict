const TEXT_COMMENTS = [
  `Interesting setting and a good cast`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`
];

const EMOJIS = [
  `smile`,
  `sleeping`,
  `puke`,
  `angry`,
];

const generateComment = () => {
  return {
    text: `Interesting setting and a good cast`,
    emoji: `./images/emoji/smile.png`,
    author: `Tim Macoveev`,
    date: `2019/12/31 23:59`,
  };
};

export const generateComments = (amount) => {
  return new Array(amount)
    .fill(``)
    .map(generateComment);
};
