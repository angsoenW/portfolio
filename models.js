import mongoose from 'mongoose'
import 'dotenv/config'

let models = {}

console.log('connecting to mongodb')

await mongoose.connect("mongodb+srv://angsoen:BzwCjknLvhK2MPVr@cluster0.pzn6zqp.mongodb.net/")

console.log('succesffully connected to mongodb!')

let itemSchema = new mongoose.Schema({
    ingredient: String,
    purchaseDate: Date,
    shelfLifeDays: Number
})

let instructionSchema = new mongoose.Schema({
    recipeID: String,
    recipeTitle: String,
    recipeImage: String,
    steps: [String]
})

let recipeSchema = new mongoose.Schema({
    username: String,
    recipe: [instructionSchema]
})

let inventorySchema = new mongoose.Schema({
    username: [String],
    contents: [itemSchema]
})

models.Item = mongoose.model('Item', itemSchema)
models.Instruction = mongoose.model('Instruction', instructionSchema)
models.Recipe = mongoose.model('Recipe', recipeSchema)
models.Inventory = mongoose.model('Inventory', inventorySchema)

export default models