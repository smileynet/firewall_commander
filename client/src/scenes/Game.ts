import Phaser from 'phaser';
import {spawnEntity} from "@src/entity/spawnEntity";
import {spawnMap} from "@src/map/spawnMap";
import Vector2 = Phaser.Math.Vector2;
import {MapPath} from "@src/map/interaces";

export default class GameScene extends Phaser.Scene {
  private mapPath!: MapPath;

  constructor() {
    super('GameScene');
    this.mapPath = {
      spawnPoint: new Vector2(100,100),
      exitPoint: new Vector2(800,600)
    };
  }

  create() {
    spawnMap(this);
    spawnEntity(this, 'firewall', {spawnPoint: new Vector2(200, 100), exitPoint: new Vector2(200, 100)});
    spawnEntity(this, 'malware', this.mapPath);
  }
}
