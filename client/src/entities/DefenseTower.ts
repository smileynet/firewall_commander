import { Tower } from '../entity/interfaces'

export class DefenseTower implements Tower {
    id: number;
    name: string;
    health: number;
    atkDamage: number;
    atkSpeed: number;
    atkRange: number;
    upgradeLevel: number;
    canUpgrade: boolean;
    upgradeCost: number;
    isAlly: boolean;
    isStatic: boolean;
    locX: number;
    locY: number;

    public constructor(id: number,
                       name: string,
                       health: number,
                       atkDamage: number,
                       atkSpeed: number,
                       atkRange: number,
                       upgradeLevel: number,
                       canUpgrade: boolean,
                       upgradeCost: number,
                       locX: number,
                       locY: number) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.atkDamage = atkDamage;
        this.atkSpeed = atkSpeed;
        this.atkRange = atkRange;
        this.upgradeLevel = upgradeLevel;
        this.canUpgrade = canUpgrade;
        this.upgradeCost = upgradeCost;
        this.isAlly = true;
        this.isStatic = true;
        this.locX = locX;
        this.locY = locY;
    }
}