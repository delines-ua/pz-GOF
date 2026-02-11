import { RouteStrategy } from './RouteStrategy';

export class RoadStrategy implements RouteStrategy {
    public buildRoute(pointA: string, pointB: string): void {
        console.log(`🛣️  Дорожній маршрут [${pointA} -> ${pointB}]: По трасі Е-40, час 2 години.`);
    }
}