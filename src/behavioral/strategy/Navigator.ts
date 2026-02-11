import { RouteStrategy } from './RouteStrategy';

export class Navigator {
    private strategy: RouteStrategy;

    // Ми передаємо початкову стратегію при створенні
    constructor(strategy: RouteStrategy) {
        this.strategy = strategy;
    }

    // Найголовніше: метод для зміни стратегії на льоту
    public setStrategy(strategy: RouteStrategy): void {
        this.strategy = strategy;
        console.log('🔄 Навігатор: Стратегію змінено.');
    }

    public buildPath(from: string, to: string): void {
        this.strategy.buildRoute(from, to);
    }
}