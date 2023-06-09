type RequestQuest = {
    sources?: string;
    apiKey?: string;
};

export type UrlLinks = Pick<RequestQuest, 'apiKey'>;

type GetSoursesCall<T> = (data: T) => void;
export type Callback<T> = (data?: T) => void;

type Response = {
    body?: object;
    bodyUsed: boolean;
    ok: boolean;
    redirected: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
};

enum Endpoint {
    endSours = 'sources',
    endEvery = 'everything',
}

export { RequestQuest, Response, Endpoint };
export { GetSoursesCall };
