export interface DataSourse {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

/* export interface DataAppSource {
    status: string;
    sources: DataSourse[];
} */

export interface DataAppNews {
    status: string;
    totalResults?: number;
    articles?: DataNews[];
    sources?: DataSourse[];
}

type Sourse = {
    [id: string]: string;
};

/* export interface DataNews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Sourse;
    title: string;
    url: string;
    urlToImage: string;
} */
export interface DataNews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Sourse;
    title: string;
    url: string;
    urlToImage: string;
}
