export interface Entity {
    id: number;
    type: string;
}

export interface Traffic extends Entity {
    health: number;
    speed: number;
    damage: number;
}
