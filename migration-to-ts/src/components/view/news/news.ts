import './news.css';
import { ParamType, ParamLi } from './types.js';
import { DataNews } from '../../../types/index';

class News {
    public static draw(data: DataNews[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
        if (newsItemTemp instanceof HTMLTemplateElement) {
            news.forEach((item, idx: number) => {
                const newsClone = newsItemTemp.content.cloneNode(true);
                if (idx % 2 && newsClone instanceof HTMLElement) {
                    const newsItem: ParamType = newsClone?.querySelector('.news__item');
                    if (newsItem) newsItem.classList.add('alt');
                }
                if (newsClone instanceof HTMLElement) {
                    const newsMetaPhoto: ParamType = newsClone?.querySelector('.news__meta-photo');
                    if (newsMetaPhoto)
                        newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }
                if (newsClone instanceof HTMLElement) {
                    const newsMetaAuthor: ParamLi = newsClone?.querySelector('.news__meta-author');
                    if (newsMetaAuthor) newsMetaAuthor.textContent = item.author || item.source.name;
                }
                if (newsClone instanceof HTMLElement) {
                    const newsMetaDate: ParamLi = newsClone?.querySelector('.news__meta-date');
                    if (newsMetaDate)
                        newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }
                if (newsClone instanceof HTMLElement) {
                    const newsTitle = newsClone?.querySelector('.news__description-title');
                    if (newsTitle) newsTitle.textContent = item.title;
                    const newsSourse = newsClone?.querySelector('.news__description-source');
                    if (newsSourse) newsSourse.textContent = item.source.name;
                    const newsContent = newsClone.querySelector('.news__description-content');
                    if (newsContent) newsContent.textContent = item.description;
                    const newsMore = newsClone.querySelector('.news__read-more a');
                    if (newsMore) newsMore.setAttribute('href', item.url);

                    fragment.append(newsClone);
                }
            });
        }

        const newNews = document.querySelector('.news');
        if (newNews) {
            newNews.innerHTML = '';
            newNews.appendChild(fragment);
        }
        // document.querySelector('.news').appendChild(fragment);
    }
}

export default News;
