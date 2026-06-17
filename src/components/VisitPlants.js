import React from "react";

const VisitPlants = () => {
return ( <section
   id="plants"
   className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50"
 > <div className="container mx-auto px-4 sm:px-8">

```
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
        Visit Our Plants
      </h2>

      <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
        Experience our state-of-the-art Ready Mix Concrete production
        facilities firsthand. We welcome builders, contractors,
        developers, and project owners to visit our plants and
        understand our commitment to quality and reliability.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Adibatla Plant */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">

        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900">
            Adibatla Plant
          </h3>

          <p className="mt-3 text-slate-600">
            Serving Adibatla and surrounding development zones with
            premium-quality ready mix concrete solutions.
          </p>

          <a
            href="https://maps.app.goo.gl/ZQzonPhbYCpjiJ7k9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-orange-500 font-semibold hover:text-orange-600"
          >
            Open in Google Maps →
          </a>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.2641613413753!2d78.5541803!3d17.2544503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba30000c05745%3A0x591fd1b54bd4a548!2sSai%20Tirumala%20concrete!5e0!3m2!1sen!2sin!4v1781675993491!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Adibatla Plant"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Kandukur Plant */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">

        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900">
            Kandukur Plant
          </h3>

          <p className="mt-3 text-slate-600">
            Strategically located to ensure efficient delivery and
            uninterrupted concrete supply for projects of all sizes.
          </p>

          <a
            href="https://maps.app.goo.gl/KaXYKj4AHbQQdTuk8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 text-orange-500 font-semibold hover:text-orange-600"
          >
            Open in Google Maps →
          </a>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.336495520385!2d78.49612929999999!3d17.056185499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbaf006c5ddf29%3A0xe49ca245ced7fc1d!2sSai%20tirumala%20RMC!5e0!3m2!1sen!2sin!4v1781676231607!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Kandukur Plant"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  </div>
</section>
);

};

export default VisitPlants;
