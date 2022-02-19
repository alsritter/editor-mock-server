let express = require('express') //引入express
let Mock = require('mockjs') //引入mock

const app = express() //实例化express
const cors = require('cors')
app.use(cors())

const tiles = require('./json/Tilesets.json')
const background = require('./json/Background.json')
const prefabs = require('./json/Props.json')
const effects = require('./json/Effects.json')

app.use('/get-tiles', (req, res) => {
  res.json(tiles)
})

app.use('/get-prefabs', (req, res) => {
  res.json(prefabs)
})

app.use('/get-bg', (req, res) => {
  res.json(background)
})

app.use('/get-effects', (req, res) => {
  res.json(effects)
})

app.use('/get-effect-by-id/:id', (req, res) => {
  const { id } = req.params
  let result
  for (const effect of effects) {
    if (effect.effect_id == id) {
      result = effect
      break
    }
  }

  res.json(result)
})


app.use('/get-tile-by-id/:id', (req, res) => {
  const { id } = req.params
  let result
  for (const tile of tiles) {
    if (tile.spriteId == id) {
      result = tile
      break
    }
  }

  res.json(result)
})

app.use('/get-prefab-by-id/:id', (req, res) => {
  const { id } = req.params
  let result
  for (const pre of prefabs) {
    if (pre.prefabId == id) {
      result = pre
      break
    }
  }

  res.json(result)
})

app.use('/get-bg-by-id/:id', (req, res) => {
  const { id } = req.params
  let result
  for (const pre of background) {
    if (pre.bg_id == id) {
      result = pre
      break
    }
  }

  res.json(result)
})

app.listen('19999', () => {
  console.log('监听端口 19999')
})
