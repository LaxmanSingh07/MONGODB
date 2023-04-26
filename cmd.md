## RUN MONGO ON CMD

use mongosh

## TO SEE ALL THE DATABASES

USE --> show dbs

## for mongodb --->

there is an ODM (mongoose)

`what is mongodb compass`

`GIHUB LINK OF THE MONGODB `

```link


```

Mongodb uses `JSON` like `syntax` with optional schema to store data

`MongoDB` is a `NoSQL` database

`NoSQL` is a `non relational` database

`mongodb stores data in the form of documents`

### `COLLECTIONS` in `mongodb` are similar to `tables` in `SQL`

`ORM` ---> OBJECT RELATION MAPPER (NOT FOR MONGODB)

BUT

`ODM` ---> OBJECT MODELING MAPPER

`DataBase only created in case of mongodb if you are passing some collections to it`

what is `Schema` in `mongodb`?

`Schema` is a `JSON` object which defines the `structure` of the `document` in the `collection`

### Defining `Schema` in `mongodb`

```javascript
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema);
```

## why we are creating the model if we have Schema?

Schema is like a class and model is the actual instance of it .

## In case of Mongodb id is automatically give by mongodb itself



## Structure of the Schema

```javascript

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

```


```
__v is the version of the schema
__id is the id of the schema (automatically generated by mongodb)

```