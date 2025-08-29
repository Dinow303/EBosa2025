def numChanger():
    global num
    if input.button_is_pressed(Button.A):
        num += 1
    elif input.button_is_pressed(Button.B):
        num += 0 - 2
        basic.show_number(num)
def NumMath():
    global NumberA
    if input.logo_is_pressed():
        basic.show_number(NumberA)
        NumberA += 1
    else:
        basic.show_number(NumberB)
        NumberA += 0 - 1
def NumChecker():
    if input.is_gesture(Gesture.SHAKE):
        basic.show_string(" shake")
    elif num < 15:
        basic.show_icon(IconNames.HEART)
        music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
    elif num > 15:
        basic.show_icon(IconNames.NO)
NumberB = 0
NumberA = 0
num = 0
num = 16
NumberA = 0
NumberB = 0

def on_forever():
    NumMath()
basic.forever(on_forever)
