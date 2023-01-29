import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import { HeartRateSensor } from "heart-rate";
import { locale } from "user-settings";
import * as util from "../common/utils";
import userActivity from "user-activity";
import * as activity from "./activity.js"


// Update the clock every minute
clock.granularity = "seconds";

const weekLableElem = document.getElementById("weekLabelText");
const weekNumElem = document.getElementById("weekNumText");
const dElem = document.getElementById("dateText");
const hmElem = document.getElementById("hoursMinutesText");
const sElem = document.getElementById("secondsText");
const hrElem = document.getElementById("heartRateText");


let test = document.getElementById("test");
test.groupTransform.rotate.angle = -90;
//weekLableElem.text = "WEEK"
//weekLableElem.groupTransform.rotate.angle = 90


// ----------- TIME & DATE --------------
// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  dElem.text = util.getWeekDay(today.getDay(),locale)+ " "+ today.getDate() + " " + util.getMonth(today.getMonth(),locale) + " " + today.getFullYear();
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = util.monoDigits(hours % 12 || 12, false);
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.monoDigits(today.getMinutes());
  let secs = util.monoDigits(today.getSeconds());
  hmElem.text = hours + ':' + mins;
  sElem.text = secs;  
  if(hrs.heartRate == null){
    hrElem.text = "--";
  }else{
    hrElem.text = hrs.heartRate;
  }
  weekNumElem.text = util.getWeekNum(today);

  activity.updateActivity();

}

// ----------- HEART RATE --------------
const hrs = new HeartRateSensor();
hrs.start();


