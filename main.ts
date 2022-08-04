radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        music.playTone(988, music.beat(BeatFraction.Half))
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playTone(988, music.beat(BeatFraction.Quarter))
    } else {
        music.playTone(196, music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    music.playTone(988, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    music.playTone(988, music.beat(BeatFraction.Quarter))
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        `)
})
radio.setGroup(1)
basic.forever(function () {
	
})
