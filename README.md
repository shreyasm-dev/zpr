# zpr

zpr (pronounced zeper or /ˈziːpər/) is a Node module that provides a simple programmatic way to construct zsh prompts.

## Installation

```bash
npm i zpr
```

## Usage

```js
const Prompt = require('zpr');

const prompt = new Prompt()
  .colorOpen('red')
  .text('[')
  .cwdFromHome()
  .text(']')
  .colorClose()
  .text(' $ ');

console.log(prompt.export());
```

## FAQ

### CLI Support?

No, there is no CLI support (yet). If you want to use zpr in your shell, you'll have to write a wrapper script. However, I do plan on adding a CLI in the future.

### Why?

To allow the easy creation of zsh prompts from within Node, instead of having to mess around with pesky shell scripts and percent signs.
