import {Attack, Tower} from '../entity/interfaces'
import Vector2 = Phaser.Math.Vector2;

export class DefenseTower implements Tower {
    id: number;
    type: string;
    health: number;
    attackCapabilities: Attack;
    upgradeLevel: number;
    canUpgrade: boolean;
    upgradeCost: number;
    isAlly: boolean;
    coordinates: Vector2;

    constructor(id: number,
                name: string, health: number,
                attackCapabilities: Attack, upgradeLevel: number,
                canUpgrade: boolean, upgradeCost: number,
                coordinates: Vector2)
    {
        this.id = id;
        this.type = name;
        this.health = health;
        this.attackCapabilities = attackCapabilities;
        this.upgradeLevel = upgradeLevel;
        this.canUpgrade = canUpgrade;
        this.upgradeCost = upgradeCost;
        this.isAlly = true;
        this.coordinates = coordinates;
    }
}
