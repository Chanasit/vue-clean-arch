import { IAppService } from '../services/Application'

class AppViewModel {
    name: string
    notify: boolean
    account_id: string
    account_name: string
}

export interface IAppPresenter {
    view: AppViewModel
    onMounted(): any
    onUnmounted(): any
    getApplicationNotify(): void
}

export class AppPresenter implements IAppPresenter {

    public view: AppViewModel

    constructor(
			private appService: IAppService
		) {
        this.view = new AppViewModel()
        this.view.name = "mock name"
        this.view.notify = false
        this.view.account_name = "mock account name"
        this.view.account_id = "mock account id"
    }
    onMounted() {
        throw new Error("Method not implemented.")
    }
    onUnmounted() {
        throw new Error("Method not implemented.")
    }
    getApplicationNotify(): void {
				this.appService.getApplicationNotify()
    }
}
