/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack McNulty
 * Created on: Oct 2025
 * This program tunrs a servo motor
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup 
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// turning to 0
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString("0")
    basic.showIcon(IconNames.SmallSquare)
    robotbit.Servo(servoNumber1, 0)
    basic.showIcon(IconNames.Happy)
})
 // turning to 180
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("180")
    basic.showIcon(IconNames.SmallSquare)
    robotbit.Servo(servoNumber1, 180)
    basic.showIcon(IconNames.Happy)
})
