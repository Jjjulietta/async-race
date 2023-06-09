import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '69e3536a6d1b43f28e620c088e33ff3e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
