import express from "express";
// import mongoose from "mongoose";
 import { BASE_PATH } from "./config/config";

class App {

  public express  = express();
  public basePath = BASE_PATH || ""
  constructor(){
    this.boot();
  }
 
  private boot(){
    this.registerMiddleWares();
    this.mountRoots();
    this.initializeDB();
    this.handleUncaughtErrorEvents();
  }
  private mountRoots(){}
  private registerMiddleWares(){}
  private initializeDB(){}
  private handleUncaughtErrorEvents(){}
}


export default new App().express;