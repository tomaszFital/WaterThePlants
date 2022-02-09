# WaterThePlants

## Development server

To run first time in dev mode use:
] git clone (...)
] npm install
] firebase init emulators
] firebase emulators:start
] ng serve

To 2nd, 3rd, etc time:
] firebase init emulators
] ng serve

## Deploy on firebase

] ng build --prod
] cd ./dist
] firebase deploy

## Simple structure of project

Folders:
] common - used for common used components
] basic - basic elements of app like navbar
] add-plant / dashboard - side tabs
