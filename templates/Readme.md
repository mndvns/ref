# {{name}}

{{description}}

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

## Usage

{{#if isCli}}
Via `{{name}} --help`:

```sh
  {{usage}}
```
{{/if}}
{{#if isApi}}
  ```js
  require('{{name}}');
  ```
{{/if}}
{{#if isStylus}}
  ```stylus
  @require '{{name}}'
  ```
{{/if}}

## License

MIT
