Account login CRM:
username: admin@gmail.com
password: Abc@123

# Guide setup to run local:

Require tools:
1. Node version: 18.19.0
2. NPM version: 10.2.3

Note: If you haven't installed Nodejs please install NVM at:
#
    https://github.com/coreybutler/nvm-windows/releases

### And use below commands to install and use Nodejs with version required:
    nvm install 18.19
#
    nvm use 18.19

## To run CRM app at your local. The simple way is:
- With Windows:
    Please click option <b>Open Git bash here</b> at root folder of CRM app and execute command:
    #
    ```
        sh script.sh
    ```
- With MacOS or Linux/Ubuntu:
    Please open terminal at root folder of CRM app and execute command:
    #
    ```
        sh script.sh
    ```
#

Sometime, your machine cant run above command. Maybe it's related to file permissions

Dont worry, please run step by step with next guide:

### Please run this command to install dependences and devDependences:
    npm install --progress=false

#### Note: flag --progress with value 'false' to hide progress bar during installation

### Create file .env and copy all data from .env.backup to .env

### To run app at local with dev environment, please run command:
    npm run dev

### Please waiting some minutes and access below URL on your browser
http://localhost:3000

### To access into CRM app. 

🌹💟🌹💟🌹💟🌹💟🌹💟🌹💟🌹💟🌹

> [!NOTE]
- [x] #1
- [x] #5
