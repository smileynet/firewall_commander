import Phaser from 'phaser';
import {spawnEntity} from "@src/entity/spawnEntity";
import {spawnMap} from "@src/map/spawnMap";
import Vector2 = Phaser.Math.Vector2;
import {MapPath} from "@src/map/interaces";

export default class GameScene extends Phaser.Scene {
  private readonly mapPath!: MapPath;
  private malware!: Phaser.Physics.Arcade.Image;
  private firewall!: Phaser.Physics.Arcade.Image;
  private fireballs!: Phaser.Physics.Arcade.Group;

  constructor() {
    super('GameScene');
    this.mapPath = {
      spawnPoint: new Vector2(2000,725),
      exitPoint: new Vector2(0,725)
    };
  }

  create() {
    spawnMap(this);
    this.firewall = spawnEntity(this, 'firewall', 200, 200, {spawnPoint: new Vector2(775, 425), exitPoint: new Vector2(200, 100)});
    this.malware = spawnEntity(this, 'malware', 200, 200, this.mapPath);

    this.fireballs = this.physics.add.group();

    this.time.addEvent({
      delay: 750,
      callback: this.shootFireball,
      callbackScope: this,
      loop: true
    });

    this.physics.add.collider(this.malware, this.fireballs, this.handleCollision as ArcadePhysicsCallback, undefined, this);
  }

  handleCollision(malware: Phaser.Physics.Arcade.Image, fireball: Phaser.Physics.Arcade.Image) {
    fireball.destroy();
    console.log("Malware hit!");
  }

  shootFireball() {
    if (this.malware.active) {
      const fireball = spawnEntity(this, 'fire', 64, 64, {spawnPoint: new Vector2(this.firewall.x, this.firewall.y), exitPoint: new Vector2(this.malware.x, this.malware.y)});
      this.fireballs.add(fireball);
    }
  }

  update() {
    Phaser.Actions.Call(this.fireballs.getChildren(), function(fireball: Phaser.Physics.Arcade.Image) {
      const direction = new Phaser.Math.Vector2(this.malware.x - fireball.x, this.malware.y - fireball.y).normalize();
      fireball.setVelocity(direction.x * 500, direction.y * 500);
    }, this);
  }
}
