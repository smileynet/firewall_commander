import Phaser from 'phaser';
import {spawnEntity} from "@src/entity/spawnEntity";
import {spawnMap} from "@src/map/spawnMap";
import Vector2 = Phaser.Math.Vector2;
import {SpawnPoint} from "@src/map/interaces";

export default class GameScene extends Phaser.Scene {
  spawnPoint: SpawnPoint;

  constructor() {
    super('GameScene');
    this.spawnPoint = {x: 100, y: 100};
  }

  create() {
    spawnMap(this);
    spawnEntity(this, 'firewall', new Vector2(200, 100));
    spawnEntity(this, 'malware', new Vector2(this.spawnPoint.x, this.spawnPoint.y));
  }
}
