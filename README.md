# TubeFlow

TubeFlow is a cooperative platform built to optimize YouTube content production and administration. It facilitates smooth collaboration among creators, managers, and editors by simplifying video uploads, metadata modifications, approval processes, and scheduling.

## Project Link:-

## Technical Details

-   Frontend: Next.js, TypeScript, Tailwind CSS
-   Backend: Next.js server Actions
-   Database: MongoDB

## Features

-   Seamlessly connect with your YouTube channel.
-   Add editors to your YouTube team.
-   Editors can upload videos, which start as private.
-   Owners can review and approve videos for public release.

# Contributing

Thank you for your interest in contributing to our project! This guide will help you get started with setting up.

## Installation

1. Clone the repository:
2. Make `.env` file and copy all fields from `.env.example`
3. Add all Variable for `Google API Credentials` and `Mongodb`

-   Create a account of Mongodb or start mongodb locally and then get the url of database. Also make sure your ip address have proper access.
-   Get Google API Credentials. Steps are mentioned below.

4. Install Dependencies `npm install` or `yarn install`
5. Run project locally `npm run dev`

## Setting Up Google API Credentials

To contribute to our project, you'll need to set up Google API credentials. Here's how you can do it:

### 1. Enable YouTube Data API v3

1. Visit the [Google API Console](https://console.developers.google.com/).

2. Create a new project or select an existing one.

3. In the left-hand menu, navigate to "APIs & Services" > "Library."

4. In the "Search for APIs & Services" box, type "YouTube Data API v3" and select it.

5. Click the "Enable" button to enable the API for your project.

### 2. Create OAuth 2.0 Client ID

1. In the left-hand menu of the [Google API Console](https://console.developers.google.com/), navigate to "APIs & Services" > "Credentials."

2. Click the "Create credentials" button and select "OAuth client ID."

3. Select "Web application" as the application type.

4. Enter a name for your OAuth 2.0 client ID.

5. Under "Authorized JavaScript origins," add the URL where your project will be hosted. If you're running it locally during development, use `http://localhost:3000`.

6. Under "Authorized redirect URIs," add the URL where Google should redirect users after they log in.You need to add two urls here. `http://localhost:3000/api/auth/callback/google`, `http://localhost:3000/dashboard/verifychannel`

7. Click the "Create" button to create the OAuth 2.0 client ID.

### 3. Obtain Client ID and Secret

1. After creating the OAuth 2.0 client ID, you'll be presented with a dialog containing your client ID and client secret.

2. Store these credentials securely. They will be used to authenticate your application with Google APIs.

We welcome contributions! To contribute to TubeFlow, follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Commit your changes and push to your fork.
Open a pull request to the main repository.
Please read our Contributing Guidelines for more information.