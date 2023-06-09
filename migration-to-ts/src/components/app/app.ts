import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { DataAppNews } from '../../types/index';

class App {
    public controller: AppController;

    public view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesItem = document.querySelector('.sources');
        if (sourcesItem) {
            sourcesItem.addEventListener('click', (e) =>
                this.controller.getNews(e, (data?: DataAppNews) => {
                    if (data) {
                        this.view.drawNews(data);
                    }
                })
            );
            this.controller.getSources((data?: DataAppNews) => {
                if (data) {
                    this.view.drawSources(data);
                }
            });
        }
    }
}

export default App;
