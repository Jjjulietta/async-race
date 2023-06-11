import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: '69e3536a6d1b43f28e620c088e33ff3e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
