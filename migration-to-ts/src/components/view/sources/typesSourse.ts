type DataSourse = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};
type DataApp = {
    status: string;
    totalResults: number;
    articles: DataSourse[];
};

type SourseItem = HTMLSpanElement | null;

export { DataSourse, SourseItem };
export { DataApp };
