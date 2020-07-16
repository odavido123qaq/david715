let 次數 = 0
let 次數100 = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    次數 = 0
    次數100 = 0
    basic.showNumber(次數)
})
