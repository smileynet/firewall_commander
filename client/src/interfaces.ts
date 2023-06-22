// Feature interfaces

export interface entity {
    id: number;
    name: string;
}

/*
 * Interface for defensive combat feature
 */
export interface target {
    health: number;
}

/*
 * Interface for offensive combat feature
 */
export interface attacker {
    atkDamage: number;
    atkSpeed: number;
    atkRange: number;
}

/*
 * Interface for movement
 */
export interface mobile {
    movementSpeed: number;
}

/*
 * Interface for allegiance (true for ally or false for enemy)
 */
export interface allegiance {
    isAlly: boolean;
}

/*
 * Interface for upgrades
 */
export interface upgradable {
    upgradeLevel: number;
    canUpgrade: boolean;
    upgradeCost: number;
}

/*
 * Interface for placement
 */
export interface placeable {
    isPlaced: boolean;
    isStatic: boolean;
    locX: number;
    locY: number;
}

/*
 * Interface for towers
 */
export interface tower extends entity, target, attacker, allegiance, upgradable, placeable {

}

/*
 * Interface for units
 */
export interface unit extends entity, target, attacker, mobile, allegiance, placeable {

}

/*
 * Interface for projectiles
 */
export interface projectile {
    locX: number;
    locY: number;
    velX: number;
    velY: number;
    damage: number;
}

