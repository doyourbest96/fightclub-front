interface FaqItemProps {
  question: string;
  answer?: string;
}

const FaqItem = ({ faq }: { faq: FaqItemProps }) => {
  return (
    <div className="flex flex-col">
      <button className="px-2 py-1 flex justify-between items-center font-bold rounded-md hover:bg-gray-800">
        <span>{faq.question}</span>
        <span>{"+"}</span>
      </button>
      <p className="text-sm">{faq.answer ? faq.answer : ""}</p>
    </div>
  );
};

export default FaqItem;
