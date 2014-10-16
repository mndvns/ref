# {{name}}

{{{description}}}

{{#if examples}}
## Examples
{{#each examples}}

```
{{{this}}}
```
{{/each}}
{{/if}}

{{#if published}}
## Installation
{{#if isNode}}

Via (npm(1))[https://www.npmjs.org/doc]:

```sh
npm install {{name}}
```
{{/if}}
{{#if isComponent}}

Via (component(1))[https://github.com/componentjs/component]:

```sh
component install {{repo}}
```
{{/if}}
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
