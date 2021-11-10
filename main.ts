input.onButtonPressed(Button.A, function () {
    time += 1
    if (time > 9) {
        time = 0
    }
    basic.showNumber(time)
})
input.onGesture(Gesture.Shake, function () {
    time = 0
    basic.showNumber(time)
})
input.onButtonPressed(Button.B, function () {
    while (time > 0) {
        basic.pause(60000)
        time += -1
        basic.showNumber(time)
    }
    for (let index = 0; index < 10; index++) {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
})
let time = 0
time = 0
basic.showNumber(time)
