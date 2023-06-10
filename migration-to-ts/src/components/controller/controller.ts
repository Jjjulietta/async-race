import AppLoader from './appLoader';
import { Endpoint, Callback } from './typesReq';

class AppController extends AppLoader {
    public getSources<T>(callback: Callback<T>): void {
        super.getResp(Endpoint.endSours, undefined, callback);
    }

    public getNews<T>(e: Event, callback: Callback<T>): void {
        let { target } = e;
        console.log(target instanceof HTMLElement);
        if (target && target instanceof HTMLElement) {
            const newsContainer = e.currentTarget;
            if (newsContainer) {
                while (target && target instanceof HTMLElement && target !== newsContainer) {
                    if (target.classList.contains('source__item')) {
                        const sourceId = target.getAttribute('data-source-id');
                        if (newsContainer instanceof HTMLElement) {
                            if (newsContainer.getAttribute('data-source') !== sourceId) {
                                if (sourceId) {
                                    newsContainer.setAttribute('data-source', sourceId);
                                    super.getResp(Endpoint.endEvery, { sources: sourceId }, callback);
                                }
                            }
                        }
                        return;
                    }
                    target = target.parentNode;
                }
            }
        }
    }
}

export default AppController;
