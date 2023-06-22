import Phaser from "phaser";
import {MapPath} from "@src/map/interaces";

export function spawnEntity(scene: Phaser.Scene, type: string, mapPath: MapPath) {
    const entity = scene.add.image(mapPath.spawnPoint.x, mapPath.spawnPoint.y, type);
    entity.setDisplaySize(64, 64)
    entity.setInteractive().on('pointerdown', () => {
        console.log(`${type} was clicked!`);
    });

    if(type !== 'firewall') {
        scene.tweens.add({
            targets: entity,
            x: mapPath.exitPoint.x,
            y: mapPath.exitPoint.y,
            duration: 2000,
            ease: 'Linear',
        });
    }
}
