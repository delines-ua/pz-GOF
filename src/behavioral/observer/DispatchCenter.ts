import { Observer } from './Observer';

export class DispatchCenter {
    // Список тих, хто чекає на замовлення
    private observers: Observer[] = [];

    // Підписати водія
    public subscribe(observer: Observer): void {
        this.observers.push(observer);
        console.log('✅ Диспетчер: Новий водій на лінії.');
    }

    // Відписати водія (пішов на обід)
    public unsubscribe(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
            console.log('❌ Диспетчер: Водій пішов з лінії.');
        }
    }

    // Головний метод: розсилка новин
    public notify(message: string): void {
        console.log(`\n📢 УВАГА ВСІМ: [${message}]`);
        for (const observer of this.observers) {
            observer.update(message);
        }
    }
}