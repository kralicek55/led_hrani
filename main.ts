input.onButtonPressed(Button.A, function () {
    start = 1
})
function test (num: number) {
    range = strip.range(num, 1)
    range.setBrightness(255 / (8 - num))
    range.showColor(neopixel.hsl(275, 100, 10 + num * 6))
    range.show()
}
input.onButtonPressed(Button.B, function () {
    start = 0
})
let range: neopixel.Strip = null
let start = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 32, NeoPixelMode.RGB)
for (let index = 0; index <= 7; index++) {
    test(index)
}
start = 0
basic.forever(function () {
    if (start == 1) {
        strip.rotate(1)
        strip.show()
        basic.pause(20)
    }
})
