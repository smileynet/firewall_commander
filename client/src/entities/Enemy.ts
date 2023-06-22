import {Attack, Unit} from '../entity/interfaces'
import Vector2 = Phaser.Math.Vector2;

export class Enemy implements Unit {
    id: number;
    type: string;
    health: number;
    attackCapabilities: Attack;
    movementSpeed: number;
    isAlly: boolean = false;
    coordinates: Vector2;
    constructor(id: number, type: string,
                health: number, movementSpeed: number,
                attackCapabilities: Attack, coordinates: Vector2 )
    {
        this.id = id;
        this.type = type;
        this.health = health;
        this.attackCapabilities = attackCapabilities;
        this.movementSpeed = movementSpeed;
        this.coordinates = coordinates;
    }
}
