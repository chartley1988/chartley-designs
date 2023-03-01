
async function getPostIDList() {
	let PROJECT_ID = 'txzsiuwe';
	let DATASET = 'production';
	let QUERY = encodeURIComponent(
		`*[_type == "blog-post"]{post_id}`
	);
	console.log(QUERY);

	let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

	const post_data = await fetch(URL)
		.then((response) => response.json())
		.then(({ result }) => {
			return result;
		})
		.catch((error) => {
			console.error;
			return null;
		});

	return post_data;
}

export default getPostIDList;
