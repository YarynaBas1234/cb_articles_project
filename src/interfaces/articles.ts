interface Launche {
	id: string
	provider: string
};

export interface Article {
	id: string
	title: string
	url: string
	imageUrl: string
	newsSite: string
	summary: string
	publishedAt: string
	updatedAt: string
	featured: boolean
	launches: Launche[]
	element?: boolean
};
