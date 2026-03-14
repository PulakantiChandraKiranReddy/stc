import React, { useState, useCallback } from 'react';

const blogPosts = [
  {
    id: 'strong-foundation',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    title: 'The 5 Key Factors for a Strong Foundation',
    excerpt: 'Learn what it takes to pour a foundation that lasts a lifetime, from soil preparation to the perfect concrete mix.',
    content: `
Building a strong foundation is the most critical step in any construction project. Here are the five key factors:

1. **Soil Preparation:** Proper soil testing and compaction ensure the ground can support the structure.
2. **Right Concrete Mix:** Choosing the correct grade and mix for your project guarantees strength and durability.
3. **Reinforcement:** Using steel bars or mesh prevents cracks and adds tensile strength.
4. **Curing:** Keeping the concrete moist for at least 7 days prevents premature drying and cracking.
5. **Professional Supervision:** Expert oversight ensures every step is executed to the highest standard.

At STC, we guide you through every stage, ensuring your foundation stands the test of time.`,
  },
  {
    id: 'sustainable-concrete',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    title: 'Sustainable Concrete: Building a Greener Future',
    excerpt: 'Discover how our eco-friendly practices are changing the construction industry for the better.',
    content: `
Sustainability is at the heart of modern construction. At STC, we:

- Use recycled aggregates and supplementary cementitious materials
- Optimize mix designs to reduce cement usage
- Implement water recycling and dust control at our plants
- Promote energy-efficient batching and delivery

By choosing STC, you're not just building for today—you're investing in a greener tomorrow.`,
  },
  {
    id: 'concrete-grades',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    title: 'Understanding Concrete Grades: A Guide for Builders',
    excerpt: 'A deep dive into different concrete grades and how to choose the right one for your specific project needs.',
    content: `
Concrete grades determine the strength and application of your mix. Here's a quick guide:

- **M20:** Standard for residential slabs and footings
- **M25:** Used for driveways, beams, and columns
- **M30+**: For heavy-duty industrial and infrastructure projects

Our experts help you select the perfect grade, ensuring safety, performance, and cost-effectiveness for every build.`,
  },
];

/**
 * Converts simple markdown (bold, lists, newlines) to safe HTML.
 * For production with user-generated content, use a library (e.g. marked + DOMPurify).
 */
function markdownToHtml(md) {
  if (!md || typeof md !== 'string') return '';
  const escaped = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  const withBold = escaped.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  const lines = withBold.trim().split(/\n/);
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const numBullet = line.match(/^(\d+)\.\s+(.*)$/);
    const dashBullet = line.match(/^-\s+(.*)$/);
    if (numBullet) {
      const list = ['<ol class="list-decimal list-inside space-y-1 my-3">'];
      list.push('<li>' + numBullet[2] + '</li>');
      i++;
      while (i < lines.length && lines[i].match(/^\d+\.\s+/)) {
        const m = lines[i].match(/^\d+\.\s+(.*)$/);
        list.push('<li>' + m[1] + '</li>');
        i++;
      }
      list.push('</ol>');
      out.push(list.join(''));
      continue;
    }
    if (dashBullet) {
      const list = ['<ul class="list-disc list-inside space-y-1 my-3">'];
      list.push('<li>' + dashBullet[1] + '</li>');
      i++;
      while (i < lines.length && lines[i].match(/^-\s+/)) {
        const m = lines[i].match(/^-\s+(.*)$/);
        list.push('<li>' + m[1] + '</li>');
        i++;
      }
      list.push('</ul>');
      out.push(list.join(''));
      continue;
    }
    if (line.trim()) out.push('<p class="my-2">' + line + '</p>');
    else out.push('<br/>');
    i++;
  }
  return out.join('');
}

const Blog = () => {
  const [openId, setOpenId] = useState(null);

  const togglePost = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      id="blog"
      className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white"
      aria-labelledby="blog-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 id="blog-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 sm:mb-4 tracking-tight">
            From our Blog
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 font-light">
            Insights & News
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {blogPosts.map((post) => {
            const isOpen = openId === post.id;
            return (
              <article
                key={post.id}
                className={`glass rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col shadow-lg transition-all duration-300 hover:shadow-xl ${
                  isOpen ? 'ring-2 ring-orange-400 ring-offset-2' : ''
                }`}
              >
                <div className="overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={`Illustration for article: ${post.title}`}
                    className="w-full h-48 sm:h-52 md:h-56 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl sm:text-2xl text-slate-900 mb-2 sm:mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 font-light text-base sm:text-lg flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button
                    type="button"
                    onClick={() => togglePost(post.id)}
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? `blog-body-${post.id}` : undefined}
                    id={`blog-toggle-${post.id}`}
                    className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 rounded-lg py-1 pr-1 transition-colors"
                  >
                    {isOpen ? 'Show less' : 'Read full article'}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>
                {isOpen && (
                  <div
                    id={`blog-body-${post.id}`}
                    role="region"
                    aria-labelledby={`blog-toggle-${post.id}`}
                    className="border-t border-slate-200/60 bg-slate-50/80 px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 pt-4"
                  >
                    <div
                      className="text-slate-700 text-base sm:text-lg leading-relaxed prose prose-slate max-w-none prose-p:my-2 prose-strong:text-slate-800 prose-ul:my-3 prose-ol:my-3"
                      dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
