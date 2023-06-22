import Phaser from 'phaser';
import Vector2 = Phaser.Math.Vector2;

function spawnMap(scene: Phaser.Scene) {
  const map = scene.make.tilemap({key: 'map'});
  const tileset = map.addTilesetImage('tiles');
  const layer = map.createLayer('background', tileset, 0, 0);
  console.debug("layer", layer);
}

function spawnEntity(scene: Phaser.Scene, type: string, coords: Vector2) {
  const firewall = scene.add.image(coords.x, coords.y, type);
  firewall.setDisplaySize(64, 64)
  firewall.setInteractive().on('pointerdown', () => {
    console.log(`${type} was clicked!`);
  });
}

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    spawnMap(this);
    spawnEntity(this, 'firewall', new Vector2(200, 100));
    spawnEntity(this, 'malware', new Vector2(300, 100));
  }
}
