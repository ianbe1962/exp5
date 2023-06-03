input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.acceleration(Dimension.X))
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.acceleration(Dimension.Z))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.acceleration(Dimension.Y))
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, Math.abs(input.acceleration(Dimension.Y)))
})
