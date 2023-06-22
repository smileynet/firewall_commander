import Phaser from "phaser";

export function spawnMap(scene: Phaser.Scene) {
    const map = scene.make.tilemap({key: 'map'});
    const tileset = map.addTilesetImage('tiles');
    const layer = map.createLayer('background', tileset, 0, 0);

    // Set the camera bounds to cover the entire map layer
    scene.cameras.main.setBounds(0, 0, layer.width, layer.height);

    // Calculate the zoom factor to ensure the whole map fits within the viewport
    const zoomX = scene.cameras.main.width / layer.width;
    const zoomY = scene.cameras.main.height / layer.height;
    scene.cameras.main.setZoom(Math.min(zoomX, zoomY));
}
