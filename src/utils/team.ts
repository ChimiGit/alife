import { getCollection } from 'astro:content';

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  description?: string;
  location: string;
  image: string;
  category: string;
  slug: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  try {
    const team = await getCollection('team');
    const baseUrl = import.meta.env.BASE_URL || '';
    return team.map(member => ({
      ...member.data,
      image: `${baseUrl}${member.data.image.replace(/^\//, '')}`,
      slug: member.slug,
    }));
  } catch (error) {
    return [];
  }
}

export async function getTeamMemberBySlug(
  slug: string
): Promise<TeamMember | null> {
  try {
    const team = await getCollection('team');
    const member = team.find(memberItem => memberItem.slug === slug);

    if (!member) {
      return null;
    }

    const baseUrl = import.meta.env.BASE_URL || '';
    return {
      ...member.data,
      image: `${baseUrl}${member.data.image.replace(/^\//, '')}`,
      slug: member.slug,
    };
  } catch (error) {
    return null;
  }
}
