# {{name}}

{{description}}

{{#if dependencies}}
Dependencies:

{{#each dependencies}}
- {{@key}}
{{/each}}
{{/if}}

## Installation

```sh
npm install {{name}}
```

## Usage

```stylus
@require '{{name}}'
```

## License

MIT
