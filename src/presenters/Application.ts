class AppViewModel {
    name: string
    notify: boolean
    account_id: string
    account_name: string
}

interface IAppPresenter {
    view: AppViewModel
    onMounted(): any
    onDestroy(): any
    getNotify(): boolean
}

export default class AppPresenter implements IAppPresenter {

    public view: AppViewModel

    constructor() {
        this.view = new AppViewModel()
        this.view.name = "mock name"
        this.view.notify = false
        this.view.account_name = "mock account name"
        this.view.account_id = "mock account id"
    }
    onMounted() {
        throw new Error("Method not implemented.")
    }
    onDestroy() {
        throw new Error("Method not implemented.")
    }
    getNotify(): boolean {
        throw new Error("Method not implemented.")
    }
}
