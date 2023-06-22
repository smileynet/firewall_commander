// Feature interfaces

export interface Entity {
    id: number;
    name: string;
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
export interface Attacker {
    atkDamage: number;
    atkSpeed: number;
    atkRange: number;
}

/*
 * Interface for movement
 */
export interface Mobile {
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
 * Interface for placement
 */
export interface Placeable {
    isStatic: boolean;
    locX: number;
    locY: number;
}

/*
 * Interface for towers
 */
export interface Tower extends Entity, Target, Attacker, Allegiance, Upgradable, Placeable {

}

/*
 * Interface for units
 */
export interface Unit extends Entity, Target, Attacker, Mobile, Allegiance, Placeable {

}

/*
 * Interface for projectiles
 */
export interface Projectile {
    locX: number;
    locY: number;
    velX: number;
    velY: number;
    damage: number;
}

