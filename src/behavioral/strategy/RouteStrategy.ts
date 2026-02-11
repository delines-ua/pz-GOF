export interface RouteStrategy {
    buildRoute(pointAd: string, pointB: string): void;
}