import document from "document";
import * as util from "../common/utils";

const weekLableElem = document.getElementById("weekLabelText");
const weekNumElem = document.getElementById("weekNumText");
const dElem = document.getElementById("dateText");
const hmElem = document.getElementById("hoursMinutesText");
//const sElem = document.getElementById("secondsText");

let weekText = document.getElementById("weekText");
weekText.groupTransform.rotate.angle = -90;

export function updateDisplay(now) {
  //Date
  dElem.text = util.getWeekDay(now.getDay())+ " "+ now.getDate() + " " + util.getMonth(now.getMonth()) + " " + now.getFullYear();
  
  //Time
  let hours = now.getHours();
  hours = util.zeroPad(hours);
  let mins = util.monoDigits(now.getMinutes());
  //let secs = util.monoDigits(now.getSeconds());
  hmElem.text = hours + ':' + mins;
  //sElem.text = secs;  

 
}

export function updateWeekNum(now) {
  //Week number
  weekNumElem.text = util.getWeekNum(now);
}