import { notFound } from 'next/navigation';
import type { PortableTextBlock } from 'next-sanity';
import SingletonPage from '@/components/templates/SingletonPage';
import { sanityFetch } from '@/lib/sanity/client/live';

const contactPageQuery = `*[_type == "contactPage"][0]{ title, content, email }`;

export default async function ContactPage() {
  const { data: page } = await sanityFetch({
    query: contactPageQuery,
  });

  if (!page) {
    notFound();
  }

  return (
    <SingletonPage 
      title={page.title} 
      content={page.content as PortableTextBlock[]}
    >
      {page.email && (
        <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Email Us</h3>
          <a 
            href={`mailto:${page.email}`}
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            {page.email}
          </a>
        </div>
      )}
    </SingletonPage>
  );
}

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us.',
};
