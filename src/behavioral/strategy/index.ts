import { Navigator } from './Navigator';
import { RoadStrategy } from './RoadStrategy';
import { OffRoadStrategy } from './OffRoadStrategy';

console.log('--- TEST 1: Поїздка на фурі ---');
const roadStrategy = new RoadStrategy();
const navigator = new Navigator(roadStrategy);

navigator.buildPath('Київ', 'Житомир');


console.log('\n--- TEST 2: Змінили авто на джип (зміна стратегії) ---');
const offRoadStrategy = new OffRoadStrategy();

// Міняємо алгоритм на льоту!
navigator.setStrategy(offRoadStrategy);
navigator.buildPath('Київ', 'Житомир');
