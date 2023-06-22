import Phaser from "phaser";
import Vector2 = Phaser.Math.Vector2;

export function spawnEntity(scene: Phaser.Scene, type: string, coords: Vector2) {
    const firewall = scene.add.image(coords.x, coords.y, type);
    firewall.setDisplaySize(64, 64)
    firewall.setInteractive().on('pointerdown', () => {
        console.log(`${type} was clicked!`);
    });
}
