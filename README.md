# GRANTURISMO

generator tool

## PUBLISH

make sure you have submitted your changes

`npm version patch`

`npm publish --registry="https://registry.npmjs.org/"`

## INSTALLATION

`sudo npm i -g granturismo`

## USAGE

`gt`

`gt help`

`gt init`

`gt config add scaffold-name git-repo`

`gt config remove scaffold-name`

## HOT TO SCAFFOLD USING GT?

Implement `gt.js`, adding project info into user config.

See [react-scaffold](https://github.com/vivaxy/react-scaffold) as example.

### gt.js

GT cli invokes `init` method in `scaffold/scripts/gt.js`, and passing options into `init`.

```js
{
    project: {
        folder: '/absolute/path/to/project/folder',
        name: 'project-name', // same as project folder name
        git: {
            repositoryURL: 'git://git-url', // mainly used for package.json repository.url
        },
    },
    scaffold: {
        folder: '/absolute/path/to/scaffold/folder', // mostly ~/.gt/scaffold-name
        name: 'scaffold-name',
    },
    presets: {
        copyFiles: () => {},
        writeFile: () => {},
        updateFile: () => {},
        writeJson: () => {},
        updateJson: () => {},
    },
}
```

#### presets

##### copyFiles(fileList)

`fileList` `Array[String]` is an array containing filename your want to copy.

eg.

```
const copyFiles = (options) => {

    const {
        presets,
    } = options;

    const files = [
        `docs`,
        `mock-server`,
        `source`,
        `.babelrc`,
        `.editorconfig`,
        `.gitignore`,
        `LICENSE`,
        `webpack.config.js`,
    ];

    console.log(`copying files...`);
    presets.copyFiles(files);
};
```

##### writeFile({String}, {String})

Write string into file under project folder

##### updateFile({String}, filter{Function})

`filter{Function}` `filter({String}) => {String}`

Read file from scaffold, passing into `filter`, write filter result into file under project folder

##### writeJson({String}, {Object})

Same as `writeFile`, but passing json object into second parameter

##### updateJson({String}, filter{Function})

`filter{Function}` `filter({Object}) => {Object}`

Same as `updateFile`, but passing json object into `filter`

## ENCOUNTERED PROBLEMS

- npm postinstall scripts running by nobody, cannot write files in file system.

    @see http://stackoverflow.com/questions/25011703/write-file-in-home-directory-when-running-npm-install
    
    when running `gt init`, user is current login user (whoami === 'vivaxy'), whence we can write files.

## REFERENCE

- https://github.com/jprichardson/node-fs-extra
- https://github.com/shelljs/shelljs
- https://github.com/yargs/yargs
- https://github.com/isaacs/minimatch
