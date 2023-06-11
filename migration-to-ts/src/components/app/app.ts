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
        const news = document.querySelector('.news');
        const input = document.querySelector('input');
        const categoryContainer = document.querySelector('.category__container');
        const iconMenu = document.querySelector('.icon');
        if (iconMenu && sourcesItem) {
            iconMenu.addEventListener('click', () => {
                const widthDoc = document.documentElement.clientWidth;
                if (widthDoc <= 640 && widthDoc > 510) {
                    sourcesItem.classList.toggle('invisible');
                }
                if (widthDoc <= 510) {
                    sourcesItem.classList.remove('invisible');
                    sourcesItem.classList.toggle('opened');
                }
            });
        }
        console.log(input);
        console.log(sourcesItem);
        console.log(categoryContainer);
        if (categoryContainer) {
            categoryContainer.addEventListener('click', (e) => {
                const { target } = e;
                if (target && target instanceof HTMLDivElement && target.classList.contains('category__item')) {
                    const category = target.getAttribute('data-category');
                    const categoryName = document.querySelectorAll(`div[data-category]`);
                    const nameCategory = document.querySelectorAll(`div[data-category = ${category}]`);
                    const sourceItems = document.querySelectorAll(`div[data-source-category]`);
                    const itemsCategory = document.querySelectorAll(`div[data-source-category = ${category}]`);
                    console.log(sourceItems);
                    console.log(itemsCategory);
                    console.log(categoryName);
                    console.log(nameCategory);
                    if (sourceItems && itemsCategory && categoryName && nameCategory) {
                        categoryName.forEach((item) => item.classList.add('display__none'));
                        sourceItems.forEach((item) => item.classList.add('display__none'));
                        nameCategory.forEach((item) => item.classList.remove('display__none'));
                        itemsCategory.forEach((item) => item.classList.remove('display__none'));
                    }
                }
            });
        }
        if (input) {
            input.addEventListener('input', () => {
                console.log(input);
                this.controller.getSources((data?: DataAppNews) => {
                    if (data) {
                        this.view.drawSources(data);
                    }
                });
            });
        }
        if (sourcesItem) {
            sourcesItem.addEventListener('click', (e) =>
                this.controller.getNews(e, (data?: DataAppNews) => {
                    if (data) {
                        console.log(data);
                        sourcesItem.classList.add('column');
                        const widthDoc = document.documentElement.clientWidth;
                        if (widthDoc <= 640) {
                            sourcesItem.classList.add('invisible');
                        }
                        if (news) news.classList.add('news__column');
                        // sourcesItem.classList.add('column');
                        this.view.drawNews(data);
                    }
                })
            );
            this.controller.getSources((data?: DataAppNews) => {
                console.log(data);
                if (data) {
                    this.view.drawSources(data);
                }
            });
        }
    }
}

export default App;
