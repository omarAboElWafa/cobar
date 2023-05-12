export class Food {
    id!: string;
    name!: string;
    price!: number;
    description?: string;
    tags?: string[];
    favorite!: boolean;
    stars!: number;
    imageUrl!: string;
    origins!: string[];
    cookingTime!: string;
}