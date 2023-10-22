input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("F G D B A E D D ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # .
        . . # # .
        . . # # .
        . # # # #
        . # # # #
        `)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
