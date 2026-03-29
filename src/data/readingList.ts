type ReadingItem = {
    title: string;
    author?: string;
    dateCompleted?: Date | null;
    link: string;
}

export const books: ReadingItem[] = [
    {
        title: "Grokking Algorithms",
        author: "Aditya Y. Bhargava",
        link: "https://www.adit.io/",
        dateCompleted: new Date("2026-05-15")
    },
    {
        title: "System Design Interview",
        author: "Alex Xu, Sahn Lam",
        link: "https://www.amazon.co.uk/System-Design-Interview-Insiders-Guide/dp/1736049119/ref=pd_lpo_d_sccl_1/520-5890756-2958641?pd_rd_w=4mXRp&content-id=amzn1.sym.bb13d3fc-af40-4fff-a822-e0e4c415da96&pf_rd_p=bb13d3fc-af40-4fff-a822-e0e4c415da96&pf_rd_r=QHMHVH5Q59WVJV95GZD2&pd_rd_wg=ICsog&pd_rd_r=4d1a0f73-de42-43a9-8b08-739a8a719294&pd_rd_i=1736049119&psc=1"
    }
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