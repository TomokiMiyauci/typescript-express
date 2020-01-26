import {app} from './app'

const port = 3000 || process.env.port

app.listen(port,()=>{
    console.log(`api server listening on port ${port}`);
})