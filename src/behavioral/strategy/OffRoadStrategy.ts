import { RouteStrategy } from './RouteStrategy';

export class OffRoadStrategy implements RouteStrategy {
    public buildRoute(pointA: string, pointB: string): void {
        console.log(`🌲 Бездоріжжя [${pointA} -> ${pointB}]: Через ліс навпростець, час 40 хвилин.`);
    }
}