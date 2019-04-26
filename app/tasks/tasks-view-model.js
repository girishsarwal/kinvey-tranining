/* eslint-disable no-undef */
/* eslint-disable no-alert */
const observableModule = require("tns-core-modules/data/observable");
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const Kinvey = require("kinvey-nativescript-sdk").Kinvey;
const Task = require("./task-model");

function TasksViewModel(userInfo) {
    const viewModel = observableModule.fromObject({
        tasks: new ObservableArray([]),
        isLoading: false,
        dataStore: null,

        load: function () {
            this.set("isLoading", true);
            this.dataStore = Kinvey.DataStore.collection("tasks", Kinvey.DataStoreType.Sync);

            this.dataStore.find()
                .subscribe((entities) => {
                    console.log(`Retrieved : ${entities.length}`);
                    this._allTasks = [];
                    entities.forEach((tasksData) => {
                        tasksData.id = tasksData._id;
                        const task = new Task(tasksData);
                        this._allTasks.push(task);
                    });
                    this.set("tasks", new ObservableArray(this._allTasks));
                    this.set("isLoading", false);
               }, (error) => {
                   console.log(error);
                   this.set("isLoading", false);

               }, () => {
                   console.log("pulled tasks");
               });
        },
        refreshMe: function () {
            this.set("isLoading", true);
            this.dataStore.find()
                .subscribe((entities) => {
                    console.log(`Retrieved : ${entities.length}`);
                    this._allTasks = [];
                    entities.forEach((tasksData) => {
                        tasksData.id = tasksData._id;
                        const task = new Task(tasksData);
                        this._allTasks.push(task);
                    });
                    this.set("tasks", new ObservableArray(this._allTasks));
                    this.set("isLoading", false);
               }, (error) => {
                   console.log(error);
                   this.set("isLoading", false);

               }, () => {
                   console.log("pulled tasks");
               });
        },
        pullMe: function () {
            this.dataStore.pull()
            .then((numOfRecords) => {
               console.log(`Pulled down : ${numOfRecords}`);
           })
           .catch((error) => {
               console.log(`Error: ${error}`);
           });
        },
        pushMe: function () {
            this.dataStore.push()
            .then((result) => {
                console.log(`Push Success : ${result}`);
            })
            .catch((error) => {
                console.log(`Push Failed : ${error}`);
            });
        },
        syncMe: function () {
            this.dataStore.sync()
            .then((syncLog) => {
               console.dir(syncLog);
           })
           .catch((error) => {
               console.log(`Sync Failed: ${error}`);
           });
        }
    });

    return viewModel;
}

module.exports = TasksViewModel;

