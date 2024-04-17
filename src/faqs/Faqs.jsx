import React, { useState } from "react";

import { faqsData } from "./data";
import Faq from "./Faq";

const Faqs = () => {
  //   console.log(faqsData);
  const [faqs, setFaqs] = useState(faqsData);
  return (
    <main>
      <section>
        <h1>FAQs</h1>
        {faqs.map((faq) => (
          <Faq key={faq.id} {...faq} />
        ))}
      </section>
    </main>
  );
};

export default Faqs;
