/* eslint-disable */
import "./style.css";

window.onload = function() {
  const suit = randomSuit(suits);
  const colorClass = whatColor(suit);

  document.querySelector(".topIcon").classList.add(colorClass);
  document.querySelector(".topIcon").innerHTML = suit;
  document.querySelector(".number").innerHTML = randomNumber(numbers);
  document.querySelector(".bottomIcon").classList.add(colorClass);
  document.querySelector(".bottomIcon").innerHTML = suit;
};
//write your code here
const suits = ["♥", "♦", "♠", "♣"];
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const randomSuit = arrSuit =>
  arrSuit[Math.floor(Math.random() * arrSuit.length)];
const randomNumber = arrNum =>
  arrNum[Math.floor(Math.random() * arrNum.length)];

const whatColor = suit =>
  suit == "♥" || suit == "♦" ? "colorRed" : "colorBlack";
