import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { BUSINESS, LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Airmets",
  description: "How Airmets collects, uses, and protects your personal information under U.S. and California law.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate={LEGAL.privacyEffectiveDate}>
      <p>
        {BUSINESS.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates {BUSINESS.website} and
        provides commercial aerial photography and videography services in {BUSINESS.region}. This Privacy Policy
        describes our information practices when you visit our website, submit an inquiry, or communicate with us.
        It is intended to comply with applicable U.S. federal guidance (including the Federal Trade Commission&apos;s
        expectations for transparent privacy disclosures and the Children&apos;s Online Privacy Protection Act, or
        COPPA) and California law (including the California Online Privacy Protection Act, CalOPPA, the California
        Consumer Privacy Act, CCPA, and the California Privacy Rights Act, CPRA).
      </p>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Scope</h2>
        <p>
          This policy applies to personal information we collect through our website, contact forms, email, and phone
          communications related to quote requests, bookings, and service delivery. It does not apply to third-party
          websites, apps, or services that we do not control (such as Google Maps), even if linked from our site.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Categories of Information We Collect</h2>
        <p>Depending on how you interact with us, we may collect the following categories of personal information:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong className="text-white">Identifiers</strong> — such as your name, email address, and phone number
            if you provide it
          </li>
          <li>
            <strong className="text-white">Commercial information</strong> — such as the service type you request,
            project details, preferred dates, and related inquiry content
          </li>
          <li>
            <strong className="text-white">Location information you provide</strong> — such as property addresses or
            shoot locations included in your message (this may be considered sensitive personal information under
            California law when it reveals precise geolocation)
          </li>
          <li>
            <strong className="text-white">Internet or device information</strong> — such as IP address, browser
            type, device type, referring URL, and general usage data collected automatically by our hosting and
            content-delivery providers when you load pages on our site
          </li>
          <li>
            <strong className="text-white">Communications</strong> — records of messages you send us and our replies
            when you contact us by form, email, or phone
          </li>
        </ul>
        <p className="mt-3">
          We do not knowingly collect personal information from children under 13. We do not require you to create an
          account to browse our website. We do not currently use analytics platforms, advertising pixels, or sell
          personal information.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Sources of Information</h2>
        <p>We collect personal information from:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong className="text-white">You directly</strong> — when you submit our contact form, email us, or
            call us
          </li>
          <li>
            <strong className="text-white">Your device and browser</strong> — through server logs and security tools
            operated by our hosting and infrastructure providers
          </li>
          <li>
            <strong className="text-white">Embedded third-party content</strong> — when you interact with features
            such as Google Maps embedded on our contact page
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">How We Use Your Information</h2>
        <p>We use personal information for business purposes that are reasonably connected to your inquiry or our operations, including:</p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Responding to quote, booking, and consultation requests</li>
          <li>Planning, performing, and delivering aerial media services you request</li>
          <li>Communicating about project status, scheduling, and deliverables</li>
          <li>Operating, securing, and maintaining our website</li>
          <li>Detecting spam, abuse, or fraudulent submissions</li>
          <li>Complying with legal obligations and enforcing our Terms of Service</li>
        </ul>
        <p className="mt-3">
          If you separately opt in to marketing emails from us, we may use your contact information to send
          promotional messages. You may opt out of marketing emails at any time by using the unsubscribe link in
          those messages or by contacting us at{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-air-red hover:underline">
            {BUSINESS.email}
          </a>
          . Transactional messages about an active inquiry or project are not marketing messages.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">How We Disclose Information</h2>
        <p>
          We do not sell personal information and do not share personal information for cross-context behavioral
          advertising. We may disclose personal information to service providers that process data on our behalf
          solely to help us operate our website and respond to inquiries, including:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong className="text-white">Form and email delivery providers</strong> (such as FormSubmit, Formspree,
            or Resend, depending on configuration) to route contact submissions to our inbox
          </li>
          <li>
            <strong className="text-white">Website hosting providers</strong> (such as Railway) to serve our
            application securely
          </li>
          <li>
            <strong className="text-white">Infrastructure and security providers</strong> (such as Cloudflare) to
            deliver content, protect against abuse, and maintain site performance
          </li>
          <li>
            <strong className="text-white">Embedded map providers</strong> (Google Maps) when you load our
            service-area map — Google may collect information according to its own privacy policy
          </li>
        </ul>
        <p className="mt-3">
          We may also disclose information when required by law, court order, or governmental request, or when we
          believe disclosure is necessary to protect rights, safety, or security.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Cookies and Similar Technologies</h2>
        <p>
          When you first visit our site, you can choose <strong className="text-white">Accept Essential</strong> or{" "}
          <strong className="text-white">Accept All</strong>. Your choice is saved in your browser&apos;s local
          storage so we can remember your preference on future visits. You can change your choice at any time using
          the <strong className="text-white">Cookie Preferences</strong> link in the footer.
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong className="text-white">Essential</strong> — required technologies for site security, performance,
            and core functionality provided by our hosting and infrastructure partners
          </li>
          <li>
            <strong className="text-white">Optional (Accept All)</strong> — embedded third-party content such as
            Google Maps, which may set cookies or collect usage data under the third party&apos;s privacy policy
          </li>
        </ul>
        <p className="mt-3">
          We do not use cookies for advertising or analytics. If your browser sends a Global Privacy Control signal,
          we default to essential-only preferences unless you later choose otherwise. You can also control cookies
          through your browser settings, but disabling certain cookies may affect site functionality or embedded
          content.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Notice at Collection (California)</h2>
        <p>
          When you submit our contact form, we collect the categories of personal information listed above for the
          business purposes described in this policy. Submission is voluntary, but we cannot respond to your inquiry
          without contact information and project details. By submitting the form and checking the consent box, you
          acknowledge this notice and our{" "}
          <a href="/privacy" className="text-air-red hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Your Privacy Rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, delete, or obtain a copy of personal
          information we maintain about you, and to opt out of certain uses of your information. We will not
          discriminate against you for exercising privacy rights granted by law.
        </p>
        <p className="mt-3">To submit a request, contact us using any of the methods in the Contact Us section below with the subject line &quot;Privacy Request.&quot; We may need to verify your identity before fulfilling a request. Authorized agents may submit requests on behalf of California residents if they provide proof of authorization as required by law.</p>
        <p className="mt-3">
          We aim to respond to verified requests within 45 days, or within the additional time permitted by
          applicable law if an extension is necessary. If we cannot fulfill a request, we will explain why, consistent
          with applicable law.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">California Privacy Rights (CCPA / CPRA)</h2>
        <p>
          If you are a California resident, you may have the following rights under the CCPA, as amended by the CPRA,
          subject to certain exceptions:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>
            <strong className="text-white">Right to know</strong> — request details about the categories and specific
            pieces of personal information we collected, the sources, business purposes, and categories of third
            parties to whom we disclosed it
          </li>
          <li>
            <strong className="text-white">Right to delete</strong> — request deletion of personal information we
            collected from you, subject to legal and operational exceptions
          </li>
          <li>
            <strong className="text-white">Right to correct</strong> — request correction of inaccurate personal
            information we maintain about you
          </li>
          <li>
            <strong className="text-white">Right to opt out of sale or sharing</strong> — we do not sell personal
            information or share it for cross-context behavioral advertising
          </li>
          <li>
            <strong className="text-white">Right to limit use of sensitive personal information</strong> — we use
            sensitive personal information you provide (such as property location details) only as reasonably
            necessary to respond to your inquiry and deliver requested services, not for unrelated profiling or
            advertising
          </li>
          <li>
            <strong className="text-white">Right to non-discrimination</strong> — we will not deny services, charge
            different prices, or provide a different level of service because you exercised privacy rights
          </li>
        </ul>
        <p className="mt-3">
          <strong className="text-white">Shine the Light.</strong> California Civil Code § 1798.83 permits
          California residents to request information about our disclosure of personal information to third parties
          for their direct marketing purposes. Because we do not share personal information with third parties for
          their own direct marketing purposes, we do not maintain a separate list for this purpose. You may still
          contact us with questions using the information below.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Children&apos;s Privacy</h2>
        <p>
          Our website and services are intended for adults and businesses. We do not knowingly collect personal
          information from children under 13, consistent with COPPA. If you believe a child under 13 provided us
          personal information, contact us and we will delete it. We do not knowingly sell or share personal
          information of consumers under 16.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Do Not Track and Global Privacy Control</h2>
        <p>
          Some browsers transmit a &quot;Do Not Track&quot; (DNT) signal or Global Privacy Control (GPC) preference.
          We do not currently respond to DNT signals because we do not track users across third-party websites for
          advertising purposes. If we introduce cross-site tracking or selling/sharing of personal information in the
          future, we will update this policy and honor applicable opt-out mechanisms, including GPC where required by
          law.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Third-Party Collection on Our Site</h2>
        <p>
          When you interact with embedded content such as Google Maps, third parties may collect information about
          your device and online activities according to their own privacy policies. We encourage you to review{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-air-red hover:underline"
          >
            Google&apos;s Privacy Policy
          </a>{" "}
          before using embedded map features.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Data Security and Retention</h2>
        <p>
          We use reasonable administrative, technical, and organizational safeguards designed to protect personal
          information. No method of transmission over the Internet or electronic storage is completely secure.
        </p>
        <p className="mt-3">
          We retain contact inquiries and related communications for up to 24 months after our last interaction with
          you, unless a longer period is required for legal, tax, insurance, or dispute-resolution purposes. When
          information is no longer needed, we delete it or anonymize it where feasible.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make material changes, we will post the updated
          policy on this page and revise the effective date above. Your continued use of the website after changes are
          posted constitutes notice of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="font-display mb-3 text-xl font-bold text-white">Contact Us</h2>
        <p>
          For privacy questions, notices at collection, or to exercise your rights, contact:
        </p>
        <p className="mt-3">
          {BUSINESS.name}
          <br />
          {BUSINESS.region}
          <br />
          <a href={`mailto:${BUSINESS.email}`} className="text-air-red hover:underline">
            {BUSINESS.email}
          </a>
          <br />
          <a href={`tel:${BUSINESS.phoneTel}`} className="text-air-red hover:underline">
            {BUSINESS.phone}
          </a>
        </p>
        <p className="mt-3 text-sm text-air-muted">
          Last updated {LEGAL.privacyLastUpdated}.
        </p>
      </section>
    </LegalPage>
  );
}