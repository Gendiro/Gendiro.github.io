import type { comic, compactImageData } from '$lib/types';

export async function load() {
	const myEmail = 'r.pogrebnyak@innopolis.university';
	const URLParams = new URLSearchParams();
	URLParams.set('email', myEmail);

	const comicIdRequestAPI = 'https://fwd.innopolis.app/api/hw2';
	const comicIdRequestURL = `${comicIdRequestAPI}?${URLParams}`;

	const comicIdResponse = await fetch(comicIdRequestURL);
	const comicId = (await comicIdResponse.json()) as number;

	const comicRequestAPI = 'https://fwd.innopolis.university/api/comic?id=';
	const comicResponse = await fetch(comicRequestAPI + comicId);
	const comic = (await comicResponse.json()) as comic;

	const compactImageData = {
		title: comic.safe_title,
		src: comic.img,
		alt: comic.alt,
		date: new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day))
	} as compactImageData;

	return {
		imageData: compactImageData
	};
}
