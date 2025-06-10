import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export const Contact = () => (
  <motion.section
    id="contactSection"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="px-4 py-20 scroll-mt-12"
  >
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-3">
        Reach Out To Me
      </h2>
      <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-12">
        DISCUSS A PROJECT OR JUST WANT TO SAY HI?
      </p>

      {/* Contact Row */}
      <div className="flex flex-col sm:flex-row justify-center sm:items-center gap-10 sm:gap-16 text-left">
        <ContactRow
          icon={
            <LinkedInLogoIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          }
          label="LinkedIn"
          value="linkedin.com/in/onu-khatri"
          link="https://www.linkedin.com/in/onu-khatri"
        />
        <ContactRow
          icon={
            <EnvelopeClosedIcon className="w-5 h-5 text-rose-600 dark:text-rose-400" />
          }
          label="Email"
          value="onu.khatri@gmail.com"
          link="mailto:onu.khatri@gmail.com"
        />
        <ContactRow
          icon={
            <MobileIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
          }
          label="Phone"
          value="+91-8570000751"
          link="tel:+918570000751"
        />
      </div>

      {/* Footer Signature */}
      <div className="mt-16 text-sm text-zinc-500 dark:text-zinc-400">
        Made with ❤️ by{" "}
        <span className="font-semibold text-zinc-700 dark:text-zinc-200">
          Anup Singh
        </span>
      </div>
    </div>
  </motion.section>
);

interface ContactRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  link: string;
}

const ContactRow = ({ icon, label, value, link }: ContactRowProps) => (
  <div className="flex items-start gap-3 sm:gap-4">
    <div className="mt-1">{icon}</div>
    <div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
      <a
        href={link}
        target="_blank"
        className="text-base font-medium text-zinc-800 dark:text-zinc-200 hover:underline"
      >
        {value}
      </a>
    </div>
  </div>
);
