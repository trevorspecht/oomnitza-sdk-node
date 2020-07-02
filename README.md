# oomnitza-sdk-node
A Node.js SDK for the Oomnitza API

## Usage

```
const Oomnitza = require('@trevospecht/oomnitza-sdk-node'); // require Oomnitza SDK
const oom = new Oomnitza('OOMNITZA_API_KEY'); // create new Oomnitza client with an Oomnitza API key
```

### Methods

```
const assetList = await oom.listAssets(params);
const asset = await oom.getAsset(id);
```