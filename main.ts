input.onButtonPressed(Button.A, function () {
    start = 1
})
input.onButtonPressed(Button.B, function () {
    start = 0
})
let start = 0
basic.showLeds(`
    . . # . .
    . # # # .
    . # # # .
    # # # # #
    . # . # .
    `)
let delka_komety = 1
let delka_pasku = 5
let pasek1 = neopixel.create(DigitalPin.P0, 4 * delka_pasku + 15, NeoPixelMode.RGB)
let rada1 = pasek1.range(10, delka_pasku * 2)
let kometa1 = rada1.range(0, delka_komety)
kometa1.showColor(neopixel.colors(NeoPixelColors.Indigo))
let rada2 = pasek1.range(25, 10)
let kometa2 = rada2.range(9, delka_komety)
kometa2.showColor(neopixel.colors(NeoPixelColors.Indigo))
start = 0
basic.forever(function () {
    if (start == 1) {
        rada1.rotate(1)
        rada2.rotate(-1)
        rada1.show()
        rada2.show()
        basic.pause(150)
    }
})
