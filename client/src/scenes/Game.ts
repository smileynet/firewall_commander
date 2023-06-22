import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('tiles');
    const layer = map.createLayer('background', tileset, 0, 0);
    console.debug("layer", layer);
    const firewall = this.add.image(200, 70, 'firewall');
    firewall.setDisplaySize(64, 64)
    const malware = this.add.image(400, 70, 'malware');
    malware.setDisplaySize(64, 64)
  }
}
