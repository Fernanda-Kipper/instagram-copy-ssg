export type Post = {
    id: number;
    images: string[];
    title: string;
    description: string,
    likes: {
        first: string,
        images: string[]
    }
    author: {
        profilePic: string,
        name: string
    };
}