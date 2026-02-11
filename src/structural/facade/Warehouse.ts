export class Warehouse {
    public checkStock(productId: string): boolean {
        console.log(`🏭 Склад: Перевіряю наявність товару [${productId}]...`);
        return true; // Уявимо, що товар завжди є
    }

    public packageItem(productId: string): void {
        console.log(`🏭 Склад: Пакуємо товар [${productId}] у коробку з пухирцями.`);
    }
}