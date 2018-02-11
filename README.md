<img src="static/images/HallowGram.png" align="right" alt="Hallowgram Logo" width="200" height="200" overflow="hidden" />

# Hallowgram

An fullstack application created by [Michael Haviv](https://github.com/mhaviv) and [Jeiner Noriega](https://github.com/bigal2331). A Halloween themed Instagram clone application

## Getting Started

```bash
$ git clone https://github.com/Hallowgram/Hallowgram-App
$ cd Hallowgram-App
$ npm install
$ node app.js
```

## Deployment

[hallowgram.herokuapp.com](hallowgram.herokuapp.com)


## Data Models

### 'users'

| Column                | Type                	          |
|-----------------------|---------------------------------|
|`id`                   | INTEGER (PRIMARY KEY)           |
|`email`             	| STRING (NOT NULL) (UNIQUE)      |
|`password`             | STRING (NOT NULL)               |
|`firstname`            | STRING (NOT NULL)               |
|`lastname`             | STRING (NOT NULL)               |
|`username`             | STRING (NOT NULL)               |

* ONE to MANY relationship with photos
* ONE to MANY relationship comments
* ONE to MANY relationship likes

### 'pics'

| Column                | Type                            |
|-----------------------|---------------------------------|
|`id`                   | INTEGER (PRIMARY KEY)           |
|`url`                	| INTEGER (NOT NULL)              |
|`name`         		| STRING (NOT NULL)               |
|`description`          | STRING                          |
|`userId`          		| INTEGER (FOREIGN KEY)           |

* ONE to MANY relationship with comments
* ONE to MANY relationship with likes
* MANY to ONE relationship with users

### 'comments'

| Column                | Type                            |
|-----------------------|---------------------------------|
|`id`                   | INTEGER (PRIMARY KEY)           |
|`text`                 | STRING (NOT NULL)               |
|`userID`               | INTEGER (FOREIGN KEY)           |
|`picID`                | INTEGER (FOREIGN KEY)           |

* MANY to ONE relationship with photos
* MANY to ONE relationship with user

### 'likes'

| Column                | Type                            |
|-----------------------|---------------------------------|
|`id`                   | INTEGER (PRIMARY KEY)           |
|`userId`               | INTEGER (FOREIGN KEY)           |
|`picId`                | INTEGER (FOREIGN KEY).          |

* MANY to ONE relationship with users
* MANY to ONE relationship with pics


## Project Organization

```

├── app.js                    # Main entry point of the app
├── db.js 					  # Where database configuration is handled for database models
├── config                    # Where application configuration lives
│   ├── passport              ## Where Passport.js authentication lives
│   └── config.js             ## Development configuration lives here
├── controllers               # Where application controllers live
├── migrations                # Where all of the database migrations live
├── models                    # Where all of the Sequelize models live
├── routes                    # Where router files live
├── static                    # Where public-access static files live
│    ├── fonts                ## Fonts(eot|otf|ttf|woff|woff2)
│    ├── images         	  ## Where all stock and uploaded images live
│	 ├── js					  ## Front End Javascript functionality 
│	 ├── stylesheets		  ## Where site styles live
├── views					  # EJS files for rendering live 
│     ├── partials            ## EJS partial files
│

```


## Technology Used

<img src="static/images/awss3.png" align="center" width="200" height="150" /> <br><br>
* [Amazon S3](https://aws.amazon.com/s3/) is object storage built to store and retrieve any amount of data from anywhere.
<br><br>

<img src="static/images/express.png" align="center" width="210" height="100" /> <br><br>
* [Express](https://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
<br><br>

<hr>
<br>

* [Multer](https://www.npmjs.com/package/multer/) is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
<br><br>

<hr>
<br>

<img src="static/images/nodejs.png" align="center" width="190" height="120" /> <br><br>
* [Node](https://nodejs.org/en/) is a multi-platform, open-source JavaScript run-time environment that executes code on the server-side.
<br><br>

<img src="static/images/postgres.png" align="center" width="200" height="120" /> <br><br>
* [PostgreSQL](https://www.postgresql.org/) is a powerful, open source object-relational database system.
<br><br>

<img src="static/images/sequelize.png" align="center" width="200" height="100" /> <br><br>
* [PostgreSQL](http://docs.sequelizejs.com/) is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
<br><br>

## Contribute
* Contributions are always welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## Credits

Michael Haviv (contributor)
Jeiner Noriega (contributor)

## License
* This frontend web application is available under the [MIT License](https://github.com/mhaviv/Hallowgram/Hallowgram-App/blob/master/LICENSE.md).
