import Phaser from "phaser";
import {MapPath} from "@src/map/interaces";

export function spawnEntity(scene: Phaser.Scene, type: string, mapPath: MapPath) {
    const entity = scene.physics.add.image(mapPath.spawnPoint.x, mapPath.spawnPoint.y, type);
    entity.setDisplaySize(128, 128)
    entity.setInteractive().on('pointerdown', () => {
        console.log(`${type} was clicked!`);
    });

    if(type === 'malware') {
        entity.setImmovable(true);
        scene.tweens.add({
            targets: entity,
            x: mapPath.exitPoint.x,
            y: mapPath.exitPoint.y,
            duration: 2000,
            ease: 'Linear',
        });
    }

    return entity;
}
