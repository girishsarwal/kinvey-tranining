const observableModule = require("tns-core-modules/data/observable");

const SelectedPageService = require("../../shared/selected-page-service");

function AccountDetailViewModel(accountModel) {
    SelectedPageService.getInstance().updateSelectedPage("AccountDetail");

    const viewModel = observableModule.fromObject({
        account: accountModel
    });

    return viewModel;
}

module.exports = AccountDetailViewModel;
