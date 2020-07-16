let B = 0
let A = 0
input.onButtonPressed(Button.A, function () {
    B = randint(10, 99)
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(A + B)
})
input.onButtonPressed(Button.B, function () {
    B = randint(10, 99)
    basic.showNumber(B)
})
