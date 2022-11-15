export async function load({ fetch, params }) {
    const res = await fetch(
        `https://forbgkids-cms.herokuapp.com/api/projects/${params.projectId}?populate=*`
    );
    if (res.status === 404) {
        const error = new Error(`The project was not found`);
        return { status: 404, error };
    } else {
        const project = await res.json();
        return { project: project.data };
    }
}
