let d = 0
let x = 0
let y = 0
let z = 1
let t = 1
let u = 2
let v = 2
let a = 3
let b = 1
let c = 4
d += 0
led.plot(x, y)
led.plot(z, t)
led.plot(u, v)
led.plot(a, b)
led.plot(c, d)
let dir = 1
let list = 1
let list2 = 1
let list3 = 1
let list4 = 1
basic.forever(function () {
    led.unplot(x, y)
    y += dir
    led.plot(x, y)
    if (y >= 4) {
        dir = -1
    } else if (y <= 0) {
        dir = 1
    }
    basic.pause(200)
})
basic.forever(function () {
    led.unplot(u, v)
    v += list2
    led.plot(u, v)
    if (v >= 4) {
        list2 = -1
    } else if (v <= 0) {
        list2 = 1
    }
    basic.pause(200)
})
basic.forever(function () {
    led.unplot(a, b)
    b += list3
    led.plot(a, b)
    if (b >= 4) {
        list3 = -1
    } else if (b <= 0) {
        list3 = 1
    }
    basic.pause(200)
})
basic.forever(function () {
    led.unplot(z, t)
    t += list
    led.plot(z, t)
    if (t >= 4) {
        list = -1
    } else if (t <= 0) {
        list = 1
    }
    basic.pause(200)
})
basic.forever(function () {
    led.unplot(c, d)
    d += list4
    led.plot(c, d)
    if (d >= 4) {
        list4 = -1
    } else if (d <= 0) {
        list4 = 1
    }
    basic.pause(200)
})
