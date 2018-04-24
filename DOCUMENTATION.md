# Release Notes

### Version 1.0

#### Included Functionality
- Laravel Lumen backend to handle study partner matching and user information storage
- Users can create bilateral study partner relationships (Study Buddies)
- Study buddies can send and receive messages from one another
- Account creation and login using Firebase (no personal information stored)
- Users can see a list of pending matches and confirm their selection of study partners
- Users can add a biography and a list of classes to their account

#### Outstanding Bugs
- Administrator panel is non-functional at this time.
- Users are unable to automatically import courses; they must be manually added.
- Laravel Lumen backend requires access to a php command-line tool to install account migrations; Plesk does not provide this functionality.

# Install Guide / Requirements

The phone application requires the [Expo](https://expo.io/) phone application for users to run the software. In order to build and publish the application, developers will need the Expo command line tools, available from the same location.

The backend server requires an SQL database installation and a webserver that supports PHP 7.0. The included .htaccess file can be used with Apache to ensure that queries to the backend are properly processed.

Recommended Software: [MySQL](https://www.mysql.com/), [Apache](https://httpd.apache.org/), [PHP](http://www.php.net/).

## Deployment Guide - Phone Application

The phone application uses the [Expo](https://expo.io/) framework. Please refer to this website if you wish to make changes to the application, as the provided documentation explains the framework in depth. For the other, smaller dependencies, documentation is available at the project's page at the [npm](https://www.npmjs.com/) website.

1) Install the [Expo](https://expo.io) command line tools on your computer.
2) Install [npm](https://www.npmjs.com/) and [Node.js](https://nodejs.org/en/) for your operating system.
3) Clone this repository and run `npm install` from the root directory of the repository.
4) Once `npm install` completes, run `exp publish` from the root directory. This may ask you to create an account or log into an existing Expo account. Follow the directions provided by `exp publish` to publish the application to the Expo marketplace. Once this is complete, you will be given a sharable link that users can use to access the application.
5) If you make any changes to the application, simply run `exp publish` a second time to update the application on the Expo marketplace.

Please note that there is a wealth of information on how to debug changes to the application available on the [Expo](https://expo.io) website. Refer to this website for any information on the publishing process or the development toolchain.

## Deployment Guide - Backend

The server files contain information such as API keys and database connection info. As such, they are not present in this repository, but you should have received a copy of the backend software along with this documentation.

1) Install Apache, MySQL, and PHP on your hosting service (if necessary). Information on how to install these tools is different depending on your operating system. Consult the projects' webpages for more information.
2) Upload the provided files to your hosting service.
3) Create a new database for the application using your SQL software of choice. The database should have at least one local user which has been given all of the permissions for that database. The username and password for this user will be used in future steps.
4) Edit the .env file to provide connection information for your database setup. This should be the information you created in the previous step.
5) Once the database has been configured, open a command line at the root directory of the backend.
6) Run `php artisan migrate`. This will populate the databases with the structure of the backend implementation. You MUST run this command in order for the backend to work properly. Do not attempt to use the backend without running this command first.

The backend implementation uses `composer` to manage its dependencies. If you wish to make changes to the backend implementation that require additional dependencies, visit the [composer](https://getcomposer.org/) project to learn more. The backend uses [Laravel Lumen](https://lumen.laravel.com/) as a framework.
