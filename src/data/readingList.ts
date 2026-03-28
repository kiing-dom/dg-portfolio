type ReadingItem = {
    title: string;
    author?: string;
    dateCompleted?: Date | null;
    link: string;
}

export const books: ReadingItem[] = [
    
];

export const articles: ReadingItem[] = [
    
];

export const papers: ReadingItem[] = [
    {
        title: "Segment Anything",
        author: "Meta AI Research",
        dateCompleted: new Date("2026-03-28"),
        link: "https://arxiv.org/pdf/2304.02643"
    },
];