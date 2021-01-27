input.onButtonPressed(Button.A, function () {
    radio.sendString("Hi")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("ok")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("help")
})
