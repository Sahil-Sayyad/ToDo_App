**Live Demo**: https://sahil-sayyad.github.io/TODO-App/
<h4 align="center">TODO App Example</h4>

![Settings Window](https://raw.github.com/Sahil-Sayyad/TODO-App/main/public/images/TODO_App.jpeg)

Table of Contents
-----------------

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [List of Packages](#list-of-packages)
- [Useful Tools and Resources](#useful-tools-and-resources)
- [Recommended Design Resources](#recommended-design-resources)
- [Recommended Node.js Libraries](#recommended-nodejs-libraries)
- [Recommended Client-side Libraries](#recommended-client-side-libraries)
- [Pro Tips](#pro-tips)
- [FAQ](#faq)
- [Cheatsheets](#cheatsheets)
    - [ES6](#-es6-cheatsheet)
    - [JavaScript Date](#-javascript-date-cheatsheet)
    - [Mongoose Cheatsheet](#mongoose-cheatsheet)
- [Deployment](#deployment)
- [License](#license)

Features
--------

- Alert notifications
- MVC Project Structure
- Node.js clusters support
- Bootstrap 5 + Extra Themes
- Create Task
- Delete Task
- Read Task

Prerequisites
-------------

- [MongoDB](https://www.mongodb.com/download-center/community)
- [Node.js 10+](http://nodejs.org)
- Command Line Tools
 - <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X:** [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9+**: `xcode-select --install`)
 - <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows:** [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs) OR [Visual Studio Code](https://code.visualstudio.com) + [Windows Subsystem for Linux - Ubuntu](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
 - <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu** / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Linux_Mint.png" height="17">&nbsp;**Linux Mint:** `sudo apt-get install build-essential`
 - <img src="http://i1-news.softpedia-static.com/images/extra/LINUX/small/slw218news1.png" height="17">&nbsp;**Fedora**: `sudo dnf groupinstall "Development Tools"`
 - <img src="https://en.opensuse.org/images/b/be/Logo-geeko_head.png" height="17">&nbsp;**OpenSUSE:** `sudo zypper install --type pattern devel_basis`

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/Sahil-Sayyad/TODO-App.git

# Install NPM dependencies
npm install

# Then simply start your app
npm start
```

Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **config**/mongoose.js             | DataBase Connecction.  |
| **controllers**/home.js            | Controller for home page (index).               |
| **controllers**/createTask.js      | Controller for Create Task With Fill Form.                                 |
| **controllers**/deleteTask.js      | Controller for Delete Task.                            |
| **models**/tasks.js                | Mongoose schema and model for Tasks.                          |
| **public**/                        | Static assets (fonts, css, js, img).                         |
| **public**/**js**/index.js           | Place your client-side JavaScript here.                      |
| **public**/**styesheets**/style.scss | Main stylesheet for your app.                                |
| **routes**/index.ejs                 | Home page Routes.                                          |
| **routes**/createTasks.ejs           | Create Task  Routes.                                          |
| **routes**/deleteTasks.ejs           | Delete Task Routes.                                          |
| **views**/index.ejs                  | Home page template.                                          |
| .gitignore                         | Folder and files ignored by git.                             |
| app.js                             | The main application file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.json                  | Contains exact versions of NPM dependencies in package.json. |

List of Packages
----------------

| Package                         | Description                                                             |
| ------------------------------- | ------------------------------------------------------------------------|
| express                         | Node.js web framework.                                                  |
| mongoose                        | Mongodb Connction  framework.                                                  |
| ejs                             | Template Engine Emdeded JavaScript.                                                  |

