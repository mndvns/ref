# {{name}}

{{description}}

{{#if examples}}
## Examples
{{#each examples}}

```
{{{this}}}
```
{{/each}}
{{/if}}

{{#if showDependencies}}
{{#if dependencies}}
Dependencies:

{{#each dependencies}}
- {{@key}}
{{/each}}
{{/if}}
{{/if}}

{{#if published}}
## Installation

```sh
npm install {{name}}
```
{{/if}}

{{#if isCli}}
## Usage

Via `{{name}} --help`:

```sh
  {{{usage}}}
```
{{/if}}
{{#if isApi}}
## Usage

  ```js
  require('{{name}}');
  ```
{{/if}}
{{#if isStylus}}
## Usage

  ```stylus
  @require '{{name}}'
  ```
{{/if}}
{{#if hasTests}}
## Tests

```
npm test
```

{{/if}}

## License

MIT
