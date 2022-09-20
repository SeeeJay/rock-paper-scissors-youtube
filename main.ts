input.onGesture(Gesture.Shake, function () {
    pickshape()
})
function pickshape () {
    hand = randint(1, 3)
    if (hand == rockIndex) {
        rock.showImage(0)
    }
    if (hand == paperIndex) {
        paper.showImage(0)
    }
    if (hand == scissorIndex) {
        scissor.showImage(0)
    }
}
let hand = 0
let scissor: Image = null
let paper: Image = null
let rock: Image = null
let scissorIndex = 0
let paperIndex = 0
let rockIndex = 0
rockIndex = 1
paperIndex = 2
scissorIndex = 3
rock = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
paper = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
scissor = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
basic.forever(function () {
	
})
