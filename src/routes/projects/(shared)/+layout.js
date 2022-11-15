export async function load({ fetch }) {
    const res = await fetch(
        'https://forbgkids-cms.herokuapp.com/api/projects?populate=&fields=title&fields=description'
    );
    if (res.status === 404) {
        const error = new Error(`The project was not found`);
        return { status: 404, error };
    } else {
        const projects = await res.json();
        return { projects: projects.data };
    }
}
