import { browser } from '$app/environment';
// ...but if the client-side router is already loaded
// (i.e. we came here from elsewhere in the app), use it
export const csr = browser;
