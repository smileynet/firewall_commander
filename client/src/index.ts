import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/Game';
import BootScene from "@src/scenes/Boot";

new Phaser.Game(
  Object.assign(config, {
    scene: [BootScene, GameScene]
  })
);
