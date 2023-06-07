export interface DataSourse {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface DataApp {
    status: string;
    totalResults: number;
    articles: DataSourse[];
}
