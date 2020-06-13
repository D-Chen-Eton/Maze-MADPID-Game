namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
info.startCountdown(17)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 . . . 1 1 . . 
. . . . . 1 1 1 1 1 . . 1 1 . . 
. . . . . 1 1 1 1 1 . . 1 . . . 
. . 1 1 . 1 1 1 1 . . 1 1 . . . 
. . 1 1 . 1 1 1 1 1 . 1 1 . . . 
. . . 1 . . 1 1 . . . 1 . . . . 
. . . . 1 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . 1 1 1 1 . . . . . . . 
. . . . . 1 . . 1 . . . . . . . 
. . . 1 1 1 . . 1 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000181d1d1d1d1d1d1d1d1d1d1d1d181416190000000000000000000000001900171900181e1e1e1e1e1e1e1e16001900171900190000000000000000170019001719001900181600181515151c0019001719001900191700181e1e1e1e0019001719001900191700220000000000190017190000001917002200181515151c00171a1b1b1b1a1c002200190000000000171900000000000022001900181515151c1900181e1e1e1c22001900192627251719001928000000220019001a151515161900191e1e160022001900000000001719001a15151c0022001a151515150017190000000000002200000000000000171a1b1b1b1b1b1b1a1b1b1b1b1b1b1b1c`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 . 2 . . . . . . . . 2 . 2 . 2 
2 . 2 . 2 2 . 2 2 2 2 2 . 2 . 2 
2 . 2 . 2 2 . 2 2 2 2 2 . 2 . 2 
2 . 2 . 2 2 . 2 . . . . . 2 . 2 
2 . . . 2 2 . 2 . 2 2 2 2 2 . 2 
2 2 2 2 2 2 . 2 . 2 . . . . . 2 
2 . . . . . . 2 . 2 . 2 2 2 2 2 
2 . 2 2 2 2 2 2 . 2 . 2 2 2 2 2 
2 . 2 . . . . 2 . 2 . 2 2 2 2 2 
2 . 2 2 2 2 . 2 . 2 . . . . . 2 
2 . 2 2 2 2 . 2 . 2 2 2 2 2 . 2 
2 . . . . . . 2 . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths1,sprites.builtin.oceanDepths9,sprites.builtin.oceanDepths8,sprites.castle.tilePath7,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.castle.rock0,sprites.castle.rock1,sprites.castle.saplingOak,sprites.castle.rock2,sprites.dungeon.chestClosed,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleInsignia,sprites.builtin.oceanDepths7,sprites.builtin.oceanDepths3,sprites.dungeon.doorClosedNorth,sprites.dungeon.stairSouth,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterWest2,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.stairWest,sprites.dungeon.chestOpen,sprites.dungeon.darkGroundNorth],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
music.playMelody("D E F D A A G - ", 250)
music.playMelody("C D E C G G F E ", 250)
music.playMelody("D C D F D F G F ", 250)
music.playMelody("D C C G F - - - ", 250)
music.playMelody("F E D D E D F E ", 210)
music.playMelody("D - F E D D E D ", 210)
music.playMelody("A G F E D - - - ", 210)
music.playMelody("C C D F D C D E ", 260)
music.playMelody("F E D D E D F E ", 225)
music.playMelody("D - F E D D E D ", 225)
music.playMelody("A G F E D - - C ", 230)
music.playMelody("C D F D C D D - ", 260)
music.playMelody("- - - - F F F D ", 210)
