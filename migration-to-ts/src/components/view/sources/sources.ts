import './sources.css';
import { DataSourse } from '../../../types/index';

class Sources {
    public draw(data: DataSourse[]): void {
        console.log(data);
        const fragment = document.createDocumentFragment();
        const sources = document.querySelector('.sources');
        console.log(sources);
        if (sources) sources.textContent = '';
        console.log(sources);
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
        console.log(sourceItemTemp);
        const input: HTMLInputElement | null = document.querySelector('input');
        if (sourceItemTemp instanceof HTMLTemplateElement) {
            if (!input || !input.checked) {
                console.log(input?.checked);
                const categoryContainer = document.querySelector('.category__container');
                if (categoryContainer) {
                    categoryContainer.textContent = '';
                }
                data.forEach((item) => {
                    const sourceClone = sourceItemTemp.content.cloneNode(true);
                    if (sourceClone instanceof DocumentFragment) {
                        const sourceName: HTMLDivElement | null = sourceClone.querySelector('.source__item-name');

                        if (sourceName) sourceName.textContent = item.name;
                        const sourceItem = sourceClone.querySelector('.source__item');
                        if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);
                    }
                    fragment.append(sourceClone);
                });
            }
            if (input && input.checked) {
                console.log(input.checked);
                const set = new Set();
                console.log(set);
                data.forEach((item) => set.add(item.category));
                // const checkboxContainer = document.querySelector('.checkbox__news');
                const categoryContainer = document.querySelector('.category__container');
                if (categoryContainer) {
                    categoryContainer.textContent = '';
                    set.forEach((item) => {
                        const div = document.createElement('div');
                        div.innerHTML = `${item}`;
                        div.classList.add('category__item');
                        div.setAttribute('data-category', `${item}`);
                        categoryContainer.append(div);
                    });
                }
                data.forEach((item) => {
                    const sourceClone = sourceItemTemp.content.cloneNode(true);
                    if (sourceClone instanceof DocumentFragment) {
                        const sourceName: HTMLDivElement | null = sourceClone.querySelector('.source__item-name');
                        if (sourceName) sourceName.textContent = item.name;
                        const sourceItem = sourceClone.querySelector('.source__item');
                        if (sourceItem) {
                            sourceItem.setAttribute('data-source-category', item.category);
                            sourceItem.setAttribute('data-source-id', item.id);
                        }
                    }
                    fragment.append(sourceClone);
                });
            }
        }
        const sourcesItem = document.querySelector('.sources');
        if (sourcesItem) sourcesItem.append(fragment);
    }
}

export default Sources;
