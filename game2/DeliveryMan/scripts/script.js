/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

var number = Scene.root.find('number');
var score = Patches.getScalarValue('score');
var gameOver = Patches.getPulseValue('gameOver');
var gamePlay = Patches.getPulseValue('gamePlay');


// display score
number.text = score.toString();

// set default
Patches.setBooleanValue('start', true);
Patches.setBooleanValue('reset', false);

// switch state
gameOver.subscribe(function() {
    Patches.setBooleanValue('start', false);
    Patches.setBooleanValue('reset', true);
});

gamePlay.subscribe(function() {
    Patches.setBooleanValue('start', true);
    Patches.setBooleanValue('reset', false);
});
// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
// Diagnostics.log('Console message logged from the script.');