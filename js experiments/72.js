async function getrandompost() {
    try {
        const id = Math.floor(Math.random() * 100) + 1;
        const api = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!api.ok) {
            throw new Error(`HTTP server error, status: ${api.status}`);
        }
        const post = await api.json();
        console.log("Title", api.title);
        console.log("Body:", api.body);
    } catch (err) {
        console.error("Failed to fetch post", err.message);
    }
}