import React, { useState } from 'react';

const blogPosts = [
  {
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
      
      At STC, we guide you through every stage, ensuring your foundation stands the test of time.`
  },
  {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    title: 'Sustainable Concrete: Building a Greener Future',
    excerpt: 'Discover how our eco-friendly practices are changing the construction industry for the better.',
    content: `
      Sustainability is at the heart of modern construction. At STC, we:
      
      - Use recycled aggregates and supplementary cementitious materials
      - Optimize mix designs to reduce cement usage
      - Implement water recycling and dust control at our plants
      - Promote energy-efficient batching and delivery
      
      By choosing STC, you’re not just building for today—you’re investing in a greener tomorrow.`
  },
  {
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80',
    title: 'Understanding Concrete Grades: A Guide for Builders',
    excerpt: 'A deep dive into different concrete grades and how to choose the right one for your specific project needs.',
    content: `
      Concrete grades determine the strength and application of your mix. Here’s a quick guide:
      
      - **M20:** Standard for residential slabs and footings
      - **M25:** Used for driveways, beams, and columns
      - **M30+**: For heavy-duty industrial and infrastructure projects
      
      Our experts help you select the perfect grade, ensuring safety, performance, and cost-effectiveness for every build.`
  }
];

function markdownToHtml(md) {
  // Simple markdown to HTML for bold and lists (for demo, not production)
  return md
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n- /g, '<br/><ul><li>')
    .replace(/\n\d+\. /g, '<br/><ol><li>')
    .replace(/\n/g, '<br/>')
    .replace(/<li>(.*?)<br\/>/g, '<li>$1</li>')
    .replace(/<ul><li>/g, '<ul><li>')
    .replace(/<ol><li>/g, '<ol><li>')
    .replace(/<\/li><\/ul>/g, '</li></ul>')
    .replace(/<\/li><\/ol>/g, '</li></ol>');
}

const Blog = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const togglePost = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="blog" className="py-28 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight animate-fade-in-up">From our Blog</h2>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-600 animate-fade-in-up delay-200">Insights & News</h3>
        </div>
        <div id="blog-posts-container" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <div key={index} className="glass rounded-3xl overflow-hidden flex flex-col group shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
              <div className="overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="font-bold text-2xl text-slate-900 mb-3">{post.title}</h4>
                <p className="text-lg text-slate-600 font-light flex-grow">{post.excerpt}</p>
                <button
                  onClick={() => togglePost(index)}
                  className="mt-6 inline-flex items-center text-orange-500 font-semibold group-hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`blog-content-${index}`}
                >
                  {openIndex === index ? 'Hide Full Article' : 'Read Full Article'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform group-hover:translate-x-1"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
                <div
                  id={`blog-content-${index}`}
                  className={`transition-all duration-500 ease-in-out overflow-auto max-h-[600px] mt-6 text-left text-slate-700 text-base leading-relaxed bg-white/80 rounded-xl p-6 shadow-inner animate-fade-in-up prose prose-slate max-w-none ${openIndex === index ? 'block' : 'hidden'}`}
                  dangerouslySetInnerHTML={openIndex === index ? { __html: markdownToHtml(post.content) } : undefined}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
