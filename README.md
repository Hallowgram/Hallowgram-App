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
|`username`             | STRING(100) (NOT NULL)(UNIQUE)  |
|`password`             | STRING(1000) (NOT NULL)         |

* ONE to MANY relationship with photos
* ONE to MANY relationship comments

### 'pics'

| Column                | Type                      |
|-----------------------|---------------------------|
|`id`                   | INTEGER (PRIMARY KEY)     |
|`size`                	| INTEGER (NOT NULL)        |
|`originalName`         | STRING (NOT NULL)         |
|`mimeType`             | STRING (NOT NULL)         |
|`description`          | STRING (500)              |

* ONE to MANY relationship with photos comments
* MANY to MANY relationship with tags
* ONE to MANY relationship with photoLikes
* MANY to ONE relationship with users

### 'comments'

| Column                | Type                   |
|-----------------------|------------------------|
|`id`                   | INTEGER (PRIMARY KEY)  |
|`text`                 | STRING (NOT NULL)(250) |

* MANY to ONE relationship with photos
* MANY to ONE relationship with user
* ONE to MANY relationship with commentLikes


### 'Likes'

| Column                | Type                                |
|-----------------------|-------------------------------------|
|`id`                   | INTEGER (PRIMARY KEY)(AUTOINCREMENT)|

* MANY to ONE relationship with photos


## Routes

### GET `/`

| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| `No argument`         | No argument                                                                                 |

* If logged in, displays a page with other users photos to like or comment on, in addition to tags which relate to the photo
* If no user is logged in, redirects to login page


### POST `/`

| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| `comment`             | Text input for a user to enter in comments about a photo                                    |
| `photoLike`           | Indicator of a photo being liked by another user                                            |
| `commentLike`         | Indicator of a photo being liked by another user                                            |

* Endpoint for submitting a comment, "like" on a photo, or "like" on a comment of a photo

### GET `/login`

| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| `No argument`         | No argument                                                                                 |

* Displays a login form which has fields to verify a username and password
* Upon success, redirects 'to photomatic'
* Provides a link to signup page if user does not have an account


### POST `user/login`

| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| `username`            | Username input to verify account                                                            |
| `password`            | Password input to verify account                                                            |

* Endpoint for submitting an account creation post form
* Upon success, redirects to `/user`

### GET `user/signup`

| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| `No argument`         | No argument                                                                                 |

* Displays a page with a signup form for creating an account with a username and password.

### POST `/user/signup`

| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| `username`            | User name created to assign to account.                                                     |
| `password`            | Password created to sign into acount.                                                       |

* Endpoint for submitting an account creation post form
* Upon success, redirects to `/`


### GET `/user`

| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| `user`         	| Specifies which user is being displayed based on the user logged into the session           |

* Displays a page with a user and the photos which they have submitted
* If the user isn't logged into a session, redirects back to 'user/login'

### POST `/user/post`

| Argument              | Description                                                                                 |
|-----------------------|---------------------------------------------------------------------------------------------|
| `photo`               | Photo to be posted to the application by the user                                           |
| `description`         | Description to be associated to the photo being posted.                                     |
| `tag`                 | Tag to be associated to the photo being posted, based on a specified topic

## Project Organization

```

├── app.js                    # Main entry point of the app
├── db.js 					  #
├── config                    #
│   ├── passport              #
│	│		└── passport.js   #
│   └── config.js             #
├── controllers               #
│	    └── authcontroller.js #
├── migrations                # Where all of the database migrations live
│		├── a-user-model.js   #
│		├── b-pic-model.js.   #
│		├── comments-model.js #
│		└── likes.js 		  #
├── models                    # Where all of the Sequelize models live
│	  ├── comment.js          #
│	  ├── like.js.     		  #
│	  ├── pic.js   			  #
│	  └── user.js 		      #
├── routes                    #
│     ├── auth.js   		  #
├── static                    # Where public-access static files live
│    ├── fonts                #
│    ├── images         	  # Where all stock site images and uploaded files live
│	 ├── js					  #
│	 ├── stylesheets		  # Where site styles live
├── views					  #
│     ├── partials            #
│	  │		└── header.ejs    #
│     ├── commentview.ejs 	  #
│	  ├── login.ejs 		  #
│	  ├── newsfeed.ejs 		  #
│	  ├── profile.ejs 		  #
│	  ├── sign-up.ejs 		  #
│

```




## Technology Used

<img src="static/images/awss3.png" align="center" width="200" height="150" /> <br><br>
* [Amazon S3](https://aws.amazon.com/s3/) is object storage built to store and retrieve any amount of data from anywhere.
<br><br>

<img src="static/images/ejs.png" align="center" width="240" height="130" /> <br><br>
* [EJS](http://ejs.co/) is a simple templating language that lets you generate HTML markup with plain JavaScript.
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
