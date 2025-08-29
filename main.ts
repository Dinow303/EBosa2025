function numChanger () {
    if (input.buttonIsPressed(Button.A)) {
        num += 1
    } else if (input.buttonIsPressed(Button.B)) {
        num += 0 - 2
        basic.showNumber(num)
    }
}
function NumMath () {
    if (input.buttonIsPressed(Button.A)) {
        NumberA += 1
        basic.showNumber(NumberA)
    } else if (input.buttonIsPressed(Button.B)) {
        NumberB += 1
        basic.showNumber(NumberB)
    } else if (input.logoIsPressed()) {
        basic.showNumber(NumberA + NumberB)
    } else if (input.isGesture(Gesture.Shake)) {
        NumberA = 0
        basic.showNumber(NumberA)
        NumberB = 0
        basic.showNumber(NumberB)
    }
}
function NumChecker () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showString(" shake")
    } else if (num < 15) {
        basic.showIcon(IconNames.Heart)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (num > 15) {
        basic.showIcon(IconNames.No)
    }
}
let num = 0
let NumberB = 0
let NumberA = 0
NumberA = 0
NumberB = 0
num = 0
basic.forever(function () {
    NumMath()
})
