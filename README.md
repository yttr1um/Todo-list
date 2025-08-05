### Webpack template

## NPM packages downloaded:
- webpack
- webpack-cli
- webpack-dev-server
- html-webpack-plugin
- style-loader
- css-loader

#

**//LOADING IMAGES IS NOT SUPPORTED IN THIS TEMPLATE//**
## Adding image loading

```bash
npm install --save-dev html-loader
```

```javascript
// webpack.config.js
{
  test: /\.html$/i,
  loader: "html-loader",
}
```

```javascript
// webpack.config.js
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
}
```
