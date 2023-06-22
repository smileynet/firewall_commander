// Feature interfaces

import Vector2 = Phaser.Math.Vector2;

export interface Entity {
    id: number;
    type: string;
}

/*
 * Interface for defensive combat feature
 */
export interface Target {
    health: number;
}

/*
 * Interface for offensive combat feature
 */
export interface Attack {
    atkDamage: number;
    atkSpeed: number;
    atkRange: number;
}

/*
 * Interface for movement
 */
export interface Movement {
    movementSpeed: number;
}

/*
 * Interface for allegiance (true for ally or false for enemy)
 */
export interface Allegiance {
    isAlly: boolean;
}

/*
 * Interface for upgrades
 */
export interface Upgradable {
    upgradeLevel: number;
    canUpgrade: boolean;
    upgradeCost: number;
}

/*
 * Interface for towers
 */
export interface Tower extends Entity, Target, Allegiance, Upgradable {
    attackCapabilities: Attack;
    coordinates: Vector2;
}

/*
 * Interface for units
 */
export interface Unit extends Entity, Target, Movement, Allegiance {
    attackCapabilities: Attack;
    coordinates: Vector2;
}

/*
 * Interface for projectiles
 */
export interface Projectile {
    position: Vector2;
    velocity: Vector2;
    damage: number;
}

