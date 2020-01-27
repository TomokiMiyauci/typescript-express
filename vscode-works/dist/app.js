"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const tasks = [{
        category: "Private",
        title: "shopping",
        done: false
    }];
const app = express_1.default();
exports.app = app;
app.use(body_parser_1.default.json());
app.post('/tasks', (req, res) => {
    const received = req.body;
    if ('category' in received && 'title' in received && 'done' in received) {
        const { category, title, done } = received;
        const newTask = {
            category,
            title,
            done
        };
        tasks.push(newTask);
        console.log('add', newTask);
        console.log('tasks', tasks);
        res.send('An item has been added.');
    }
    else {
        res.status(400).send('Parameters are invalid');
    }
});
app.get('/tasks', (req, res) => {
    res.json(tasks);
});
app.get('/', (req, res) => {
    res.send('hello new world');
});
//# sourceMappingURL=app.js.map