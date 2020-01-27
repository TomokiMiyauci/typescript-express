import Express from 'express'
import bodyParser from 'body-parser'

interface Task {
  category: string
  title: string
  done: boolean
}

const tasks: Task[] = [
  {
    category: 'Private',
    title: 'shopping',
    done: false
  }
]

const app = Express()
app.use(bodyParser.json())

app.post('/tasks', (req, res) => {
  const received = req.body
  if ('category' in received && 'title' in received && 'done' in received) {
    const { category, title, done } = received
    const newTask: Task = {
      category,
      title,
      done
    }
    tasks.push(newTask)
    console.log('add', newTask)
    console.log('tasks', tasks)
    res.send('An item has been added.')
  } else {
    res.status(400).send('Parameters are invalid')
  }
})

app.get('/tasks', (req, res) => {
  res.json(tasks)
})

app.get('/', (req, res) => {
  res.send('hello new world')
})

export { app }
