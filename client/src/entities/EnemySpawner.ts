import { Enemy} from "@src/entities/Enemy"
import enemyTypes from './EnemyTypes.json'
import {Attack} from "@src/entity/interfaces";
import Vector2 = Phaser.Math.Vector2;

export class EnemySpawner {
    counter: number;
    enemyList: Enemy[];

    public constructor() {
        this.counter = 0;
        this.enemyList = [];
    }

    public spawnEnemy(name: string, health: number, movementSpeed: number, attackCapabilities: Attack, coordinates: Vector2) {
        let newEnemy: Enemy;
        newEnemy = new Enemy(this.counter++, name, health, movementSpeed, attackCapabilities,  coordinates);
        this.enemyList.push(newEnemy);

        return newEnemy;
    }

    public spawnEnemyType(enemyType: number, coordinates: Vector2) {
        try {
            const name = enemyTypes[enemyType].type;
            const health = enemyTypes[enemyType].health;
            const atkDamage = enemyTypes[enemyType].atkDamage;
            const atkSpeed = enemyTypes[enemyType].atkSpeed;
            const atkRange = enemyTypes[enemyType].atkRange;
            const movementSpeed = enemyTypes[enemyType].movementSpeed;

            return this.spawnEnemy(name, health, movementSpeed, {atkDamage, atkSpeed, atkRange} as Attack, coordinates);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    destroyEnemy(enemy: Enemy) {
        const index = this.enemyList.indexOf(enemy);
        if (index > -1) {
            this.enemyList.splice(index, 1);
        }
    }
}
