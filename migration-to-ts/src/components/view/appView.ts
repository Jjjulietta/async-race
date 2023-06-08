import News from './news/news';
import Sources from './sources/sources';
// import { DataSourse } from './sources/typesSourse';
import { DataAppNews } from '../../types/index';

export class AppView {
    public news: News;

    public sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: DataAppNews): void {
        const values = data?.articles ? data?.articles : [];
        News.draw(values);
    }

    public drawSources(data: DataAppNews): void {
        const values = data?.sources ? data?.sources : [];
        Sources.draw(values);
    }
}

export default AppView;
