import Phaser from 'phaser';
import assets from '@assets/assets.json';

export default class BootScene extends Phaser.Scene {
    private progressBar!: Phaser.GameObjects.Graphics;

    constructor() {
        super('BootScene');
    }

    preload() {
        this.progressBar = this.add.graphics();
        this.progressBar.fillStyle(0xffffff, 1);
        this.progressBar.fillRect(240, 290, 320, 20);

        const backgroundBar = this.add.graphics();
        backgroundBar.lineStyle(4, 0xffffff, 1);
        backgroundBar.strokeRect(240, 290, 320, 20);

        this.load.on('progress', (value: number) => {
            this.progressBar.clear();
            this.progressBar.fillStyle(0xffffff, 1);
            this.progressBar.fillRect(240, 290, 320 * value, 20);
        });
        this.loadAssets(assets);
    }

    create() {
        this.scene.start('GameScene');
    }

    private loadAssets(assets: any[]) {
        assets.forEach((asset) => {
            const extension = asset.url.split(".").pop();

            switch (extension) {
                case 'png':
                case 'gif':
                    this.load.image(asset.key, asset.url);
                    break;
                case 'svg':
                    if (asset.width && asset.height) {
                        this.load.svg(asset.key, asset.url, {
                            width: asset.width,
                            height: asset.height,
                        });
                    } else {
                        this.load.svg(asset.key, asset.url);
                    }
                    break;
                case 'json':
                case 'tmj':
                    this.load.tilemapTiledJSON(asset.key, asset.url);
                    break;
                default:
                    console.warn(`Unsupported file extension ${extension}`);
            }
        });
    }
}
