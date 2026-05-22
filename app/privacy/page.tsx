import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Bikey - Bilingual Typing. Learn how Bikey handles your data.",
};

export default function PrivacyPage() {
  return (
    <article className="page">
      <div className="card">
        <p className="eyebrow">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p className="meta">Effective Date: May 22, 2026</p>

        <p className="lead">
          Bikey - Bilingual Typing (&quot;Bikey&quot;, &quot;we&quot;,
          &quot;our&quot;, or &quot;the app&quot;) is a custom iOS keyboard
          designed to help users type Japanese and English together more
          smoothly. This Privacy Policy explains what information we collect,
          how we use it, and your choices.
        </p>

        <h2>Typed Content</h2>
        <p>
          <strong>Bikey does not collect, store, sell, or share what you type.</strong>
        </p>
        <p>
          All keyboard input is processed locally on your device. We do not
          transmit keystrokes, typed text, or input history to any server. We
          do not use typed content for advertising, user profiling, or any
          other purpose.
        </p>

        <h2>Full Access</h2>
        <p>
          iOS may ask whether you want to allow &quot;Full Access&quot; for a
          third-party keyboard. Bikey&apos;s core keyboard functionality works
          without Full Access.
        </p>
        <p>
          If you choose to enable Full Access, it is used solely to support
          app features such as syncing your custom dictionary with your
          account. It is never used to collect, transmit, store, sell, or
          share what you type.
        </p>

        <h2>Information We Collect</h2>
        <p>
          Depending on how you use the app, we may collect the following
          categories of information:
        </p>
        <ul>
          <li>
            <strong>Account information.</strong> When you create an account
            or sign in, we collect your name, email address, and a hashed
            password. This is required to provide account features.
          </li>
          <li>
            <strong>Profile and preferences.</strong> We store your in-app
            settings (such as language mode) and account creation date to
            provide a consistent experience across devices.
          </li>
          <li>
            <strong>Custom dictionary entries.</strong> If you save custom
            phrases or dictionary entries, these are stored in your account so
            they can be synced across your devices.
          </li>
          <li>
            <strong>Usage statistics.</strong> We may store aggregate counts
            such as the number of conversions you have made, used to display
            statistics within the app. These are not linked to typed content.
          </li>
        </ul>
        <p>
          We do <strong>not</strong> collect your contacts, photos, location,
          or payment information through the app. We do not collect anything
          you type with the keyboard.
        </p>

        <h2>How We Use Your Information</h2>
        <p>We use the information described above to:</p>
        <ul>
          <li>Provide, operate, and maintain Bikey and its features.</li>
          <li>Authenticate you and keep your account secure.</li>
          <li>Sync your settings and custom dictionary across your devices.</li>
          <li>Respond to your support requests.</li>
          <li>Improve the app and diagnose technical issues.</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal information with third
          parties for their own marketing or advertising purposes.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Bikey uses <strong>Supabase</strong> to power account
          authentication, profile storage, settings sync, and custom
          dictionary sync. Supabase processes account data (name, email,
          preferences) on our behalf under its own privacy policy. Supabase
          does not receive or process the text you type with the keyboard.
        </p>
        <p>
          Bikey does not currently use analytics SDKs, advertising networks,
          or crash-reporting services. If we introduce any such services in
          the future, this Privacy Policy will be updated before those
          features are released, and you will be notified within the app.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your account data for as long as your account is active.
          If you delete your account, your profile, settings, and custom
          dictionary entries are deleted from our servers. Aggregate usage
          counts that cannot be linked to an individual may be retained in
          anonymized form.
        </p>

        <h2>Data Security</h2>
        <p>
          We use industry-standard measures to protect your information,
          including encrypted connections (HTTPS/TLS) for all data
          transmitted between the app and our backend. Passwords are never
          stored in plain text. However, no method of transmission or storage
          is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2>Your Rights and Choices</h2>
        <p>
          You can update your account information (name, email) from within
          the app at any time. You can delete your custom dictionary entries
          at any time. If you would like to request deletion of your account
          and associated data, please contact us at the address below and we
          will process your request promptly.
        </p>
        <p>
          You are not required to create an account. Many Bikey features work
          without signing in.
        </p>

        <h2>Analytics and Tracking</h2>
        <p>
          Bikey does not track users across third-party apps or websites.
          Bikey does not use the Apple Advertising Identifier (IDFA) or any
          other advertising identifier.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Bikey is not directed to children under the age of 13. We do not
          knowingly collect personal information from children under 13. If
          you believe a child has provided us with personal information,
          please contact us so we can delete it.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in the app or applicable law. When we do, we will revise
          the Effective Date at the top of this page. For significant changes,
          we will provide a more prominent notice (such as a notification
          within the app). Your continued use of Bikey after the changes take
          effect constitutes acceptance of the updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions, concerns, or requests regarding this Privacy
          Policy or your personal data, please contact us at:
        </p>
        <p>
          <a className="contact" href="mailto:itsukison00@gmail.com">
            itsukison00@gmail.com
          </a>
        </p>
        <p>
          We aim to respond to all privacy-related inquiries within 7 business
          days.
        </p>
      </div>
    </article>
  );
}
