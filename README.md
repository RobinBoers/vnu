# Nu HTML validator

This is a wrapper package for the `vnu-jar` NPM package, which provides the JAR file for the W3C [HTML and CSS validator](https://github.com/validator/validator).

By default, you'd have to call the validator like this:

```shell
java -jar node_modules/vnu-jar/build/dist/vnu.jar [OPTIONS] [FILES]
```

... which sucks. So I created this package. It does nothing more than wrapping the `java -jar` command, and providing it as a nice Node executable, which can be called as such:

```shell
npx vnu

# Or add to your PATH:
export PATH="./node_modules/.bin:$PATH"
vnu
```

## Installation

```
npm i RobinBoers/vnu
```
