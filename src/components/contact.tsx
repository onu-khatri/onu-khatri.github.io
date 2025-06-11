import type { ContactInfo } from "../data/contactData";

type ConactRowProps = {
  contactData: ContactInfo;
};

export const ContactRow: React.FC<ConactRowProps> = ({ contactData }) => (
  <div className="flex items-start gap-3 sm:gap-4">
    <div className="mt-1">
      <contactData.icon className={`w-5 h-5 ${contactData.iconColorClass}`} />
    </div>
    <div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {contactData.label}
      </p>
      <a
        href={contactData.link}
        target="_blank"
        className="text-base font-medium text-zinc-800 dark:text-zinc-200 hover:underline"
      >
        {contactData.value}
      </a>
    </div>
  </div>
);
