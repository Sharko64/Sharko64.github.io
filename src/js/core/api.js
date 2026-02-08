export async function fakeFetch() {
return Promise.resolve([
{ name: "Project Alpha" },
{ name: "Project Beta" }
]);
}