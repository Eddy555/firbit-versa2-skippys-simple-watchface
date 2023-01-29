import document from "document";
import userActivity from "user-activity";
import {today} from "user-activity";
import {units} from "user-settings";

export let stepsElem = document.getElementById("stepsText");
export let calElem = document.getElementById("caloriesText");
export let floorsElem = document.getElementById("floorsText");
export let actElem = document.getElementById("activityText");
export let distElem = document.getElementById("distanceText");

// ----------- STEPS --------------


export function updateActivity() {
  
  let stepsValue = (today.adjusted["steps"] || 0);
  let stepsString = stepsValue;
  stepsElem.text = stepsString;

  let calValue = (today.adjusted["calories"] || 0);
  let calString = calValue;
  calElem.text = calString;

  let floorsValue = (today.adjusted["elevationGain"] || 0);
  let floorsString = floorsValue;
  floorsElem.text = floorsString;
  
  let actValue = (today.adjusted.activeZoneMinutes.total || 0);
  let actString = actValue;
  actElem.text = actString;

  let distValue = (today.adjusted["distance"] || 0);
  let distString = (distValue / 1609.344).toFixed(2); //distance in miles
  distElem.text = distString;
}