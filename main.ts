let boolean_condition = false
basic.forever(function () {
    boolean_condition = Math.randomBoolean()
    if (boolean_condition == true) {
        basic.showString("GREEN LIGHT")
    } else {
        basic.showString("RED LIGHT")
    }
})
