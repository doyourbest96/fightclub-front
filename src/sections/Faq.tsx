import FaqItem from "@/components/FaqItem/FaqItem";

const faqData = [
  {
    question: "What is FICCO coin",
    answer: "Answer should be placed here.",
  },
  {
    question: "How do I purchage FICCO coins from the pre-sale",
    answer: "Answer should be placed here.",
  },
  {
    question: "Which blockchain network is FICCO coin on",
    answer: "Answer should be placed here.",
  },
  {
    question: "When can I claim my coins",
    answer: "Answer should be placed here.",
  },
  {
    question: "How can I store and manage my FICCO coins",
    answer: "Answer should be placed here.",
  },
  {
    question: "For what can I use my FICCO coins",
    answer: "Answer should be placed here.",
  },
  {
    question: "Can I sell my FICCO coins",
    answer: "Answer should be placed here.",
  },
];

const Faq = () => {
  return (
    <div className="max-w-lg w-full flex flex-col gap-6 rounded-md">
      <p className="text-xl font-black text-center italic">FAQ</p>
      <div className="w-full flex flex-col gap-2">
        {faqData.map((faq, idx) => (
          <div key={idx}>
            <FaqItem faq={faq} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
