export default interface Comment {
	id: number;
	body: string;
	postId: number; // post id is 5
	user: {
		id: number;
		username: string;
	};
}
