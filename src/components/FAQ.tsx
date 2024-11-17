import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItems } from "@/data/data";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ faqItems = FAQItems }: { faqItems?: FAQItem[] }) {
  return (
    <div className="w-full max-w-4xl mx-auto my-12 px-4 space-y-6 md:space-y-12">
      <div className="space-y-2">
        <h4 className="text-lg text-primary font-bold text-center">
          Explore Commonly Asked Questions
        </h4>
        <h2 className="text-4xl sm:text-5xl font-bold text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-primary">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
