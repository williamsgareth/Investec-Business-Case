import { Server } from "./server/Server";
import { Routes } from "./routes/Routes";

// DataModeling
import { AddingData } from "./data-modeling/AddingData";
import { RelationshipTableModeling } from "./data-modeling/RelationshipTablesModeling";

// typeorm
import { Entity, getManager, getRepository, Connection } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import { FileParser } from './csv-converter/FileParser';
import { Converter } from 'csvtojson';

// classes instance
var AppRoutes = new Routes();
var TableModeling = new RelationshipTableModeling();


import { Profile } from './entities/Profile';
import { User } from './entities/User';
// server instance
var server = new Server(3000);

//Grant access to the resources to web browers
//specify what they can and can't do
server.app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        return res.status(200).json({});
    }
    next();
});

//routes
server.app.get("/api/limits", AppRoutes.getLimits);
server.app.get("/api/entity", AppRoutes.getEntity);
server.app.get("/api/relationship", AppRoutes.getRelationship);
server.app.get("/api/parent_entity", AppRoutes.getParentEntity);

server.app.get("/RelationshipModeling", TableModeling.PopulateParentEntity);

server.app.get("/importCSV", async (req: Request, res: Response, next: NextFunction) => {
  let addingData = new AddingData();

  let connection = server.connectDatabase;
    //addingData.LimitsConverter();
    //addingData.RelationshipsEntityConverter();
    // addingData.EntitiesConverter();
    // addingData.ParentEntityConverter();
    addingData.ChildEntityConverter(connection);
  

     res.send("Success");
});