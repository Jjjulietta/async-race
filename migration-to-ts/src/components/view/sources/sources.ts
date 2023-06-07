import './sources.css';
import { DataSourse } from '../../../types/index';

class Sources {
    public static draw(data: DataSourse[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
        if (sourceItemTemp instanceof HTMLTemplateElement) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true);
                if (sourceClone instanceof HTMLElement) {
                    const sourceName: HTMLDivElement | null = sourceClone.querySelector('.source__item-name');
                    if (sourceName) sourceName.textContent = item.name;
                    const sourceItem = sourceClone.querySelector('.source__item');
                    if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);
                }
                fragment.append(sourceClone);
            });
        }
        const sourcesItem = document.querySelector('.sources');
        if (sourcesItem) sourcesItem.append(fragment);
    }
}

export default Sources;
