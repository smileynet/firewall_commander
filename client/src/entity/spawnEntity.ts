import Phaser from "phaser";
import Vector2 = Phaser.Math.Vector2;

export function spawnEntity(scene: Phaser.Scene, type: string, coords: Vector2) {
    const entity = scene.add.image(coords.x, coords.y, type);
    entity.setDisplaySize(64, 64)
    entity.setInteractive().on('pointerdown', () => {
        console.log(`${type} was clicked!`);
    });
}
