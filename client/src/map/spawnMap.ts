import Phaser from "phaser";

export function spawnMap(scene: Phaser.Scene) {
    const map = scene.make.tilemap({key: 'map'});
    const tileset = map.addTilesetImage('tiles');
    const layer = map.createLayer('background', tileset, 0, 0);
    console.debug("layer", layer);
}
