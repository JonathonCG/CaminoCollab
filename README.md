# Description
    This is a permitting web app developed by Clayton County DoIT for Clayton County CommDev
    The purpose of the application is to help citizens and business owners figure what documents and costs are associated with all the different permits the county has.
    The application consists of a database (port 5432), a node api server (port 3001), and a node-react web page server (port 3000) as well as Docker config files so they can be containerized.

    
# To get started
Local Dev server, no Docker
    Start Server:
        cd elcamino/server
        npm i
        npm start
        cd ..
        cd ..
    Start Client:
        cd elcamino/client
        npm i
        npm start

Dev Server, with Docker:
    sudo docker compose up

*if it's configured correctly with Dockerfiles in '/elcamino/server'  '/elcamino/client', this should work
