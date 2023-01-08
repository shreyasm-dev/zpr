# zpr

zpr (pronounced zeper or /ˈziːpər/) is a Node module that provides a simple programmatic way to construct zsh prompts.

## Installation

```bash
npm i zpr
```

## Usage

```js
import Prompt from 'zpr';

const prompt = new Prompt()
  .colorOpen('red')
  .text('[')
  .cwdFromHome()
  .text(']')
  .colorClose()
  .text(' $ ');

console.log(`PROMPT="prompt.toString()"`);
```

## Plug-n-Play Prompts

- [transpicuous](https://www.npmjs.com/package/transpicuous)
- Made one? Open a PR and let me know!

## FAQ

### How can I use this?

To set a prompt on the left side of your terminal, add the following to your `~/.zshrc`:

```bash
PROMPT="$(node /path/to/your/script.js)"
```

To set a prompt on the right side of your terminal, add the following to your `~/.zshrc`:

```bash
RPROMPT="$(node /path/to/your/script.js)"
```

If you use substitutions in your prompt, you'll need to use single quotes instead of double quotes.

### Why?

To allow the easy creation of zsh prompts from within Node, instead of having to mess around with pesky shell scripts and percent signs.

### CLI Support?

No, there is no CLI support (yet). If you want to use zpr in your shell, you'll have to write a wrapper script. However, I do plan on adding a CLI in the future.
