# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous middleware or routes.  The provided code showcases a server that performs an asynchronous operation. If the operation fails, the server crashes without any informative error messages, making debugging difficult.  The solution demonstrates proper error handling to prevent crashes.

## Bug

The `bug.js` file contains an Express.js server with an asynchronous operation (`someAsyncOperation`). This function has a 50% chance of failing and throwing an error.  Crucially, the error handling is incomplete—it only logs the error to the console but doesn't send an error response to the client or prevent the server from crashing.

## Solution

The `bugSolution.js` file provides a corrected version with proper error handling.  It uses a `try...catch` block to handle potential errors during the asynchronous operation.  If an error occurs, it sends an appropriate error response to the client, preventing the server from crashing and providing feedback to the user.