import { Observer } from './Observer';

export class Driver implements Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Реакція на сповіщення
    public update(message: string): void {
        console.log(`🚖 Водій ${this.name}: Прийняв замовлення "${message}". Виїжджаю!`);
    }
}