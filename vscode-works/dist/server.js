"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = 3000 || process.env.port;
app_1.app.listen(port, () => {
    console.log(`api server listening on port ${port}`);
});
//# sourceMappingURL=server.js.map