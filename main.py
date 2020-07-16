次數 = 0
次數100 = 0

def on_button_pressed_a():
    basic.show_number(0)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global 次數, 次數100
    次數 = 0
    次數100 = 0
    basic.show_number(次數)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
