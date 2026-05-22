import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Bikey - Bilingual Typing.",
};

export default function TermsPage() {
  return (
    <article className="page">
      <div className="card">
        <p className="eyebrow">Terms</p>
        <h1>Terms of Use</h1>
        <p className="meta">Effective Date: May 22, 2026</p>

        <p className="lead">
          These Terms of Use (&quot;Terms&quot;) govern your use of Bikey -
          Bilingual Typing (&quot;Bikey&quot;, &quot;we&quot;,
          &quot;our&quot;, or &quot;the app&quot;), a custom iOS keyboard
          application. By downloading or using Bikey, you agree to be bound
          by these Terms. If you do not agree, do not use the app.
        </p>

        <h2>License to Use</h2>
        <p>
          Subject to these Terms, we grant you a limited, non-exclusive,
          non-transferable, revocable license to download and use Bikey on
          Apple devices that you own or control, for your personal,
          non-commercial use.
        </p>
        <p>
          This license does not allow you to use Bikey on any device you do
          not own or control, or to redistribute Bikey to others.
        </p>

        <h2>Permitted Use</h2>
        <p>
          Bikey is provided to help you type Japanese and English together
          more smoothly. You agree to use the app only for lawful purposes and
          in accordance with these Terms.
        </p>
        <p>You agree not to:</p>
        <ul>
          <li>
            Reverse-engineer, decompile, or disassemble any part of the app.
          </li>
          <li>
            Use the app in any manner that could damage, disable, or impair
            our services.
          </li>
          <li>
            Attempt to gain unauthorized access to any systems or networks
            connected to the app.
          </li>
          <li>
            Use the app to transmit any content that is unlawful, harmful,
            offensive, or infringing.
          </li>
        </ul>

        <h2>Accounts</h2>
        <p>
          Some features of Bikey (such as custom dictionary sync and profile
          settings) require you to create an account. You are responsible for
          maintaining the confidentiality of your account credentials and for
          all activity that occurs under your account.
        </p>
        <p>
          You agree to provide accurate information when creating an account
          and to keep that information up to date. We reserve the right to
          suspend or terminate accounts that violate these Terms.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          Bikey and all related content, features, and functionality —
          including but not limited to the name, logo, software, text, and
          design — are owned by us or our licensors and are protected by
          applicable intellectual property laws.
        </p>
        <p>
          These Terms do not grant you any right, title, or interest in Bikey
          beyond the limited license described above.
        </p>

        <h2>User Content</h2>
        <p>
          You are solely responsible for the text you type and the content you
          create using Bikey. Bikey does not control or take responsibility for
          messages, documents, or other content produced by users.
        </p>
        <p>
          We do not collect the text you type. Custom dictionary entries that
          you explicitly save to your account are stored as described in our
          Privacy Policy.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          Bikey is provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind, either express or implied, including
          but not limited to implied warranties of merchantability, fitness for
          a particular purpose, and non-infringement.
        </p>
        <p>
          We do not warrant that the app will be error-free, uninterrupted,
          free of viruses or harmful components, or that conversion results
          will be perfectly accurate at all times.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, we shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising from your use of or inability to use Bikey,
          even if we have been advised of the possibility of such damages.
        </p>
        <p>
          Our total liability to you for any claims arising from your use of
          the app shall not exceed the amount you paid for the app in the
          twelve months preceding the claim.
        </p>

        <h2>Changes to the App and Terms</h2>
        <p>
          We may update, modify, suspend, or discontinue features of Bikey at
          any time without notice.
        </p>
        <p>
          We may also revise these Terms from time to time. We will indicate
          the revised date at the top of this page. Your continued use of
          Bikey after changes take effect constitutes acceptance of the updated
          Terms.
        </p>

        <h2>Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to Bikey at
          our discretion, without notice, if we believe you have violated these
          Terms or applicable law.
        </p>
        <p>
          You may stop using the app at any time. To delete your account,
          contact us at the address below.
        </p>

        <h2>Privacy</h2>
        <p>
          Your use of Bikey is also governed by our Privacy Policy, which is
          incorporated into these Terms by reference:
        </p>
        <p>
          <Link className="contact" href="/privacy">
            https://bikey.app/privacy
          </Link>
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with
          applicable law. Any disputes arising from these Terms or your use of
          Bikey shall be resolved through good-faith negotiation before
          pursuing any other legal remedy.
        </p>

        <h2>Entire Agreement</h2>
        <p>
          These Terms, together with our Privacy Policy, constitute the entire
          agreement between you and us regarding your use of Bikey and
          supersede all prior agreements or understandings.
        </p>

        <h2>Contact Us</h2>
        <p>If you have questions about these Terms, contact:</p>
        <p>
          <a className="contact" href="mailto:itsukison00@gmail.com">
            itsukison00@gmail.com
          </a>
        </p>
      </div>
    </article>
  );
}
