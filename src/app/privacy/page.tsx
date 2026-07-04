import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { BUSINESS, LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Airmets",
  description: "How Airmets collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate={LEGAL.privacyEffectiveDate}>
      <p>
        {BUSINESS.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates {BUSINESS.website} and
        provides commercial aerial photography and videography services in {BUSINESS.region}. This Privacy Policy
        explains how we collect, use, disclose, and protect personally identifiable information (&quot;PII&quot;)
        when you visit our website or contact us.
      </p>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Information We Collect</h2>
        <p>We may collect the following categories of PII when you use our contact form or communicate with us:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Service type requested</li>
          <li>Project details you provide (which may include property addresses or other location information)</li>
        </ul>
        <p className="mt-3">
          We do not knowingly collect PII from children under 13. We do not currently use analytics, advertising
          pixels, or sell personal information.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">How We Use Your Information</h2>
        <p>We use PII only for purposes reasonably connected to your inquiry, including:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Responding to quote, booking, and consultation requests</li>
          <li>Planning and delivering aerial media services you request</li>
          <li>Communicating about your project status and deliverables</li>
          <li>Complying with legal obligations and protecting our rights</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Third Parties We Share Information With</h2>
        <p>We may share PII with the following categories of service providers solely to operate our website and respond to inquiries:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong className="text-white">Form processing providers</strong> (such as Formspree) to deliver contact
            form submissions to us
          </li>
          <li>
            <strong className="text-white">Website hosting providers</strong> to serve our website securely
          </li>
          <li>
            <strong className="text-white">Embedded map providers</strong> (Google Maps) when you load our service-area
            map — Google may collect information according to its own privacy policy
          </li>
        </ul>
        <p className="mt-3">We do not sell or share PII for cross-context behavioral advertising.</p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Reviewing or Changing Your Information</h2>
        <p>
          To review, correct, or request deletion of PII we collected from you, email{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-air-red hover:underline">
            {BUSINESS.email}
          </a>{" "}
          with the subject line &quot;Privacy Request.&quot; We will verify your request and respond within a
          reasonable time, consistent with applicable law.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">California Privacy Rights</h2>
        <p>
          If you are a California resident, you may have additional rights under the California Consumer Privacy Act
          (CCPA), as amended by the California Privacy Rights Act (CPRA), including rights to know, delete, correct,
          and opt out of sale or sharing of personal information. We do not sell personal information. To exercise
          applicable rights, contact us at{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-air-red hover:underline">
            {BUSINESS.email}
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Do Not Track</h2>
        <p>
          Some browsers offer a &quot;Do Not Track&quot; (DNT) signal. We do not currently respond to DNT signals
          because we do not track users across third-party websites for advertising purposes. If we introduce
          cross-site tracking in the future, we will update this policy and honor applicable opt-out mechanisms,
          including Global Privacy Control where required.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Third-Party Collection on Our Site</h2>
        <p>
          When you interact with embedded content such as Google Maps, third parties may collect information about
          your online activities over time and across different websites, subject to their own privacy policies. We
          encourage you to review Google&apos;s privacy policy before using embedded map features.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Data Security and Retention</h2>
        <p>
          We use reasonable administrative and technical safeguards to protect PII. No method of transmission over
          the Internet is completely secure. We retain contact inquiries only as long as needed for business,
          legal, or operational purposes, then delete or anonymize them when no longer required.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make material changes, we will post the
          updated policy on this page and revise the effective date above. Continued use of the website after changes
          are posted constitutes notice of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Contact Us</h2>
        <p>
          Questions about this Privacy Policy or our privacy practices may be directed to:
        </p>
        <p className="mt-3">
          {BUSINESS.name}
          <br />
          {BUSINESS.region}
          <br />
          <a href={`mailto:${BUSINESS.email}`} className="text-air-red hover:underline">
            {BUSINESS.email}
          </a>
        </p>
      </section>
    </LegalPage>
  );
}