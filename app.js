const express = require("express");
const app = express();

const { Client } = require("pg");

const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const dbClient = new Client({
  user: "gc",
  host: "155.155.4.228",
  database: "postgres",
  password: "gcsc8932",
  port: 5432,
});

dbClient.connect();

const stream = fs.createReadStream("./ais_data/ecomarine_ais_202311.csv");

console.log(stream);

/*
const parser = parse({
  delimiter: ",",
  from_line: 2,
});
let cont = 0;

let tsqls = ` INSERT INTO ais_data (vesselId, mmsi, imoNumber, shipName, callSign, shipType, shipTypeCode, shipClass, dimBow, dimStern, dimPort, dimStbd, length, width, 
                flagCountry, flagCode, source, departure, destination, eta, deptcode, destcode, draught, longitude, latitude, sog, cog, rot, heading,
                navStatusCode, navStatus, posUtc, geom, insertdt)
             VALUES `;

let sqls = tsqls;

async function readData() {
  await stream.pipe(
    parser.on("data", (row) => {
      cont++;
      //console.log(cont, row);
      let rows = `('${row[0]}', '${row[1]}', '${row[2]}', '${row[3]}', '${
        row[4]
      }', '${row[5]}', '${row[6]}', '${row[7]}', ${Number(row[8])}, ${Number(
        row[9]
      )}, ${Number(row[10])}, ${Number(row[11])}, ${Number(row[12])}, ${Number(
        row[13]
      )},
                    '${row[14]}', '${row[15]}', '${row[16]}', '${row[17]}', '${
        row[18]
      }', '${row[19]}', '${row[20]}', '${row[21]}', ${Number(
        row[22]
      )}, ${Number(row[23])}, ${Number(row[24])}, ${Number(row[25])}, ${Number(
        row[26]
      )}, ${Number(row[27])}, ${Number(row[28])},
                    '${row[29]}', '${row[30]}', '${row[31]}', point('${
        row[23]
      }', '${row[24]}')::geometry, now() ),`;
      sqls += rows;

      if (cont == 1000) {
        sqls = sqls.substring(0, sqls.length - 1);
        sqls = sqls + ";";
        //console.log(sqls);
        dbClient.query(sqls, (error, result) => {
          if (result) {
            //console.log(`Changed Row Count ${result.rowCount}, ${tCount}`);
            //res.sendStatus(200);
          } else {
            console.log(error);
          }
        });
        cont = 0;
        sqls = tsqls;
      }
    })
  );
}

readData();
*/
/*dbClient.query(
  `INSERT INTO ais_data (vesselId, mmsi, imoNumber, shipName, callSign, shipType, shipTypeCode, shipClass, dimBow, dimStern, dimPort, dimStbd, length, width, 
                flagCountry, flagCode, source, departure, destination, eta, deptcode, destcode, draught, longitude, latitude, sog, cog, rot, heading,
                navStatusCode, navStatus, posUtc, geom, insertdt)
     VALUES ( );`,
  (error, result) => {
    if (result) {
      console.log(`Changed Row Count ${result.rowCount}`);
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  }
);*/
