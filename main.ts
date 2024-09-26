input.onButtonPressed(Button.A, function () {
    brightness += 10
    strip.setBrightness(brightness)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
input.onButtonPressed(Button.AB, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.showString("R")
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    brightness += -10
    strip.setBrightness(brightness)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
let brightness = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
brightness = 255
strip.show()
