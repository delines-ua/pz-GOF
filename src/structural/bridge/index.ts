import { MobileBackend } from "./MobileBackend";
import { WebBackend } from "./WebBackend";
import { AndroidUI } from "./Android";
import { IphoneUI } from "./Iphone";
import { WebUI } from "./WebUI";

console.log("--- TEST 1: Mobile Backend ---");
// 1. Створюємо бекенд (Реалізація)
const mobileData = new MobileBackend();

// 2. Підключаємо різні UI до цього бекенду
const androidApp = new AndroidUI(mobileData);
androidApp.render();

const iphoneApp = new IphoneUI(mobileData);
iphoneApp.render();


console.log("\n--- TEST 2: Web Backend ---");
// 1. Створюємо інший бекенд
const webData = new WebBackend();

// 2. Підключаємо Web UI
const webApp = new WebUI(webData);
webApp.render();

console.log("\n--- TEST 3: Hybrid (Android on Web Backend) ---");
// Bridge дозволяє міксувати: Android UI може працювати з Web Backend!
const hybridApp = new AndroidUI(webData);
hybridApp.render();