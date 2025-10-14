import { g as getCollection } from './_astro_content_DaMKlswk.mjs';

async function getAllJobs() {
  try {
    const jobs = await getCollection("jobs");
    return jobs.map((job) => ({
      ...job.data,
      content: job.body,
      slug: job.slug
    }));
  } catch (error) {
    return [];
  }
}

export { getAllJobs as g };
