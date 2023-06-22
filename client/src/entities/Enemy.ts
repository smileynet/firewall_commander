import { Unit } from '../entity/interfaces'

export class Enemy implements Unit {
    id: number;
    name: string;
    health: number;
    atkDamage: number;
    atkSpeed: number;
    atkRange: number;
    movementSpeed: number;
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
                       movementSpeed: number,
                       locX: number,
                       locY: number) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.atkDamage = atkDamage;
        this.atkSpeed = atkSpeed;
        this.atkRange = atkRange;
        this.movementSpeed = movementSpeed;
        this.isAlly = false;
        this.isStatic = false;
        this.locX = locX;
        this.locY = locY;
    }
}