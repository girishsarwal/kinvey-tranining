const app = require("tns-core-modules/application");

const TasksViewModel = require("./tasks-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    const viewModel = new TasksViewModel();
    page.bindingContext = viewModel;

    viewModel.load();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
