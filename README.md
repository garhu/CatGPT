# CatGPT

CatGPT is a cat-themed chatbot! Meow, meow!

![](https://github.com/garhu/CatGPT/blob/main/animation.gif)

## Installation

Before running the app, you'll want to set up the backend server

```bash
cd server
npm install
node server.js
```

With the server running, you can set up the frontend

```bash
cd client
npm install
npm start
```

## Usage

CatGPT responds to greetings, thanks, and goodbyes.

In addition, CatGPT can give you:

- cat jokes!
- cat facts!
- summaries of specific cat breeds!

All you have to do is ask!

### Examples

- "Hello!"
- "Goodbye!"
- "Thank you!"
- "Tell me a cat joke"
- "I want a cat fact"
- "What can you tell me about the Ragdoll cat?"

## How?

CatGPT is made possible by using Cohere's Intent Recognition.

The model is trained on example data of each intent. User input is categorized into pre-defined intents through Cohere and based on the intent, a pre-defined response is displayed.

## Why not use text generation?

Cohere does have text generation, but users can ask it anything - whether or not it's related to cats. (Also, its jokes aren't great.)

## Credits

- Cat facts: https://catfact.ninja/
- Cat jokes: https://paradepets.com/cats/cat-jokes
- Silly little cat guy: https://unsplash.com/photos/Y0WXj3xqJz0
- Wet cat: https://www.instagram.com/p/Bv4HwFgBWO6/
- Surprised cat: https://www.thecut.com/2016/02/can-cats-help-curb-youth-smoking.html
- Rare cat: https://themindcircle.com/13-photoshops-of-cats/
