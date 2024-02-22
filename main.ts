scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (!(mySprite.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 1) {
        jump += 1
        mySprite.vy = -170
    }
})
function what_powerup (list: any[]) {
    for (let value of list) {
        if (0 < 0) {
        	
        }
    }
}
let jump = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `, SpriteKind.Player)
info.setLife(3)
mySprite.ay = 370
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 14))
jump = 0
let p1 = 1
let p2 = 2
let p3 = 3
let p4 = 4
let powerList = [
p1,
p2,
p3,
p4
]
