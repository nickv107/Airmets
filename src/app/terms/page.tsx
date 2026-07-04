import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { BUSINESS, LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service | Airmets",
  description: "Terms governing use of the Airmets website and aerial media services.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" effectiveDate={LEGAL.termsEffectiveDate}>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of {BUSINESS.website} and any inquiry or service
        engagement with {BUSINESS.name}. By using this website or submitting a contact request, you agree to these
        Terms and our{" "}
        <a href="/privacy" className="text-air-red hover:underline">
          Privacy Policy
        </a>
        , which describes how we collect and use personal information.
      </p>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Services</h2>
        <p>
          {BUSINESS.name} provides commercial unmanned aircraft systems (UAS) photography and videography services in
          {BUSINESS.region}. Specific scope, deliverables, pricing, and schedules are defined in a written proposal
          or service agreement for each project. Website content is for general information only and does not
          constitute a binding offer.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">FAA and Operational Compliance</h2>
        <p>
          Commercial UAS operations are conducted under Federal Aviation Administration (FAA) rules, including 14 CFR
          Part 107, where applicable. Flights are subject to airspace restrictions, weather, aircraft limitations,
          LAANC or other FAA authorizations, local ordinances, park rules, film permits, and property access
          requirements. We reserve the right to postpone or cancel flights when safety or legal compliance requires
          it.
        </p>
        <p className="mt-3">
          References to FAA Part 107 certification on this website indicate that operations are performed by or under
          the supervision of an FAA-certificated remote pilot, unless otherwise stated in writing for a specific
          project.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Client Responsibilities</h2>
        <p>Clients are responsible for:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Providing accurate project and property information</li>
          <li>Obtaining permission to film on private property and coordinating access</li>
          <li>Disclosing known restrictions, HOA rules, event permits, or privacy-sensitive areas</li>
          <li>Using delivered media in compliance with MLS, brokerage, advertising, and privacy laws applicable to their use case</li>
        </ul>
        <p className="mt-3">
          Under California Civil Code § 1708.8, capturing images in contexts where individuals have a reasonable
          expectation of privacy may require additional permissions. Clients must inform us of sensitive residential,
          personal, or familial settings before operations begin.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Marketing Claims and Portfolio</h2>
        <p>
          Technical specifications, sample imagery, and service descriptions on this website are provided for
          illustration unless expressly identified as a completed client project with permission. Deliverable formats,
          resolutions, and MLS compatibility depend on the aircraft, location, and package selected for your
          project.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Intellectual Property</h2>
        <p>
          Website text, design, branding, and original media created by {BUSINESS.name} are protected by applicable
          intellectual property laws. Unless otherwise agreed in writing, {BUSINESS.name} retains ownership of raw
          and edited media until full payment is received. License terms for client use are defined in each project
          agreement.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Disclaimer of Warranties</h2>
        <p>
          This website and any preliminary communications are provided &quot;as is&quot; without warranties of any
          kind, express or implied, including merchantability, fitness for a particular purpose, or non-infringement.
          We do not guarantee specific marketing outcomes, property sale timelines, MLS acceptance, or uninterrupted
          flight availability.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, {BUSINESS.name} shall not be liable for indirect, incidental,
          special, consequential, or punitive damages arising from use of this website or services. Our total
          liability for any claim relating to a specific project shall not exceed the amount paid by the client for
          that project, except where liability cannot be limited under applicable law.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless {BUSINESS.name} from claims arising out of inaccurate information
          you provide, unauthorized property access arrangements, or your misuse of delivered media.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of California, without regard to conflict-of-law
          principles. Disputes shall be brought in courts located in California, unless otherwise required by law.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Changes</h2>
        <p>
          We may update these Terms from time to time. Material changes will be posted on this page with a revised
          effective date. Your continued use of the website after changes are posted constitutes acceptance of the
          updated Terms.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Electronic Communications</h2>
        <p>
          By contacting us through this website, email, or phone, you consent to receive communications from us
          regarding your inquiry or project by email or phone. Marketing messages, if any, will include an
          unsubscribe option consistent with applicable law, including the CAN-SPAM Act.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Contact</h2>
        <p>
          Questions about these Terms may be sent to{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-air-red hover:underline">
            {BUSINESS.email}
          </a>{" "}
          or{" "}
          <a href={`tel:${BUSINESS.phoneTel}`} className="text-air-red hover:underline">
            {BUSINESS.phone}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}