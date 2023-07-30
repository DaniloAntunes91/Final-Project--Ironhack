# GermanStay+ is a vacation home rental application designed to connect travelers with exceptional vacation homes across various regions in Germany. This README file provides a technical overview of the app, including key functionalities and dependencies.

# Dependencies
The following dependencies are required to run GermanStay+:

* Express: A fast and minimalist web framework for Node.js.
* Cors: Middleware for enabling Cross-Origin Resource Sharing (CORS).
* Mongoose: An Object Data Modeling (ODM) library for MongoDB.
* Bcrypt.js: A library for password hashing and encryption.
* Jsonwebtoken: A library for generating and verifying JSON web tokens (JWT).
* Cookie-parser: Middleware for parsing cookies in requests.
* Image-downloader: A library for downloading images from URLs.
* AWS SDK: A software development kit for interacting with Amazon Web Services (AWS), used for S3 integration.
* Multer: Middleware for handling file uploads.
* Fs: The file system module for Node.js, used for file operations.
* Mime-types: A library for determining MIME types of files.

# Usage

1. Clone the repository and navigate to the project directory.

1. Install the required dependencies using npm:

```
bash
Copy code
npm install
```
1. Set up your environment variables by creating a .env file at the root of the project and adding the following:

```
plaintext
Copy code
MONGO_URL=your_mongo_db_url
S3_ACCESS_KEY=your_aws_access_key
S3_SECRET_ACCESS_KEY=your_aws_secret_access_key
Start the server:
bash
Copy code
node index.js
The server will listen on port 4000 (http://localhost:5173).
```

# Endpoints
The app provides the following endpoints for various functionalities:

* POST /api/register: Register a new user with a name, email, and password.
* 
* POST /api/login: Log in a user with their email and password and return a JWT token.
* 
* GET /api/profile: Retrieve the user profile data based on the JWT token.
* 
* POST /api/logout: Log out the user by clearing the JWT token.
* 
* POST /api/upload-by-link: Upload an image to Amazon S3 by providing the image URL.
* 
* POST /api/upload: Upload multiple images to Amazon S3 using the "photos" field in a form-data request.
* 
* POST /api/places: Create a new vacation home listing with various details.
* 
* GET /api/user-places: Retrieve all vacation home listings owned by the logged-in user.
* 
* GET /api/places/:id: Retrieve a specific vacation home listing by its ID.
* 
* PUT /api/places: Update a vacation home listing.
* 
* GET /api/places: Retrieve all vacation home listings.
* 
* POST /api/bookings: Create a booking for a vacation home with check-in and check-out dates, guest information, and contact details.
* 
* GET /api/bookings: Retrieve all bookings made by the logged-in user.
* 
# Conclusion
Germanstay+ offers a seamless experience for travelers looking to explore Germany and enjoy memorable stays in vacation homes across the country. With its user-friendly interface and essential functionalities, GermanHome+ provides a valuable platform for vacation home owners and guests alike.

For any questions or support, please contact the development team at danilo.antunes91@gmail.com. Happy traveling with GermanHome+!





