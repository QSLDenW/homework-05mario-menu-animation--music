function animation () {
    basic.showLeds(`
        . . . . .
        . # # . .
        . # # . .
        . # # . .
        . # # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # # .
        . # # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # #
        # . . . .
        . # # # #
        . . . . #
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . . # . .
        . # # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . # # .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . # . .
        # . . # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # # . .
        . # # . .
        . # # . .
        . # # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # .
        . # # . .
        . # . . .
        . . . . .
        . # . . .
        `)
    basic.pause(1000)
}
function music2 () {
    basic.pause(1000)
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    music.playTone(988, music.beat(BeatFraction.Whole))
    music.playTone(989, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(233, music.beat(BeatFraction.Whole))
}
basic.forever(function () {
    animation()
    music2()
})
