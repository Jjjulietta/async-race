import { RequestQuest, Endpoint, UrlLinks, Callback } from './typesReq';

class Loader {
    public baseLink: string;

    public options: RequestQuest;

    constructor(baseLink: string, options: RequestQuest) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        endpoint: Endpoint,
        options: RequestQuest = {},
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        console.log(endpoint);
        console.log(options);
        if (options) {
            this.load('GET', endpoint, callback, options);
        }
    }

    public errorHandler(res: Response): Response {
        console.log(res);
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        console.log(res);
        return res;
    }

    public makeUrl(options: RequestQuest, endpoint: Endpoint): string {
        const urlOptions: Record<string, string> = { ...this.options, ...options };
        console.log(urlOptions);
        console.log(this.baseLink);
        let url = `${this.baseLink}${endpoint}?`;
        console.log(url);
        Object.keys(urlOptions).forEach((key) => {
            console.log(key);
            url += `${key}=${urlOptions[key]}`;
        });

        console.log(url);
        return url.slice(0, -1);
    }

    private load(method: string, endpoint: Endpoint, callback: Callback<JSON>, options: RequestQuest = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response): Promise<JSON> => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
