import { Enemy } from './Enemy'
import enemyTypes from './EnemyTypes.json'

export class EnemySpawner {
    counter: number;
    enemyList: Enemy[];

    public constructor() {
        this.counter = 0;
        this.enemyList = [];
    }

    public spawnEnemy(name: string, health: number, atkDamage: number, atkSpeed: number, atkRange: number, movementSpeed: number, locX: number, locY: number) {
        let newEnemy: Enemy;
        newEnemy = new Enemy(this.counter++, name, health, atkDamage, atkSpeed, atkRange, movementSpeed, locX, locY);
        this.enemyList.push()

        return newEnemy;
    }

    public spawnEnemyType(enemyType: number, locX: number, locY: number) {
        try {
            const name = enemyTypes[enemyType].name;
            const health = enemyTypes[enemyType].health;
            const atkDamage = enemyTypes[enemyType].atkDamage;
            const atkSpeed = enemyTypes[enemyType].atkSpeed;
            const atkRange = enemyTypes[enemyType].atkRange;
            const movementSpeed = enemyTypes[enemyType].movementSpeed;

            return this.spawnEnemy(name, health, atkDamage, atkSpeed, atkRange, movementSpeed, locX, locY);
        } catch (error: any) {
            console.log(error.message);
        }
    }
}